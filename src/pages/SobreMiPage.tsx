import { IconMail, IconLocation } from '../components/icons';
import styles from './SobreMiPage.module.css';

const habilidades = {
  lenguajes: ['C#', 'F#', 'VB', 'SQL', 'Oracle'],
  frameworks: [
    '.NET 8', '.NET 6', '.NET Framework',
    'ASP.NET', 'ASP.NET Core', 'ASP.NET MVC',
    'WCF', 'XAF DevExpress',
  ],
  orm: ['Entity Framework Core', 'Entity Framework 6', 'Dapper', 'XPO'],
};

const aptitudes = [
  'Resolución de problemas',
  'Comunicación asertiva',
  'Investigación',
  'Adaptabilidad',
];

const experiencias = [
  {
    periodo: 'Enero 2025 – Actualidad',
    empresa: 'Finac Finanzas y Actuaría S.A.S.',
    cargo: 'Coordinador de Productos de Software',
    ubicacion: 'Bogotá, Colombia',
    items: [
      'Desarrollo y mantenimiento de aplicaciones de escritorio y web utilizando C# y F#, principalmente bajo .NET Framework.',
      'Identificación de errores, solución y mejoramiento de funcionalidades en las aplicaciones de la compañía.',
      'Revisión de código al equipo para identificar errores, problemas de calidad, vulnerabilidades de seguridad y oportunidades de mejora.',
      'Elaboración de documentación técnica y funcional: guías de implementación y especificaciones técnicas.',
      'Análisis y delegación de requerimientos.',
    ],
  },
  {
    periodo: 'Agosto 2023 – Diciembre 2024',
    empresa: 'Finac Finanzas y Actuaría S.A.S.',
    cargo: 'Profesional II de Desarrollo – Productos de software',
    ubicacion: 'Bogotá, Colombia',
    items: [
      'Desarrollo y mantenimiento de aplicaciones de escritorio y web utilizando C# y F#, principalmente bajo .NET Framework.',
      'Identificación de errores, solución y mejoramiento de funcionalidades en las aplicaciones de la compañía.',
      'Revisión de código al equipo para identificar errores, problemas de calidad, vulnerabilidades de seguridad y oportunidades de mejora.',
      'Elaboración de documentación técnica y funcional: guías de implementación y especificaciones técnicas.',
      'Análisis y delegación de requerimientos.',
    ],
  },
  {
    periodo: 'Junio 2022 – Agosto 2023',
    empresa: 'Finac Finanzas y Actuaría S.A.S.',
    cargo: 'Profesional I de Desarrollo – Productos de software',
    ubicacion: 'Bogotá, Colombia',
    items: [
      'Desarrollo y mantenimiento de aplicaciones de escritorio y web utilizando C# y F#, principalmente bajo .NET Framework.',
      'Identificación de errores, solución y mejoramiento de funcionalidades en las aplicaciones de la compañía.',
      'Revisión de código al equipo para identificar errores, problemas de calidad, vulnerabilidades de seguridad y oportunidades de mejora.',
      'Elaboración de documentación técnica y funcional: guías de implementación y especificaciones técnicas.',
      'Análisis y delegación de requerimientos.',
    ],
  },
];

const educacion = [
  {
    periodo: '2020 – En curso',
    institucion: 'Universidad Distrital Francisco José de Caldas',
    titulo: 'Matemático',
    ubicacion: 'Bogotá, Colombia',
  },
];

export default function SobreMiPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarPlaceholder}>
              <span className={styles.avatarInitials}>OH</span>
            </div>
          </div>
          <div className={styles.heroText}>
            <p className={styles.heroRole}>Desarrollador de Software</p>
            <h1 className={styles.heroName}>Omar Hernandez</h1>
            <p className={styles.heroDesc}>
              Desarrollador de Software con experiencia en el sector financiero, especializado en
              tecnologías .NET. Persona comprometida y responsable, con habilidades creativas y
              organizativas. Fuerte capacidad para aprender y adaptarme rápidamente a nuevos
              desafíos. Orientado a resultados y capaz de coordinar y desarrollar proyectos de
              naturaleza académica, investigativa y productiva.
            </p>
            <div className={styles.contactList}>
              <a href="mailto:devomarhernandez@gmail.com" className={styles.contactItem}>
                <IconMail size={15} /> devomarhernandez@gmail.com
              </a>
              <span className={styles.contactItem}>
                <IconLocation size={15} /> Bogotá, Colombia
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.grid}>
        <div className={styles.left}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiencia</h2>
            <div className={styles.timeline}>
              {experiencias.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{exp.periodo} · {exp.ubicacion}</span>
                    <h3 className={styles.empresa}>{exp.empresa}</h3>
                    <p className={styles.cargo}>{exp.cargo}</p>
                    <ul className={styles.timelineList}>
                      {exp.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Educación</h2>
            <div className={styles.timeline}>
              {educacion.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{edu.periodo} · {edu.ubicacion}</span>
                    <h3 className={styles.empresa}>{edu.titulo}</h3>
                    <p className={styles.cargo}>{edu.institucion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.aside}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
            <div className={styles.skillGroups}>
              <div className={styles.skillGroup}>
                <p className={styles.skillGroupLabel}>Lenguajes</p>
                <div className={styles.tags}>
                  {habilidades.lenguajes.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.skillGroup}>
                <p className={styles.skillGroupLabel}>Frameworks</p>
                <div className={styles.tags}>
                  {habilidades.frameworks.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.skillGroup}>
                <p className={styles.skillGroupLabel}>ORM</p>
                <div className={styles.tags}>
                  {habilidades.orm.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Aptitudes</h2>
            <div className={styles.tags}>
              {aptitudes.map(a => <span key={a} className={`${styles.tag} ${styles.tagSoft}`}>{a}</span>)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
