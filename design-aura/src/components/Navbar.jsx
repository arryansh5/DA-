import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/logo.png"
              alt="Design Aura Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif text-lg font-semibold tracking-wide text-charcoal hidden sm:block">
              Design<span className="text-maroon"> Aura</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`eyebrow-label hover:text-slate-aura transition-colors duration-300 anim-underline ${
                  activeLink === href ? 'text-maroon' : 'text-slate-aura/80'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-slate-aura/50 text-xs font-mono tracking-widest">+91 98765 43210</span>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="btn-maroon px-5 py-2.5 text-xs font-mono tracking-widest uppercase"
            >
              Consult Us
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-charcoal p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[150] bg-white flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-charcoal"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="mb-8 flex items-center gap-3">
          <img src="/logo.png" alt="Design Aura" className="h-12 w-auto" />
          <span className="font-serif text-xl text-charcoal">Design<span className="text-maroon"> Aura</span></span>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="flex items-center gap-4 group"
            >
              <span className="text-maroon/50 font-mono text-xs">0{i + 1}</span>
              <span className="font-serif text-3xl text-maroon group-hover:text-slate-aura transition-colors duration-300">
                {label}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-12 pt-8 border-t border-black/10">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-maroon inline-block px-8 py-3 text-xs font-mono tracking-widest uppercase"
          >
            Book a Consultation ↗
          </a>
        </div>

        <div className="absolute bottom-8 left-8">
          <p className="text-slate-aura/40 text-xs font-mono">
            Design Aura © 2024 · Healthcare Architecture Studio
          </p>
        </div>
      </div>
    </>
  );
}
