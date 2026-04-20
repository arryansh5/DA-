import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const project = {
    title: "Web Accessibility Auditor",
    category: "Dev Tool · AI Systems · Full Stack",
    tagline: "Multi-agent system for deep accessibility auditing",
    overview:
      "An advanced auditing platform that evaluates web applications against WCAG 2.2 AAA and GIGW 3.0 standards using agent-based simulations.",
    description:
      "This system uses multiple specialized agents (visual, motor, cognitive) to simulate real user interactions and detect accessibility issues beyond traditional static analysis. It supports recursive crawling, handles protected routes, and generates detailed reports with actionable remediation guidance.",
    features: [
      "Multi-agent accessibility testing",
      "Deep recursive crawling",
      "Real-time interaction simulation",
      "Accessibility Compliance Index (ACI)",
      "Graph-based issue modeling",
      "Automated report generation",
    ],
    stack: ["React", "TypeScript", "FastAPI", "Playwright", "Redis", "SQLModel", "TigerGraph"],
    challenges: [
      "Simulating real user behavior beyond DOM analysis",
      "Handling protected and dynamic routes",
      "Scaling distributed audit processing",
      "Maintaining consistency across async agents",
    ],
    learnings: [
      "Distributed system design",
      "Advanced browser automation",
      "Accessibility standards (WCAG, GIGW)",
      "Graph-based modeling",
    ],
    images: ["/projects/audit1.png", "/projects/audit2.png"],
    github: "https://github.com/Srijato-05/Web_Accessibility_Auditor",
    stats: [
      { value: "7", label: "Stack layers" },
      { value: "3", label: "Agent types" },
      { value: "AAA", label: "WCAG level" },
      { value: "3.0", label: "GIGW standard" },
    ],
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .pd-root {
          --font-display: 'Instrument Serif', Georgia, serif;
          --font-body: 'DM Sans', sans-serif;
          --c-bg: #0b0b0b;
          --c-surface: #141414;
          --c-surface-2: #1c1c1c;
          --c-border: rgba(255,255,255,0.07);
          --c-border-strong: rgba(255,255,255,0.14);
          --c-text: #f0ede8;
          --c-text-muted: rgba(240,237,232,0.45);
          --c-text-faint: rgba(240,237,232,0.22);
          --c-accent: #c9b99a;
          --c-accent-dim: rgba(201,185,154,0.12);
          font-family: var(--font-body);
          background: var(--c-bg);
          color: var(--c-text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .pd-root *, .pd-root *::before, .pd-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* NAV */
        .pd-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2.5rem;
          transition: background 0.3s, border-color 0.3s;
          border-bottom: 1px solid transparent;
        }
        .pd-nav.scrolled {
          background: rgba(11,11,11,0.85);
          backdrop-filter: blur(14px);
          border-bottom-color: var(--c-border);
        }
        .pd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1px solid var(--c-border-strong);
          color: var(--c-text-muted);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          padding: 7px 16px;
          border-radius: 999px;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .pd-back-btn:hover {
          color: var(--c-text);
          border-color: var(--c-border-strong);
          background: var(--c-surface);
        }
        .pd-nav-gh {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--c-text-muted);
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .pd-nav-gh:hover { color: var(--c-text); }

        /* HERO */
        .pd-hero {
          padding: 9rem 2.5rem 5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-accent);
          margin-bottom: 2rem;
        }
        .pd-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--c-accent);
          opacity: 0.5;
        }
        .pd-title {
          font-family: var(--font-display);
          font-size: clamp(46px, 7vw, 82px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--c-text);
          margin-bottom: 1.75rem;
        }
        .pd-title em {
          font-style: italic;
          color: var(--c-accent);
        }
        .pd-tagline {
          font-size: 18px;
          font-weight: 300;
          color: var(--c-text-muted);
          line-height: 1.65;
          max-width: 520px;
        }

        /* STATS BAR */
        .pd-stats {
          max-width: 1000px;
          margin: 0 auto 4rem;
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--c-border);
          border-radius: 16px;
          overflow: hidden;
          background: var(--c-surface);
        }
        .pd-stat {
          padding: 1.5rem 1.75rem;
          border-right: 1px solid var(--c-border);
        }
        .pd-stat:last-child { border-right: none; }
        .pd-stat-val {
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 400;
          color: var(--c-text);
          line-height: 1;
          margin-bottom: 6px;
        }
        .pd-stat-lbl {
          font-size: 12px;
          color: var(--c-text-faint);
          letter-spacing: 0.04em;
        }

        /* MAIN IMAGE */
        .pd-main-img {
          max-width: 1000px;
          margin: 0 auto 5rem;
          padding: 0 2.5rem;
        }
        .pd-img-frame {
          border-radius: 16px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          overflow: hidden;
          aspect-ratio: 16/8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .pd-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pd-img-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--c-text-faint);
          font-size: 13px;
        }
        .pd-img-placeholder svg { opacity: 0.25; }

        /* BODY */
        .pd-body {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2.5rem 6rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--c-border);
          border: 1px solid var(--c-border);
          border-radius: 20px;
          overflow: hidden;
        }
        .pd-cell {
          background: var(--c-bg);
          padding: 2.25rem 2.5rem;
        }
        .pd-cell.full { grid-column: span 2; }
        .pd-cell-label {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-accent);
          margin-bottom: 1.25rem;
        }
        .pd-cell-text {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--c-text-muted);
        }
        .pd-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .pd-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14.5px;
          font-weight: 300;
          color: var(--c-text-muted);
          line-height: 1.55;
        }
        .pd-list li::before {
          content: '';
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--c-accent);
          flex-shrink: 0;
          margin-top: 8px;
          opacity: 0.6;
        }
        .pd-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pd-chip {
          font-size: 13px;
          font-weight: 400;
          color: var(--c-text-muted);
          background: var(--c-accent-dim);
          border: 1px solid rgba(201,185,154,0.15);
          padding: 5px 13px;
          border-radius: 999px;
          letter-spacing: 0.02em;
        }

        /* GALLERY */
        .pd-gallery {
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2.5rem;
        }
        .pd-gallery-label {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-accent);
          margin-bottom: 1.5rem;
        }
        .pd-gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .pd-gallery-item {
          border-radius: 12px;
          border: 1px solid var(--c-border);
          background: var(--c-surface);
          aspect-ratio: 16/9;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-text-faint);
          font-size: 12px;
        }
        .pd-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* FOOTER */
        .pd-footer {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 2.5rem 5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--c-border);
        }
        .pd-footer-copy {
          font-size: 13px;
          color: var(--c-text-faint);
          font-weight: 300;
        }
        .pd-gh-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          color: var(--c-text);
          font-size: 14px;
          font-weight: 400;
          background: var(--c-surface);
          border: 1px solid var(--c-border-strong);
          padding: 10px 20px;
          border-radius: 999px;
          letter-spacing: 0.02em;
          transition: background 0.2s, border-color 0.2s;
        }
        .pd-gh-btn:hover {
          background: var(--c-surface-2);
          border-color: rgba(255,255,255,0.22);
        }

        /* SEPARATOR */
        .pd-sep {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .pd-sep-line {
          height: 1px;
          background: var(--c-border);
          margin-bottom: 4rem;
        }

        /* FADE IN ANIMATION */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pd-hero { animation: fadeUp 0.7s ease both; }
        .pd-stats { animation: fadeUp 0.7s 0.1s ease both; }
        .pd-main-img { animation: fadeUp 0.7s 0.2s ease both; }
        .pd-body { animation: fadeUp 0.7s 0.25s ease both; }
        .pd-gallery { animation: fadeUp 0.7s 0.3s ease both; }
        .pd-footer { animation: fadeUp 0.7s 0.35s ease both; }

        @media (max-width: 640px) {
          .pd-hero { padding: 7rem 1.25rem 3.5rem; }
          .pd-stats, .pd-main-img, .pd-body, .pd-gallery, .pd-footer, .pd-sep { padding-left: 1.25rem; padding-right: 1.25rem; }
          .pd-stats { grid-template-columns: 1fr 1fr; }
          .pd-stat { border-bottom: 1px solid var(--c-border); }
          .pd-body { grid-template-columns: 1fr; }
          .pd-cell.full { grid-column: span 1; }
          .pd-gallery-grid { grid-template-columns: 1fr; }
          .pd-nav { padding: 1rem 1.25rem; }
        }
      `}</style>

      <div className="pd-root">

        {/* NAV */}
        <nav className={`pd-nav${scrolled ? " scrolled" : ""}`}>
          <button className="pd-back-btn" onClick={() => navigate("/")}>
            ← Back
          </button>
          <a className="pd-nav-gh" href={project.github} target="_blank" rel="noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub ↗
          </a>
        </nav>

        {/* HERO */}
        <div className="pd-hero" ref={heroRef}>
          <div className="pd-eyebrow">
            <span className="pd-eyebrow-dot" />
            {project.category}
          </div>
          <h1 className="pd-title">
            Web <em>Accessibility</em><br />Auditor
          </h1>
          <p className="pd-tagline">{project.tagline}</p>
        </div>

        {/* STATS */}
        <div className="pd-stats">
          {project.stats.map((s, i) => (
            <div className="pd-stat" key={i}>
              <div className="pd-stat-val">{s.value}</div>
              <div className="pd-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="pd-main-img">
          <div className="pd-img-frame">
            <img
              src={project.images[0]}
              alt="Project preview"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div className="pd-img-placeholder">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="14" rx="2" /><path d="M7 21h10M12 17v4" />
              </svg>
              <span>audit1.png</span>
            </div>
          </div>
        </div>

        {/* BODY GRID */}
        <div className="pd-body">

          {/* Overview — full width */}
          <div className="pd-cell full">
            <div className="pd-cell-label">Overview</div>
            <p className="pd-cell-text">{project.description}</p>
          </div>

          {/* Features */}
          <div className="pd-cell">
            <div className="pd-cell-label">Key Features</div>
            <ul className="pd-list">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          {/* Stack */}
          <div className="pd-cell">
            <div className="pd-cell-label">Tech Stack</div>
            <div className="pd-chips">
              {project.stack.map((s, i) => <span className="pd-chip" key={i}>{s}</span>)}
            </div>
          </div>

          {/* Challenges */}
          <div className="pd-cell">
            <div className="pd-cell-label">Challenges</div>
            <ul className="pd-list">
              {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          {/* Learnings */}
          <div className="pd-cell">
            <div className="pd-cell-label">Learnings</div>
            <ul className="pd-list">
              {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>

        </div>

        {/* GALLERY */}
        <div className="pd-gallery">
          <div className="pd-gallery-label">Interface Preview</div>
          <div className="pd-gallery-grid">
            {project.images.map((img, i) => (
              <div className="pd-gallery-item" key={i}>
                <img src={img} alt={`preview ${i + 1}`} onError={(e) => { e.target.style.display = "none"; }} />
                <span style={{ position: "absolute" }}>No image</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="pd-footer">
          <span className="pd-footer-copy">View source code</span>
          <a className="pd-gh-btn" href={project.github} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub ↗
          </a>
        </div>

      </div>
    </>
  );
}