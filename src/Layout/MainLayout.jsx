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
  const [isMobile, setIsMobile] = useState(false);

  const timeout = useRef(null);
  const touchStartY = useRef(null);
  const touchStartX = useRef(null);

  /* ─── DETECT MOBILE ─────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  /* ─── WHEEL SCROLL (desktop) ───────────── */
  useEffect(() => {
    if (isProjectPage || isMobile) return;

    let locked = false;

    const handleWheel = (e) => {
      if (locked) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 40) return;
      const direction = delta > 0 ? 1 : -1;

      if (
        (direction === 1 && activeSection >= SECTIONS.length - 1) ||
        (direction === -1 && activeSection <= 0)
      ) return;

      goTo(activeSection + direction);
      locked = true;
      setTimeout(() => { locked = false; }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection, goTo, isProjectPage, isMobile]);

  /* ─── TOUCH SWIPE (mobile) ─────────────── */
  useEffect(() => {
    if (isProjectPage || !isMobile) return;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = Math.abs(touchStartX.current - e.changedTouches[0].clientX);

      // Only vertical swipes, ignore horizontal (for proj scroll cards)
      if (Math.abs(deltaY) < 50 || deltaX > Math.abs(deltaY)) return;

      const direction = deltaY > 0 ? 1 : -1;

      if (
        (direction === 1 && activeSection >= SECTIONS.length - 1) ||
        (direction === -1 && activeSection <= 0)
      ) return;

      goTo(activeSection + direction);
      touchStartY.current = null;
      touchStartX.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection, goTo, isProjectPage, isMobile]);

  /* ─── CLEANUP TIMEOUT ─────────────────── */
  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  /* ─── RENDER ─────────────────────────── */
  return (
    <div className="app">
      <Header goTo={goTo} activeSection={activeSection} />

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