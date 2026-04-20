import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "../components/Header";
import DotNav from "../components/DotNav";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Project";
import Contact from "../sections/Contact";
import { useLocation } from "react-router-dom";

const SECTIONS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function MainLayout() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");

  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const timeout = useRef(null);

  /* ─── NAVIGATION ───────────────────────── */
  const goTo = useCallback(
    (index) => {
      if (isScrolling) return;

      const n = Math.max(0, Math.min(SECTIONS.length - 1, index));
      if (n === activeSection) return;

      setActiveSection(n);
      setIsScrolling(true);

      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setIsScrolling(false), 900);
    },
    [isScrolling, activeSection]
  );

  /* ─── SCROLL CONTROL ───────────────────── */
  useEffect(() => {
    if (isProjectPage) return; // ✅ disable on project page

    let locked = false;

    const handleWheel = (e) => {
      if (locked) return;

      const delta = e.deltaY;

      /* ignore small scroll */
      if (Math.abs(delta) < 40) return;

      const direction = delta > 0 ? 1 : -1;

      /* bounds check */
      if (
        (direction === 1 && activeSection >= SECTIONS.length - 1) ||
        (direction === -1 && activeSection <= 0)
      ) {
        return;
      }

      goTo(activeSection + direction);

      locked = true;
      setTimeout(() => {
        locked = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, goTo, isProjectPage]);

  /* ─── CLEANUP TIMEOUT ─────────────────── */
  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  /* ─── RENDER ─────────────────────────── */
  return (
    <div className="app">
      <Header goTo={goTo} />

      <DotNav
        active={activeSection}
        total={SECTIONS.length}
        onDotClick={goTo}
      />

      <div
        className="sections-track"
        style={{
          transform: `translateY(-${activeSection * 100}vh)`
        }}
      >
        <Hero visible={activeSection === 0} onConnect={() => goTo(4)} />
        <About visible={activeSection === 1} />
        <Skills visible={activeSection === 2} />
        <Projects visible={activeSection === 3} />
        <Contact visible={activeSection === 4} />
      </div>
    </div>
  );
}