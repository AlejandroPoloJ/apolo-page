import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  const [status, setStatus] = useState({ 
    loading: false, 
    sent: false, 
    error: null, 
    badgeVariant: 'ok' 
  });

  const [revealed, setRevealed] = useState({ email: false, phone: false });
  const [copiedText, setCopiedText] = useState({ email: false, phone: false });

  const realEmail = 'bryan_polo' + '@' + 'outlook.com';
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, sent: false, error: null, badgeVariant: 'ok' });

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 429) {
          throw {
            message: data.message || 'Has enviado demasiados mensajes. Inténtalo más tarde.',
            variant: 'rateLimit'
          };
        }
        throw {
          message: data.message || 'Ocurrió un error en el servidor.',
          variant: 'serverError'
        };
      }

      setStatus({ loading: false, sent: true, error: null, badgeVariant: 'ok' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);

      const isNetworkError = err.message === 'Failed to fetch' || !err.variant;

      setStatus({
        loading: false,
        sent: false,
        error: isNetworkError 
          ? 'No se pudo conectar con el servidor. Inténtalo más tarde.' 
          : err.message,
        badgeVariant: isNetworkError ? 'error' : err.variant
      });
    }
  };

  const handleReveal = (type) => {
    setRevealed((prev) => ({ ...prev, [type]: true }));
  };

  const handleCopy = (e, text, type) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedText((prev) => ({ ...prev, [type]: true }));
    
    setTimeout(() => {
      setCopiedText((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <div className="container">
      <div className="page-head">
        <span className="section-label mono">POST /contact</span>
        <h1>Hablemos</h1>
        <p>
          ¿Tienes un proyecto, una vacante o simplemente quieres conversar
          de arquitectura de software? Escríbeme.
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="mono field__label">nombre</span>
            <input
              type="text"
              name="name"
              required
              disabled={status.loading}
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </label>

          <label className="field">
            <span className="mono field__label">email</span>
            <input
              type="email"
              name="email"
              required
              disabled={status.loading}
              value={form.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
            />
          </label>

          <label className="field">
            <span className="mono field__label">mensaje</span>
            <textarea
              name="message"
              required
              rows={5}
              disabled={status.loading}
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntame en qué estás trabajando..."
            />
          </label>

          <button 
            type="submit" 
            className={`btn btn--primary btn--full ${status.loading ? 'btn--loading' : ''}`}
            disabled={status.loading}
          >
            {status.loading ? (
              <span className="btn__spinner-container">
                <span className="spinner" /> Enviando...
              </span>
            ) : (
              'Enviar mensaje'
            )}
          </button>

          {/* Mensaje de Éxito */}
          {status.sent && (
            <div className="contact-response mono">
              <StatusBadge variant="ok" />
              <span>Mensaje recibido. Te respondo pronto.</span>
            </div>
          )}

          {/* Mensaje de Error (Incluye el Rate Limit) */}
          {status.error && (
            <div className="contact-response contact-response--error mono">
              <StatusBadge variant="error" />
              <span>{status.error}</span>
            </div>
          )}
        </form>

        <aside className="contact-direct">
          <h2 className="mono">contacto directo</h2>
          
          <div className="contact-direct__wrapper">
            {revealed.email ? (
              <div className="contact-direct__row">
                <a href={`mailto:${realEmail}`} className="contact-direct__item">
                  {realEmail}
                </a>
                <button 
                  onClick={(e) => handleCopy(e, realEmail, 'email')} 
                  className="btn-action mono"
                >
                  {copiedText.email ? '¡copiado!' : 'copiar'}
                </button>
              </div>
            ) : (
              <div className="contact-direct__row">
                <span className="contact-direct__item contact-direct__item--obscured">
                  br••••@outlook.com
                </span>
                <button onClick={() => handleReveal('email')} className="btn-action mono">
                  revelar
                </button>
              </div>
            )}
          </div>

          <div className="contact-direct__wrapper">
            <div className="contact-direct__row">
              <a
                href="https://linkedin.com/in/alejandro-polo-julca"
                target="_blank"
                rel="noreferrer"
                className="contact-direct__item"
              >
                linkedin.com/in/alejandro-polo-julca
              </a>
            </div>
          </div>

          <span className="contact-direct__item contact-direct__item--muted mono">
            Lima, Perú
          </span>
        </aside>
      </div>
    </div>
  );
}