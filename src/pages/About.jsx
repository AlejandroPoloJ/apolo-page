import './About.css';

const timeline = [
  {
    year: 'Nov 2025 — May 2026',
    role: 'Centers Developer',
    org: 'NTT DATA Perú - Remoto',
    desc: 'Implementé comunicación desacoplada entre microservicios con Spring Cloud, Feign Client y RabbitMQ. Aumenté la cobertura de pruebas a 80% (JUnit 5, Mockito, JaCoCo), documenté endpoints con OpenAPI/Swagger e implementé autenticación con Spring Security y JWT para un cliente internacional del sector seguros.',
  },
  {
    year: 'Abr 2024 — Nov 2025',
    role: 'Programador Backend',
    org: 'Empresa Agroindustrial Pomalca',
    desc: 'Desarrollé más de 30 endpoints REST con Java, Spring Boot y React para sistemas internos de gestión, reduciendo el tiempo de procesamiento en 30%. Construí una app offline-first con Flutter para uso en campo y automaticé procesos internos con Java Swing.',
  },
  {
    year: 'Dic 2023 — Mar 2024',
    role: 'Practicante de Desarrollo',
    org: 'Empresa Agroindustrial Pomalca',
    desc: 'Desarrollé dos aplicaciones web (Java Spring + React) desplegadas en Nginx para registro de asistencia y reportes en tiempo real, usadas por 200 colaboradores en eventos corporativos.',
  },
  {
    year: 'Nov 2022 — Ene 2024',
    role: 'Teacher Part Time',
    org: 'Crack the Code - Remoto',
    desc: 'Enseñé Python a equipos B2B de Banorte (México) y Costa Rica, y cursos de desarrollo web para Mercado Libre México, capacitando a más de 50 estudiantes con 90% de satisfacción.',
  }
];

const skills = [
  {
    group: 'Backend',
    items: [
      'Java 8 / 11 / 17 / 21',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'Spring Cloud',
      'Arquitectura Hexagonal',
    ],
  },
  {
    group: 'Testing',
    items: ['JUnit 5', 'Mockito', 'JaCoCo'],
  },
  {
    group: 'Bases de datos',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Mensajería',
    items: ['Apache Kafka', 'RabbitMQ', 'Arquitectura orientada a eventos'],
  },
  {
    group: 'DevOps',
    items: ['Docker', 'Git', 'Maven', 'CI/CD', 'OpenAPI / Swagger'],
  },
  {
    group: 'Frontend / Mobile',
    items: ['JavaScript', 'React.js', 'Flutter'],
  },
];

const languages = [
  { name: 'Español', level: 'nativo' },
  { name: 'Inglés', level: 'básico-intermedio - lectura técnica' },
];

export default function About() {
  return (
    <div className="container">
      <div className="page-head">
        <span className="section-label mono">GET /about</span>
        <h1>Sobre mí</h1>
        <p>
          Backend Developer con 3 años de experiencia desarrollando APIs
          REST y arquitecturas de microservicios con Java y Spring Boot.
          He trabajado con Spring Security, Spring Cloud, mensajería con
          RabbitMQ, arquitectura hexagonal y testing automatizado en
          sistemas empresariales del sector seguros y agroindustrial.
        </p>
      </div>

      <section className="about-section">
        <h2 className="mono about-section__title">experiencia</h2>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.role + item.year} className="timeline__item">
              <span className="mono timeline__year">{item.year}</span>
              <div className="timeline__body">
                <h3>
                  {item.role} <span className="timeline__org">- {item.org}</span>
                </h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section">
        <h2 className="mono about-section__title">educación</h2>
        <div className="timeline__body">
          <h3>
            Bachiller en Ingeniería de Sistemas{' '}
            <span className="timeline__org">
              - Universidad Nacional Pedro Ruiz Gallo
            </span>
          </h3>
          <p>
            2019 — 2024 - Tercio superior de la promoción - Becario PRONABEC
            2021 y 2023
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="mono about-section__title">habilidades</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skills-group">
              <h3 className="mono">{s.group}</h3>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="mono about-section__title">idiomas</h2>
        <ul className="languages-list">
          {languages.map((l) => (
            <li key={l.name} className="languages-list__item">
              <span>{l.name}</span>
              <span className="mono languages-list__level">{l.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
