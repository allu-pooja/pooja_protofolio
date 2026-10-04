import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Pooja Sathvika",
  fullName: "Allu Pooja Sathvika",
  email: "allupooja09@gmail.com",
  phone: "+91 86884 49211",
  linkedin: "https://www.linkedin.com/in/allu-pooja",
  github: "https://github.com/allu-pooja",
};

const skills = [
  ["Java", "Programming"],
  ["Python", "Programming"],
  ["SQL", "Database"],
  ["HTML / CSS / JavaScript", "Web"],
  ["Spring Boot & REST APIs", "Web"],
  ["MongoDB", "Database"],
  ["Docker", "DevOps"],
  ["Ansible", "Automation"],
  ["Linux", "Infrastructure"],
  ["Dynatrace", "Observability"],
  ["Git & GitHub", "Tools"],
  ["Microsoft Azure", "Cloud"],
];

const projects = [
  {
    title: "Quick Prep",
    stack: "Python · Streamlit · MongoDB",
    description:
      "An NLP-based document summarization tool with MongoDB-backed storage, PDF downloads, WordNet word lookup, notes, download history, secure authentication and personalized storage.",
    tag: "NLP / Full Stack",
    github: "https://github.com/allu-pooja",
  },
  {
    title: "Job Finder",
    stack: "Java · Spring Boot · REST API · HTML · Bootstrap · JavaScript",
    description:
      "A job search web application using REST API integration for real-time listings, dynamic JSON parsing and a Load More experience, with profile management for resumes, certifications and portfolio links.",
    tag: "Web Development",
    github: "https://github.com/allu-pooja",
  },
];

const certifications = [
  ["MongoDB Associate Database Administrator", "MongoDB University"],
  ["Microsoft DP-900: Azure Data Fundamentals", "Microsoft"],
  ["CS50’s Introduction to Cybersecurity", "Harvard University · edX"],
];

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.3 4c.1-.4.5-1.8-.2-3.7 0 0-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7.1 0C5.4-.1 4.2.3 4.2.3c-.7 1.9-.3 3.3-.2 3.7A5.4 5.4 0 0 0 2.7 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 8.4 18v4"/><path d="M8 22c-4 1-4-2-5-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    external: <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
          <span className="brand-mark">P</span>
          <span>pooja<span className="accent">.</span></span>
        </button>

        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["about","experience","skills","projects","education","contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Building things for the <span className="gradient">web & beyond.</span></h1>
            <p className="hero-text">
              Hi, I’m <strong>Pooja Sathvika</strong> — a Computer Science Engineer who enjoys
              building web applications and exploring cloud, DevOps and infrastructure automation.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("projects")}>View my work <Icon name="arrow" /></button>
              <button className="secondary" onClick={() => scrollTo("contact")}>Let’s connect</button>
            </div>
            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-top"><span/><span/><span/></div>
            <div className="terminal">
              <p><span className="muted">const</span> developer = {"{"}</p>
              <p>&nbsp;&nbsp;name: <span className="string">"Pooja Sathvika"</span>,</p>
              <p>&nbsp;&nbsp;focus: [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Web Development"</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Cloud & DevOps"</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Automation"</span></p>
              <p>&nbsp;&nbsp;],</p>
              <p>&nbsp;&nbsp;experience: <span className="number">"BNP Paribas"</span></p>
              <p>{"};"}</p>
              <p className="cursor">▌</p>
            </div>
          </div>
        </section>

        <section id="about" className="section narrow">
          <div className="section-label">01 — ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Curious by nature,<br/><span className="accent">hands-on by choice.</span></h2>
            </div>
            <div className="body-copy">
              <p>
                I’m a Computer Science student at Vellore Institute of Technology, Amaravati,
                with a strong interest in web development and practical engineering.
              </p>
              <p>
                My internship with the <strong>BNP Paribas infrastructure team</strong> gave me
                exposure to enterprise production environments, Linux server operations,
                automation, monitoring and documentation.
              </p>
              <p>
                I like understanding how systems work behind the interface — from a web application
                and API to the servers, automation and monitoring supporting it.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section tinted">
          <div className="section-label">02 — EXPERIENCE</div>
          <div className="experience-card">
            <div className="experience-head">
              <div>
                <p className="mini-label">JAN 2026 — JUL 2026 · INTERNSHIP · INFRASTRUCTURE / TRANSVERSAL TEAM</p>
                <h2>BNP Paribas</h2>
              </div>
              <span className="pill">Production Infrastructure</span>
            </div>
            <p className="experience-intro">
              Hands-on exposure to enterprise IT infrastructure operations, production server monitoring
              and automation workflows.
            </p>
            <div className="experience-grid">
              <div>
                <h3>Production & Monitoring</h3>
                <p>Performed Daily Health Checks on production servers and worked with Dynatrace dashboards, alerts, host health, logs and service availability.</p>
              </div>
              <div>
                <h3>Automation</h3>
                <p>Worked with Ansible inventories, ad-hoc commands and existing playbooks for operational tasks such as patching, service restarts and configuration validation.</p>
              </div>
              <div>
                <h3>Linux & SQL</h3>
                <p>Used Linux command-line operations, service management and log analysis, along with SQL queries and database health-check activities.</p>
              </div>
              <div>
                <h3>Python & Documentation</h3>
                <p>Worked with Python utility scripts for log parsing, server health reports and Dynatrace API data, and created operational documentation in Confluence.</p>
              </div>
            </div>
            <div className="tech-tags">
              {["Linux","Ansible","Python","SQL","Dynatrace","Confluence","SSH","MySQL","PostgreSQL"].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>

        <section id="skills" className="section narrow">
          <div className="section-label">03 — SKILLS</div>
          <h2>Tools I work with.</h2>
          <div className="skill-grid">
            {skills.map(([name, category]) => (
              <div className="skill" key={name}>
                <span className="skill-icon">{name.split(" ")[0][0]}</span>
                <div><strong>{name}</strong><small>{category}</small></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section tinted">
          <div className="section-label">04 — PROJECTS</div>
          <div className="projects-heading">
            <h2>Selected work.</h2>
            <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub <Icon name="arrow" /></a>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-content">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="stack">{p.stack.split(" · ").map(x => <span key={x}>{x}</span>)}</div>
                  <a className="project-link" href={p.github} target="_blank" rel="noreferrer">View on GitHub <Icon name="arrow" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section narrow">
          <div className="section-label">05 — EDUCATION & CREDENTIALS</div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2022 — 2026</span>
              <div><h3>Vellore Institute of Technology, Amaravati</h3><p>B.Tech in Computer Science · CGPA 9.41 / 10</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">2020 — 2022</span>
              <div><h3>Sarada College, Vijayawada</h3><p>Intermediate (MPC) · 98.5%</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">2019 — 2020</span>
              <div><h3>Sri Chaitanya Techno School, Vijayawada</h3><p>SSC · 95.5%</p></div>
            </div>
          </div>

          <div className="credentials">
            <h3>Certifications</h3>
            <div className="credential-grid">
              {certifications.map(([name, issuer]) => <div className="credential" key={name}><strong>{name}</strong><span>{issuer}</span></div>)}
            </div>
          </div>

          <div className="achievement">
            <div className="achievement-number">500+</div>
            <div><strong>Coding problems solved</strong><p>Across platforms including LeetCode, GeeksforGeeks and HackerRank.</p></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <p className="eyebrow">06 — CONTACT</p>
            <h2>Let’s build something<br/><span className="gradient">useful together.</span></h2>
            <p>I’m open to opportunities where I can learn, contribute and grow as a software engineer.</p>
            <a className="primary big" href={`mailto:${profile.email}`}>Say hello <Icon name="arrow" /></a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a>
              <a href={`mailto:${profile.email}`}><Icon name="mail"/> {profile.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>Designed & built with React.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
