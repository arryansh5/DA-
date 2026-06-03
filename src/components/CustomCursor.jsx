import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let animId;

    // ── Color schemes ──
    // 'dark'  = light section (cream/white bg) → use dark charcoal cursor
    // 'light' = dark section (video/black bg)  → use white cursor
    const scheme = {
      default: { dot: '#6E1F28', border: 'rgba(110,31,40,0.55)', hBorder: 'rgba(110,31,40,0.9)', hBg: 'rgba(110,31,40,0.08)' },
      white:   { dot: '#ffffff', border: 'rgba(255,255,255,0.75)', hBorder: 'rgba(255,255,255,0.95)', hBg: 'rgba(255,255,255,0.12)' },
    };

    let currentScheme = scheme.default;

    const applyScheme = (s) => {
      currentScheme = s;
      if (dotRef.current)  dotRef.current.style.background   = s.dot;
      if (ringRef.current) ringRef.current.style.borderColor = s.border;
    };

    // ── Check which section the cursor is over (position-based, always reliable) ──
    const checkSection = (x, y) => {
      const heroEl = document.getElementById('hero');
      if (!heroEl) return;

      const r = heroEl.getBoundingClientRect();
      const over = x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;

      // Hero has dark video bg → white cursor is more visible
      const target = over ? scheme.white : scheme.default;
      if (target !== currentScheme) applyScheme(target);
    };

    // ── Movement ──
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      checkSection(mouseX, mouseY);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.50;
      ringY += (mouseY - ringY) * 0.50;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animId = requestAnimationFrame(animate);
    };

    // ── Interactive element hover ──
    const onEnterInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width       = '52px';
        ringRef.current.style.height      = '52px';
        ringRef.current.style.borderColor = currentScheme.hBorder;
        ringRef.current.style.background  = currentScheme.hBg;
      }
    };
    const onLeaveInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width       = '32px';
        ringRef.current.style.height      = '32px';
        ringRef.current.style.borderColor = currentScheme.border;
        ringRef.current.style.background  = 'transparent';
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    animId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ willChange: 'transform', transform: 'translate3d(-100px,-100px,0)' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ willChange: 'transform', transform: 'translate3d(-100px,-100px,0)' }}
      />
    </>
  );
}
