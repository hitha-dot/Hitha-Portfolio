
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
  Code2,
  BrainCircuit,
  Database,
  Globe2,
  Sparkles,
  Download
} from 'lucide-react';

// PROJECT DETAILS
const projects = [
  {
    number: '01',
    type: 'COMPUTER VISION / MACHINE LEARNING',
    title: 'Fish Disease Detection',
    description:
      'An image-based system that identifies and classifies fish diseases using VGG16 feature extraction and an SVM classifier.',
    stack: ['Python', 'VGG16', 'SVM', 'OpenCV', 'TensorFlow'],
    accent: 'mint',
    visual: 'fish',
    outcome:
      'Early disease identification to support aquaculture monitoring.',
    github:
      'https://github.com/hitha-dot/DEEP-LEARNING-BASED-DETECTION-AND-CLASSIFICATION-OF-FISH-DISEASES-THROUGH-IMAGE-ANALYSIS',
    download: '/downloads/fish-disease-detection.zip'
  },
  {
    number: '02',
    type: 'FRONTEND / API INTEGRATION',
    title: 'Weather Forecast',
    description:
      'A responsive weather application that retrieves live conditions and a five-day forecast for a searched city.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'OpenWeatherMap API'
    ],
    accent: 'violet',
    visual: 'weather',
    outcome:
      'Dynamic weather data with temperature, humidity and wind details.',
    github: 'https://github.com/hitha-dot/Weather-Forecast',
    download: '/downloads/weather-forecast.zip'
  }
];

// SKILLS
const skills = [
  {
    icon: Code2,
    name: 'Programming',
    items: 'Python · JavaScript'
  },
  {
    icon: Globe2,
    name: 'Web development',
    items: 'HTML · CSS · Responsive UI'
  },
  {
    icon: BrainCircuit,
    name: 'AI & machine learning',
    items: 'Scikit-learn · TensorFlow · Keras · OpenCV'
  },
  {
    icon: Database,
    name: 'Database & tools',
    items: 'MySQL · GitHub · VS Code'
  }
];

// ANIMATION COMPONENT
function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grain" aria-hidden="true" />

      {/* NAVIGATION */}
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          H<span>.</span>BM
        </a>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Work', 'Skills', 'Journey', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <a
          className="availability"
          href="mailto:hithabm21@gmail.com"
        >
          <span /> Open to opportunities
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              PORTFOLIO / 2026
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Curious mind.
              <br />
              <em>Thoughtful</em>
              <br />
              builder<span className="accent-dot">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-intro">
              I'm <strong>Hitha B M</strong> — an aspiring software
              developer exploring the space where thoughtful
              interfaces meet intelligent technology.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-outline"
                href="/documents/Hitha-Resume.pdf"
                download="Hitha-BM-Resume.pdf"
              >
                Download Resume <Download size={17} />
              </a>
            </div>

            <a className="text-link" href="#contact">
              Let's connect <ArrowDownRight size={16} />
            </a>
          </Reveal>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span>SOFTWARE · AI/ML</span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>

        <Reveal delay={0.2} className="portrait-wrap">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />

          <div className="portrait-frame">
            <img
              src="/images/profile.jpeg"
              alt="Portrait of Hitha B M"
            />

            <div className="portrait-label">
              <span>HITHA B M</span>
              <span>DEVELOPER IN PROGRESS ↗</span>
            </div>
          </div>

          <div className="floating-note">
            <Sparkles size={15} />
            <span>
              Learning by
              <br />
              building
            </span>
          </div>

          <div className="portrait-index">01 / 05</div>
        </Reveal>

        <a className="scroll-cue" href="#about">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="about section-wrap section-pad"
        id="about"
      >
        <Reveal>
          <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <h2>
              Building with
              <br />
              <em>curiosity</em> and
              <br />
              purpose.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-text">
              <p className="large-copy">
                I enjoy turning ideas into useful digital experiences —
                from responsive web interfaces to machine-learning
                prototypes.
              </p>

              <p>
                I'm a Computer Science graduate from Adichunchanagiri
                Institute of Technology. Through my data science
                internship and hands-on projects, I've explored Python,
                web development, computer vision and machine learning.
              </p>

              <p>
                I'm eager to keep learning, collaborate with thoughtful
                teams and contribute to software that solves real
                problems.
              </p>

              <a
                className="inline-link"
                href="mailto:hithabm21@gmail.com"
              >
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="stat-strip">
          <div>
            <strong>8.9</strong>
            <span>BE CGPA</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>GRADUATION</span>
          </div>

          <div>
            <strong>
              2<span className="stat-plus">+</span>
            </strong>
            <span>FEATURED PROJECTS</span>
          </div>

          <div>
            <strong>
              AI<span className="stat-plus">+</span>WEB
            </strong>
            <span>AREAS OF INTEREST</span>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="work section-wrap section-pad"
        id="work"
      >
        <div className="section-heading">
          <Reveal>
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>

              <h2>
                Projects with
                <br />
                <em>a purpose.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="heading-aside">
              A selection of projects where I explored practical
              problem-solving through code, data and design.
            </p>
          </Reveal>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <Reveal
              key={project.number}
              delay={i * 0.1}
            >
              <article
                className={`project-card ${project.accent}`}
              >
                <div className="project-top">
                  <span>
                    {project.number} / {project.type}
                  </span>
                  <span>FEATURED PROJECT</span>
                </div>

                <div className="project-content">
                  <div className="project-info">
                    <h3>
                      {project.title}
                      <ArrowUpRight size={24} />
                    </h3>

                    <p>{project.description}</p>

                    <div className="tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <p className="project-outcome">
                      <b>FOCUS</b> {project.outcome}
                    </p>

                    {/* PROJECT ACTION BUTTONS */}
                    <div
                      className="project-buttons"
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginTop: '28px',
                        position: 'relative',
                        zIndex: 10
                      }}
                    >
                      <a
                        href={project.github}
                        className="project-button github-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '9px',
                          padding: '13px 18px',
                          borderRadius: '8px',
                          background: '#a855f7',
                          color: '#ffffff',
                          border: '1px solid #a855f7',
                          fontSize: '14px',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        <Github size={17} />
                        View on GitHub
                        <ArrowUpRight size={15} />
                      </a>

                      <a
                        href={project.download}
                        className="project-button download-button"
                        download
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '9px',
                          padding: '13px 18px',
                          borderRadius: '8px',
                          background: 'transparent',
                          color: '#ffffff',
                          border: '1px solid #b39aff',
                          fontSize: '14px',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        <Download size={17} />
                        Download Project
                      </a>
                    </div>
                  </div>

                  {/* PROJECT VISUAL */}
                  <div
                    className={`project-art ${project.visual}`}
                  >
                    {project.visual === 'fish' ? (
                      <>
                        <div className="art-ring" />
                        <div className="fish-shape">◉</div>

                        <span className="art-caption">
                          IMAGE ANALYSIS / 01
                        </span>

                        <span className="art-coordinate">
                          12° 58' N
                          <br />
                          77° 35' E
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="weather-sun" />

                        <div className="weather-temp">24°</div>

                        <div className="weather-lines">
                          <i />
                          <i />
                          <i />
                        </div>

                        <span className="art-caption">
                          LIVE CONDITIONS / 02
                        </span>

                        <span className="weather-city">
                          CITY FORECAST
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="project-note">
          Explore the source code on GitHub or download the complete
          project files using the buttons above.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section
        className="skills section-wrap section-pad"
        id="skills"
      >
        <div className="section-heading">
          <Reveal>
            <div>
              <p className="eyebrow">03 / MY TOOLKIT</p>

              <h2>
                Tools I work
                <br />
                <em>with.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="heading-aside">
              A growing toolkit across software development,
              data and machine learning.
            </p>
          </Reveal>
        </div>

        <div className="skill-grid">
          {skills.map(({ icon: Icon, name, items }, i) => (
            <Reveal key={name} delay={i * 0.07}>
              <div className="skill-card">
                <span className="skill-icon">
                  <Icon size={21} />
                </span>

                <h3>{name}</h3>
                <p>{items}</p>

                <span className="skill-number">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section
        className="journey section-wrap section-pad"
        id="journey"
      >
        <Reveal>
          <p className="eyebrow">04 / THE JOURNEY SO FAR</p>

          <h2>
            Learning by
            <br />
            <em>doing.</em>
          </h2>
        </Reveal>

        <div className="timeline">
          <Reveal>
            <div className="timeline-item">
              <span className="timeline-date">
                JAN — MAY 2026
              </span>

              <div>
                <h3>Data Science Intern</h3>

                <p className="timeline-place">
                  Palle Technologies · Bengaluru
                </p>

                <p>
                  Worked with Python, MySQL and machine-learning
                  concepts while collaborating with peers and mentors
                  on coding practices, debugging and problem-solving.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="timeline-item">
              <span className="timeline-date">
                DEC 2022 — MAY 2026
              </span>

              <div>
                <h3>B.E. Computer Science</h3>

                <p className="timeline-place">
                  Adichunchanagiri Institute of Technology
                </p>

                <p>
                  Graduated with a CGPA of 8.9, building a foundation
                  in computing and developing practical skills
                  through projects.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="recognition">
          <p className="eyebrow">
            RECOGNITION & LEARNING
          </p>

          <div className="recognition-items">
            <span>
              IEEE 4 ICONAT — Paper Presentation Certificate (2025)
            </span>
            <span>NPTEL — Machine Learning</span>
            <span>24-Hour Hackathon Participant</span>
            <span>CSS Battle Participant</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="contact section-wrap section-pad"
        id="contact"
      >
        <Reveal>
          <p className="eyebrow">
            05 / HAVE SOMETHING IN MIND?
          </p>

          <h2>
            Let's make
            <br />
            <em>something</em>
            <br />
            meaningful<span className="accent-dot">.</span>
          </h2>
        </Reveal>

        <div className="contact-bottom">
          <Reveal>
            <a
              className="contact-email"
              href="mailto:hithabm21@gmail.com"
            >
              hithabm21@gmail.com
              <ArrowUpRight size={19} />
            </a>

            <p>
              Open to opportunities, collaborations and conversations.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="social-links">
              <a
                href="https://github.com/hitha-dot"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://linkedin.com/in/hitha-b-m-61535b282/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.hackerrank.com/hithabm21"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                HackerRank
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">
          H<span>.</span>BM
        </a>

        <span>DESIGNED & BUILT WITH CURIOSITY</span>
        <span>© 2026 HITHA B M</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;

