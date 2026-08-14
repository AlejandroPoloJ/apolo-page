import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Nav.css';

const routes = [
  { method: 'GET', path: '/', label: 'inicio', to: '/' },
  { method: 'GET', path: '/about', label: 'sobre-mi', to: '/about' },
  { method: 'GET', path: '/projects', label: 'proyectos', to: '/projects' },
  { method: 'POST', path: '/contact', label: 'contacto', to: '/contact' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand mono">
          apolo<span className="nav__brand-dot">.</span>dev
        </NavLink>

        <nav className="nav__routes" aria-label="Navegación principal">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.to === '/'}
              className={({ isActive }) =>
                'nav__route mono' + (isActive ? ' nav__route--active' : '')
              }
            >
              <span
                className={
                  'nav__method' +
                  (r.method === 'POST' ? ' nav__method--post' : '')
                }
              >
                {r.method}
              </span>
              <span className="nav__path">{r.path}</span>
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
