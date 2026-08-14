import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import './Home.css';

const stack = [
  'Java 21',
  'Spring Boot',
  'Spring Security',
  'Spring Cloud',
  'RabbitMQ',
  'Apache Kafka',
  'Docker',
  'SQLServer',
  'PostgreSQL',
];

const metrics = [
  { value: '3+', label: 'años de experiencia' },
  { value: '30+', label: 'endpoints REST en producción' },
  { value: '80%', label: 'cobertura de testing promedio' },
  { value: '95%', label: 'menos pérdida de datos (offline-first)' },
];

const featured = [
  {
    name: 'library-management',
    desc: 'Sistema de gestión de biblioteca desarrollado con Java y Spring Boot aplicando Arquitectura Hexagonal, DDD, Clean Code y principios SOLID, con casos de uso para préstamos, devoluciones, multas y administración de ejemplares mediante una API REST desacoplada.',
    tags: ['Spring Boot', 'Hexagonal', 'Apache Kafka', 'DDD'],
    status: 'ok',
  },
  {
    name: 'gestion-pomalca',
    desc: 'Más de 30 endpoints REST con Java, Spring Boot y React para sistemas internos de gestión, digitalizando procesos manuales y reduciendo el tiempo de procesamiento en 30%.',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    status: 'ok',
  },
];

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero__text">
          <span className="mono hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            disponible - GET /
          </span>
          <h1 className="hero__title">
            Construyo backends que no se caen
            <br />a las 3&nbsp;a.m.
          </h1>
          <p className="hero__subtitle">
            Backend Developer con 3 años de experiencia construyendo APIs
            REST y arquitecturas de microservicios con Java y Spring Boot
            para sistemas empresariales de seguros y agroindustria.
          </p>
          <div className="hero__cta">
            <Link to="/projects" className="btn btn--primary">
              Ver proyectos
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Hablemos
            </Link>
          </div>
        </div>

        <div className="hero__panel mono">
          <div className="hero__panel-bar">
            <span className="hero__panel-dotclose" />
            <span className="hero__panel-dotrestore" />
            <span className="hero__panel-dotminimize" />
            <span className="hero__panel-title">GET /api/v1/perfil</span>
          </div>
          <pre className="hero__panel-body">{
`{
  "nombre": "Alejandro Polo",
  "rol": "Backend Java Developer",
  "stack_principal": "Java 21 - Spring Boot",
  "años_experiencia": 3,
  "ubicacion": "Lima, Perú",
  "estado": "200 OK",
  "disponible": true
}`}</pre>
        </div>
      </section>

      <section className="container stack-strip">
        <span className="mono stack-strip__label">stack</span>
        <ul className="stack-strip__list">
          {stack.map((s) => (
            <li key={s} className="mono">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="container metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metrics__item">
            <span className="mono metrics__value">{m.value}</span>
            <span className="metrics__label">{m.label}</span>
          </div>
        ))}
      </section>

      <section className="container featured">
        <div className="featured__head">
          <h2 className="mono featured__label">GET /proyectos/destacados</h2>
          <Link to="/projects" className="featured__all">
            ver todos →
          </Link>
        </div>

        <div className="featured__grid">
          {featured.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-card__head">
                <h3 className="mono">{p.name}</h3>
                <StatusBadge variant={p.status} />
              </div>
              <p className="project-card__desc">{p.desc}</p>
              <ul className="project-card__tags mono">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
