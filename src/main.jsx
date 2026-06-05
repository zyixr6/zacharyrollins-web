import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Download, Code2, Trophy, Users, Wrench, GraduationCap } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'ThrowLogic',
    eyebrow: 'Founder & Developer',
    url: 'https://throwlogic.zacharyrollins.net',
    description:
      'I built ThrowLogic, a coaching platform that analyzes discus throw technique with computer vision, pose tracking, machine learning, and structured AI feedback.',
    stack: ['React', 'FastAPI', 'Python', 'OpenCV', 'MediaPipe', 'ML'],
    points: ['Video upload and phase review workflow', 'Pose feature extraction pipeline', 'Feedback designed around what athletes and coaches can actually use'],
  },
  {
    title: 'CloudStruct Websites',
    eyebrow: 'Builder & Partner',
    url: 'https://cloudstructwebsites.com',
    description:
      'We created CloudStruct Websites to build professional websites, custom features, and easy-to-use software for small businesses around Maine.',
    stack: ['HTML', 'CSS', 'PHP', 'Bootstrap', 'Ubuntu'],
    points: ['Custom websites designed and hosted for all types of clients', 'Frontend, backend, hosting, and deployment work', 'Business wants and needs translated into production-level software'],
    clientLinks: [
      { label: 'Boothbay Baptist Church', url: 'https://boothbaybaptist.com' },
      { label: 'Safe Harbor Church', url: 'https://safeharborme.com' },
      { label: 'Post 36 Maine American Legion', url: 'https://post36maine.org' },
    ],
  },
  {
    title: 'Ames Rollins Technologies LLC',
    eyebrow: 'Co-Founder & Developer',
    url: 'https://amesrollinstechnologies.com',
    description:
      'I co-founded Ames Rollins Technologies LLC with the values of making easy-to-use, affordable software that improves the lives of everyday people around the world. Through this company, we develop apps, websites, and games for anyone to use and play with.',
    stack: ['Mobile Apps', 'Web Development', 'Gaming Platforms'],
    points: ['Easy-to-use software built for everyday people', 'Affordable apps, websites, and games designed for broad access', 'Products focused on usefulness, play, and improving daily life'],
  },
];

const research = {
  title: 'Redistricting Analysis Research Project',
  role: 'Student Researcher with Professor Matthew Dube',
  description:
    'I applied graph theory and data science to study electoral redistricting, demographic change, and district structure using real-world geographic and demographic datasets.',
  details: [
    'Modeled geographic units as graphs to evaluate district structure and fairness metrics',
    'Built Python data processing and analysis workflows for spatial datasets',
    'Used graph-based techniques to support statistical evaluation of district maps',
  ],
};

const strengths = [
  { icon: Code2, title: 'Software-first problem solving', text: 'Turning rough ideas into dependable tools, then refining the details until the product is useful.' },
  { icon: Wrench, title: 'Hands-on technical background', text: 'Years of IT repair and troubleshooting gave me skills and a strong instinct for debugging computer systems.' },
  { icon: Trophy, title: 'Athletic work ethic', text: 'Competing and coaching taught me about consistency, feedback loops, and the value of showing up even when progress is slow.' },
  { icon: Users, title: 'Leadership under pressure', text: 'Student government, coaching e-sports, and athletics shaped how I communicate, organize, and follow through.' },
];

const timeline = [
  { year: '2026', title: 'Georgia Tech OMSCS', detail: 'Starting the OMSCS program in Fall 2026.' },
  { year: '2026', title: 'B.S. Computer Information Systems', detail: 'Graduated Summa Cum Laude from the University of Maine at Augusta.' },
  { year: '2025+', title: 'Technical Services Intern', detail: 'Resolving software, systems, and support issues while building stronger debugging habits.' },
  { year: '2018+', title: 'Side hustles and local tech work', detail: 'Started young with device repair, troubleshooting, websites, and practical technical help.' },
];

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.15c-3.2.69-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A10.94 10.94 0 0 1 12 6.08c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.01 2.5 2.5 0 0 1 0-5.01ZM3 9.5h3.96V21H3V9.5Zm6.25 0h3.79v1.57h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-5.24c0-1.25-.02-2.86-1.74-2.86-1.75 0-2.01 1.36-2.01 2.77V21H9.25V9.5Z" />
    </svg>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return false;
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Zachary Rollins home">
          <img src="/favicon.png" alt="" />
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#story">Story</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            className="theme-toggle"
            type="button"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          >
            <span className="toggle-track">
              <span className="toggle-stars" aria-hidden="true" />
              <span className="toggle-thumb" aria-hidden="true" />
            </span>
          </button>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy reveal">
          <p className="kicker">Software engineering portfolio</p>
          <h1>Hard-working, optimistic software engineer and developer.</h1>
          <p className="hero-text">
            I'm Zachary Rollins, a software developer who brings a builder's mindset to full-stack applications, technical support, data-driven systems, and AI-assisted tools. I care about hard work, learning quickly, and building software that helps people and society move forward.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See my work <ArrowUpRight size={18} /></a>
            <a className="button secondary" href="/Zachary_Rollins_Resume.pdf" download>Download resume <Download size={18} /></a>
          </div>
          <div className="quick-stats" aria-label="Highlights">
            <span><strong>Summa Cum Laude</strong></span>
            <span><strong>2026</strong> UMA graduate</span>
            <span><strong>Fall 2026</strong> Georgia Tech OMSCS</span>
          </div>
        </div>
        <div className="hero-media reveal delay-1">
          <div className="portrait-card">
            <img src="/assets/zachary-rollins-headshot.jpg" alt="Professional headshot of Zachary Rollins" />
          </div>
          <div className="floating-note">Full-stack builder. Coach. Problem solver.</div>
        </div>
      </section>

      <section className="section band" aria-label="Technical skills">
        <div className="skill-row">
          {['Python', 'Java', 'C++', 'C#', 'SQL', 'Linux', 'Git', 'React', 'FastAPI', 'Docker', 'OpenCV'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section split" id="work">
        <div className="section-heading reveal">
          <p className="kicker">Selected work</p>
          <h2>Projects that connect software, service, and real users.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" style={{ '--delay': `${index * 90}ms` }} key={project.title}>
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ul>
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {project.clientLinks && (
                <div className="client-links" aria-label={`${project.title} client websites`}>
                  <p>Client work</p>
                  <div>
                    {project.clientLinks.map((client) => (
                      <a href={client.url} target="_blank" rel="noreferrer" key={client.url}>
                        {client.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                Visit site <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section story" id="story">
        <div className="story-images reveal">
          <img className="wide-img" src="/assets/zachary-rollins-award.jpg" alt="Zachary Rollins receiving an athletics award" />
          <img className="small-img" src="/assets/zachary-rollins-hands-on.jpg" alt="Zachary Rollins working on a generator control panel" />
          <img className="repair-img" src="/assets/zachary-rollins-phone-repair.jpg" alt="A repaired Samsung phone beside its broken screen and replacement display" />
        </div>
        <div className="story-copy reveal delay-1">
          <p className="kicker">Life leading up to software</p>
          <h2>Work hard, stay grounded, keep improving.</h2>
          <p>
            My path into software has always been practical. I started taking on side work early, fixing devices, troubleshooting systems, and learning how to solve problems for people who need their tech to work.
          </p>
          <p>
            Athletics and leadership shaped my mindset: show up consistently, listen to feedback, communicate clearly, and keep moving. That is the attitude I bring to any team or project I work on.
          </p>
          <div className="strength-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div className="strength" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section research-section">
        <div className="research-card reveal">
          <p className="kicker">Student research</p>
          <div className="research-layout">
            <div>
              <h2>{research.title}</h2>
              <p className="research-role">{research.role}</p>
            </div>
            <div>
              <p>{research.description}</p>
              <ul>
                {research.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading reveal">
          <p className="kicker">Education & experience</p>
          <h2>A foundation built through school, internships, leadership, and many side hustles.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item reveal" key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card reveal">
          <GraduationCap size={28} />
          <h2>Looking for software engineering opportunities.</h2>
          <p>
            I'm interested in roles where I can contribute to full-stack products, backend systems, applied AI tools, and data-driven applications.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:zachrollins2@gmail.com"><Mail size={18} /> Email me</a>
            <a className="button secondary" href="https://github.com/zyixr6" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a className="button secondary" href="https://www.linkedin.com/in/zachary-william-rollins/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
