import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  ArrowUp,
  Check,
  Code2,
  Copy,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Menu,
  Network,
  Sparkles,
  X,
} from "lucide-react";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  type Project,
  type ProjectCategory,
} from "./content";
import { HeroVisual, ProjectVisual } from "./Visuals";

const resumePath = `${import.meta.env.BASE_URL}Siddharth-Rajawat-Resume.pdf`;
const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];
const filters: Array<"All projects" | ProjectCategory> = [
  "All projects",
  "Data & Analytics",
  "Machine Learning",
];

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M7.3 32.7L32.7 7.3"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !menuButton.current?.contains(event.target as Node)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Siddharth Rajawat, back to top"
        >
          <Asterisk />
          <span>
            siddharth<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle icon-button"
          ref={menuButton}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        inert={!menuOpen}
      >
        <nav className="container" aria-label="Mobile navigation">
          {[...navigation, { label: "Let’s talk", href: "#contact" }].map(
            (item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={20} />
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;
    const activeElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      activeElement?.focus({ preventScroll: true });
    };
  }, [project]);
  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === event.currentTarget)
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          (document.activeElement === last ||
            document.activeElement === event.currentTarget)
        ) {
          event.preventDefault();
          first.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-content">
          <div className={`dialog-art ${project.id}`}>
            <ProjectVisual kind={project.id} />
            <button
              autoFocus
              className="dialog-close icon-button"
              aria-label="Close project details"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          <div className="dialog-body">
            <span className="eyebrow">
              PROJECT {project.index} / {project.category}
            </span>
            <h2 id="project-title">{project.title}</h2>
            <p className="dialog-intro">{project.description}</p>
            <div className="tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="case-study-section">
              <h3>The question</h3>
              <p>{project.problem}</p>
            </div>
            <div className="case-study-section">
              <h3>The approach</h3>
              <ul>
                {project.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="project-outcome">
              <Sparkles size={20} />
              <div>
                <h3>The result</h3>
                <p>{project.outcome}</p>
              </div>
            </div>
            <a
              className="text-link"
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.shortTitle}`)}`}
            >
              Let’s talk about this project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}

function App() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
  const visibleProjects =
    filter === "All projects"
      ? projects
      : projects.filter((project) => project.category === filter);
  async function copyEmail() {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    copyTimer.current = setTimeout(() => setCopyState("idle"), 3500);
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-heading"
        >
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="status-dot" /> A MIND FOR DATA. A HEART FOR
              BUILDING.
            </span>
            <span className="hero-location">
              <MapPin size={13} /> Jaipur, India
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hello">
                Hey, I’m Siddharth{" "}
                <ArrowUpRight
                  className="hello-wave"
                  size={19}
                  aria-hidden="true"
                />
              </div>
              <h1 id="hero-heading">
                Good data.
                <br />
                <em>Better decisions.</em>
              </h1>
              <p className="hero-description">
                A product-minded engineer connecting the dots between{" "}
                <strong>AI, data, and real-world impact.</strong> I build things
                that make the complex feel simple.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowDown size={17} />
                </a>
                <a
                  className="resume-link"
                  href={resumePath}
                  download="Siddharth-Rajawat-Resume.pdf"
                >
                  Download résumé <ArrowDownToLine size={17} />
                </a>
              </div>
              <div className="hero-note">
                <span className="mini-line" /> Always learning. Always making.
              </div>
            </div>
            <div className="hero-art">
              <HeroVisual />
            </div>
          </div>
          <div className="toolkit-strip">
            <span className="eyebrow">TOOLS OF THE TRADE</span>
            <div className="toolkit-words">
              <span>
                <Code2 size={19} /> Python
              </span>
              <span>
                <Database size={18} /> SQL
              </span>
              <span>
                <Network size={19} /> TensorFlow
              </span>
              <span className="toolkit-fastapi">
                <span aria-hidden="true">ϟ</span> FastAPI
              </span>
              <span>
                <Github size={18} /> Git
              </span>
            </div>
            <Asterisk className="toolkit-star" />
          </div>
        </section>

        <section
          className="work-section section-padding"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2 id="work-heading">
                  Less theory.
                  <br />
                  <em>More making.</em>
                </h2>
              </div>
              <p>
                A few explorations in finding patterns,
                <br className="desktop-break" /> solving problems, and building
                useful things.
              </p>
            </div>
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects by specialty"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}
                  <span>{item === "All projects" ? "04" : "02"}</span>
                </button>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">
              Showing {visibleProjects.length} projects
              {filter !== "All projects" ? ` in ${filter}` : ""}.
            </p>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <button
                  className={`project-card ${project.id}`}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title} project details`}
                >
                  <div className="project-visual">
                    <ProjectVisual kind={project.id} />
                    <span className="project-open">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                  <div className="project-card-body">
                    <div className="project-category">
                      <span>{project.category}</span>
                      <span>{project.index}</span>
                    </div>
                    <h3>{project.shortTitle}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="work-footnote">
              <span>Built with intention. And plenty of debugging.</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Find me on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="about-section section-padding container"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="about-intro">
            <div className="about-heading">
              <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
              <h2 id="about-heading">
                Curiosity is
                <br />
                <em>my starting point.</em>
              </h2>
              <div className="about-mark" aria-hidden="true">
                <Asterisk />
                <span>LEARN. BUILD. REPEAT.</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I like asking <span>“what if?”</span>
                <br />
                Then opening my editor to find out.
              </p>
              <p>{profile.summary}</p>
              <p>
                I’m studying Artificial Intelligence & Data Science at
                Vivekananda Global University in Jaipur. My work lives where
                analytical thinking meets hands-on engineering — and where an
                interesting problem becomes something people can use.
              </p>
              <div className="education">
                <GraduationCap size={25} />
                <div>
                  <strong>{education.degree}</strong>
                  <span>{education.institution} · Class of 2027</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-heading">
            <span className="eyebrow">A TOOLKIT THAT KEEPS GROWING</span>
            <span>Different tools. One problem-solving mindset.</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-icon">
                  {index === 0 ? (
                    <Network size={23} />
                  ) : index === 1 ? (
                    <Code2 size={23} />
                  ) : (
                    <Sparkles size={23} />
                  )}
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="experience-section section-padding"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="container experience-grid">
            <div className="experience-intro">
              <span className="eyebrow">03 / LEARNING BY DOING</span>
              <h2 id="experience-heading">
                Real teams.
                <br />
                <em>Real experience.</em>
              </h2>
              <p>
                Putting ideas to work, learning from people, and getting a
                little better with every iteration.
              </p>
              <a
                className="text-link"
                href={resumePath}
                download="Siddharth-Rajawat-Resume.pdf"
              >
                The full story, on paper <ArrowDownToLine size={16} />
              </a>
            </div>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="experience-item" key={experience.company}>
                  <span className="timeline-dot" />
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <div className="company">
                    <span className={`company-icon company-icon-${index}`}>
                      {index === 0 ? "a" : "s"}
                      <span>.</span>
                    </span>
                    {experience.company}
                  </div>
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {experience.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="container contact-inner">
            <div className="contact-top">
              <span className="eyebrow">
                04 / SOMETHING GOOD STARTS WITH A HELLO
              </span>
              <Asterisk className="contact-star" />
            </div>
            <div className="contact-grid">
              <div>
                <h2 id="contact-heading">
                  Have an interesting
                  <br />
                  problem? <em>Let’s talk.</em>
                </h2>
                <p>
                  A project, a collaboration, or a conversation about what’s
                  next.
                  <br className="desktop-break" /> I’d love to hear what you
                  have in mind.
                </p>
              </div>
              <a
                className="contact-arrow"
                href={`mailto:${profile.email}`}
                aria-label="Email Siddharth Rajawat"
              >
                <ArrowUpRight strokeWidth={1.25} />
              </a>
            </div>
            <div className="contact-bottom">
              <div className="email-group">
                <a href={`mailto:${profile.email}`} className="email-link">
                  {profile.email}
                </a>
                <button
                  className="copy-email icon-button"
                  aria-label={
                    copyState === "copied"
                      ? "Email address copied"
                      : "Copy email address"
                  }
                  onClick={copyEmail}
                >
                  {copyState === "copied" ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                <span className="copy-status" role="status">
                  {copyState === "copied"
                    ? "Copied!"
                    : copyState === "failed"
                      ? "Please select and copy the email."
                      : ""}
                </span>
              </div>
              <div className="social-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={17} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="footer-brand" href="#home">
          <Asterisk /> Siddharth Rajawat
        </a>
        <span>Thoughtfully built. Constantly evolving.</span>
        <a href="#home" className="back-top">
          Back to top <ArrowUp size={15} />
        </a>
      </footer>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default App;
