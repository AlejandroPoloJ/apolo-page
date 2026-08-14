import StatusBadge from '../components/StatusBadge';
import './Projects.css';

const projects = [
  {
    name: 'orderflow-microservices',
    desc: 'Sistema distribuido de gestión de pedidos desarrollado con Java y Spring Boot, compuesto por microservicios de pedidos, inventario y pagos, con comunicación asíncrona mediante Apache Kafka, Saga por coreografía, Transactional Outbox, PostgreSQL y control de idempotencia.',
    tags: ['Spring Boot', 'Microservices', 'Apache Kafka', 'Saga', 'Outbox', 'PostgreSQL'],
    status: 'dev',
    repo: null,
    demo: null,
  },
  {
    name: 'library-management',
    desc: 'Sistema de gestión de biblioteca desarrollado con Java y Spring Boot aplicando Arquitectura Hexagonal, DDD, Clean Code y principios SOLID, con casos de uso para préstamos, devoluciones, multas y administración de ejemplares mediante una API REST desacoplada.',
    tags: ['Spring Boot', 'Hexagonal', 'Apache Kafka', 'DDD'],
    status: 'dev',
    repo: null,
    demo: null,
  },
  {
    name: 'autoPLAME',
    desc: 'Aplicación de escritorio desarrollada con JavaFX para convertir automáticamente archivos TXT de SUNAT al formato requerido por PLAME (PS4 y 4TA), reduciendo errores manuales y acelerando significativamente el proceso de generación de declaraciones.',
    tags: ['JavaFX', 'Java', 'Maven'],
    status: 'ok',
    repo: 'https://github.com/AlejandroPoloJ/autoPLAME',
    demo: null,
  },
  {
    name: 'gestion-pomalca-api',
    desc: 'Más de 30 endpoints REST con Java, Spring Boot y React para sistemas internos de gestión de la Empresa Agroindustrial Pomalca, digitalizando procesos manuales y reduciendo el tiempo de procesamiento en 30%.',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    status: 'ok',
    repo: null,
    demo: 'https://www.pomalca.com.pe:3000/',
  },
  {
    name: 'campo-offline-flutter',
    desc: 'Aplicación offline-first con Flutter usada por personal en campo, sincronizando datos operativos con el servidor central y eliminando el 95% de pérdida de información por falta de conectividad.',
    tags: ['Flutter', 'Sync', 'REST API'],
    status: 'ok',
    repo: null,
    demo: null,
  },
  {
    name: 'asistencia-tiempo-real',
    desc: 'Aplicaciones web con Java Spring + React desplegadas en Nginx para registro de asistencia y generación de reportes en tiempo real, usadas por 200 colaboradores en eventos corporativos.',
    tags: ['Spring Boot', 'React', 'Nginx'],
    status: 'ok',
    repo: null,
    demo: null,
  },
  {
    name: 'automatizacion-respaldo',
    desc: 'Aplicaciones de escritorio con Java Swing para automatizar procesos internos y respaldo seguro de datos, reduciendo tareas manuales de 3 horas a 10 minutos por semana.',
    tags: ['Java Swing', 'Automatización'],
    status: 'archived',
    repo: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="page-head">
        <span className="section-label mono">GET /projects</span>
        <h1>Proyectos</h1>
        <p>
          Sistemas y servicios backend que he construido en los sectores
          seguros y agroindustrial, con foco en arquitectura limpia,
          integración de servicios y testing automatizado.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
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
            {(p.repo || p.demo) && (
              <div className="project-card__links mono">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    repositorio ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    demo ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
