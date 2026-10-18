import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

const programmingSkills = ['Java', 'C', 'JavaScript', 'SQL', 'HTML']
const tools = ['Linux', 'GitHub', 'VS Code']

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Farhat Masodi, home">
        <span className="brand-mark" aria-hidden="true">FM</span>
        <span>Farhat Masodi</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
      </nav>
      <a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true" /> Open to cybersecurity &amp; software internships</p>
        <p className="hero-kicker">Computer Science · Northern Virginia</p>
        <h1 id="hero-title">Farhat <span>Masodi</span></h1>
        <p className="hero-summary">
          Building a strong foundation in computer science, with a hands-on interest in cybersecurity and software development.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight aria-hidden="true" /></a>
          <a className="button button-quiet" href="#contact">Get in touch</a>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown aria-hidden="true" /> Scroll to explore</a>
      </div>
      <aside className="hero-card" aria-label="Professional focus">
        <div className="hero-card-topline"><span>PROFILE</span><span className="profile-dot" aria-hidden="true" /></div>
        <div className="monogram-wrap"><span className="monogram">FM</span><span className="monogram-caption">COMPUTER SCIENCE</span></div>
        <div className="focus-block">
          <p className="focus-label">Current focus</p>
          <div className="focus-item"><ShieldCheck aria-hidden="true" /><span>Cybersecurity</span></div>
          <div className="focus-item"><Code2 aria-hidden="true" /><span>Software development</span></div>
        </div>
        <div className="hero-card-footer"><MapPin aria-hidden="true" /><span>Northern Virginia</span></div>
      </aside>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="A little about me" title="About Me" />
      <div className="about-copy">
        <h3>Curious by nature.<br /><span>Practical by approach.</span></h3>
        <div className="about-text">
          <p>I&apos;m a Computer Science student interested in the systems and software that make technology work—and how to make them more secure.</p>
          <p>My IT support internship gave me experience working directly with Windows, Apple devices, imaging workflows, and clear technical documentation. I&apos;m now looking for an internship where I can keep learning and contribute to a thoughtful team.</p>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" eyebrow="What I work with" title="Skills" description="Core technologies and tools in my current toolkit." />
      <div className="skills-grid">
        <article className="skill-panel">
          <div className="panel-icon"><Code2 aria-hidden="true" /></div>
          <div><p className="panel-label">Programming</p><h3>Languages</h3></div>
          <ul className="skill-list" aria-label="Programming languages">
            {programmingSkills.map((skill, index) => <li key={skill} className={index === 0 ? 'skill-chip skill-chip-featured' : 'skill-chip'}>{skill}</li>)}
          </ul>
        </article>
        <article className="skill-panel">
          <div className="panel-icon panel-icon-teal"><Terminal aria-hidden="true" /></div>
          <div><p className="panel-label">Everyday workflow</p><h3>Tools</h3></div>
          <ul className="skill-list" aria-label="Tools">
            {tools.map((tool) => <li key={tool} className="skill-chip">{tool}</li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" eyebrow="Selected work" title="Projects" description="A space for projects as they take shape." />
      <div className="projects-grid">
        {[
          {
            number: '01',
            title: 'Slot Machine Simulation',
            description: 'A slot machine simulation I developed in C and ran on GMU’s Zeus Linux system.',
            technologies: ['C', 'Linux', 'Zeus'],
          },
          {
            number: '02',
            title: 'Project title',
            description: 'Add a short project description here.',
            technologies: [],
          },
        ].map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image-placeholder" aria-label={`Project ${project.number} screenshot placeholder`}>
              <div className="placeholder-window"><span /><span /><span /></div>
              <div className="placeholder-art"><Code2 aria-hidden="true" /><span>Screenshot can be added here</span></div>
            </div>
            <div className="project-details">
              <p className="project-number">PROJECT {project.number}</p>
              <h3>{project.title}</h3>
              <p className={project.number === '01' ? 'project-description' : 'placeholder-copy'}>{project.description}</p>
              {project.technologies.length > 0 ? (
                <ul className="project-technologies" aria-label="Technologies used">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              ) : (
                <p className="placeholder-link">GitHub link can be added here</p>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="edit-note">These are editable placeholders—replace them with your project details, screenshots, and repository links.</p>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="content-section education-section" id="education" aria-labelledby="education-title">
      <SectionHeading id="education-title" eyebrow="Learning &amp; growth" title="Education" />
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-marker"><GraduationCap aria-hidden="true" /></div>
          <div className="timeline-content">
            <div className="timeline-top"><div><h3>George Mason University</h3><p className="timeline-subtitle">Transferred in Fall 2026</p></div><span className="timeline-date">Fall 2026</span></div>
            <p className="timeline-description">Continuing my academic journey at George Mason University.</p>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-marker"><GraduationCap aria-hidden="true" /></div>
          <div className="timeline-content">
            <div className="timeline-top"><div><h3>Northern Virginia Community College</h3><p className="timeline-subtitle">Associate of Science in Computer Science</p></div><span className="timeline-date">May 2026</span></div>
            <p className="timeline-description">Completed an A.S. in Computer Science.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" eyebrow="Learning on the job" title="Experience" />
      <article className="experience-card">
        <div className="experience-icon"><BriefcaseBusiness aria-hidden="true" /></div>
        <div className="experience-main">
          <div className="timeline-top"><div><p className="experience-type">IT SUPPORT INTERNSHIP</p><h3>PWCS · Beville Middle School</h3></div><span className="timeline-date">2025</span></div>
          <p className="experience-intro">Supported school technology operations across a range of devices and IT workflows.</p>
          <ul className="experience-list">
            <li>Imaged Windows 11 devices and worked with SCCM.</li>
            <li>Maintained device inventory and supported iPads and Macs.</li>
            <li>Created and maintained technical documentation.</li>
          </ul>
        </div>
      </article>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Let&apos;s build what&apos;s next.</h2>
          <p>I&apos;m looking forward to connecting with teams working in cybersecurity and software development.</p>
        </div>
        <div className="contact-details" aria-label="Contact details to be added">
          <div className="contact-row"><span className="contact-icon"><Mail aria-hidden="true" /></span><span><span className="contact-label">Email</span><span className="contact-placeholder">Add professional email</span></span></div>
          <div className="contact-row"><span className="contact-icon linkedin-mark" aria-hidden="true">in</span><span><span className="contact-label">LinkedIn</span><span className="contact-placeholder">Add LinkedIn profile</span></span></div>
          <div className="contact-row"><span className="contact-icon github-mark" aria-hidden="true">GH</span><span><span className="contact-label">GitHub</span><span className="contact-placeholder">Add GitHub profile</span></span></div>
        </div>
      </div>
    </section>
  )
}

export function Portfolio() {
  return (
    <div className="portfolio-shell">
      <div className="page-wrap">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <footer className="site-footer"><a className="footer-brand" href="#home">FM</a><p>© {new Date().getFullYear()} Farhat Masodi</p><a href="#home" className="back-to-top">Back to top <ArrowUpRight aria-hidden="true" /></a></footer>
      </div>
    </div>
  )
}
