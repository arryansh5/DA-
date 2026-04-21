import { useState } from "react";

export default function Header({ goTo, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const SECTIONS = ["Home", "About", "Skills", "Projects", "Contact"];

  // const handleNav = (i) => {
  //   goTo(i);
  //   setMenuOpen(false);
  // };

  return (
    <>
      <header className="top-nav">
        <div className="nav-left">
          <div className="nav-brand">
            <span className="nav-logo">IM.</span>
            <span className="nav-name">Ishant Mittal</span>
          </div>
        </div>

        {/* DESKTOP CENTER NAV */}
        <nav className="nav-center">
          {SECTIONS.map((s, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`nav-pages-btn${activeSection === i ? " nav-active" : ""}`}
              data-hover
            >
              {s.toUpperCase()}
            </span>
          ))}
        </nav>

        <div className="nav-right">
          <span className="nav-phone">(+91) 9166563495</span>

          {/* HAMBURGER — mobile only */}
          {/* <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line${menuOpen ? " open" : ""}`} />
            <span className={`ham-line${menuOpen ? " open" : ""}`} />
            <span className={`ham-line${menuOpen ? " open" : ""}`} />
          </button> */}
        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      {/* <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        {SECTIONS.map((s, i) => (
          <button
            key={i}
            className={`mobile-menu-item${activeSection === i ? " active" : ""}`}
            onClick={() => handleNav(i)}
          >
            <span className="mm-num">0{i + 1}</span>
            {s}
          </button>
        ))}
      </div> */}

      {/* OVERLAY */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
