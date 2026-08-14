import StatusBadge from './StatusBadge';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const info = { 
    email: 'bryan_polo@outlook.com',
    linkedin: 'https://linkedin.com/in/alejandro-polo-julca'
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__status">
          <StatusBadge variant="ok" />
          <span className="mono footer__uptime">
            disponible para nuevos proyectos
          </span>
        </div>

        <div className="footer__links mono">
          <a href={`mailto:${info.email}`}>Email</a>
          <a href={info.linkedin} target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>

        <span className="mono footer__year">© {year}</span>
      </div>
    </footer>
  );
}
