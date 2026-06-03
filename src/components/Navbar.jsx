import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects', hasDropdown: true },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Consultation', href: '#contact', highlight: true },
  { label: 'Philosophy', href: '#philosophy', hasDropdown: true },
  { label: 'Team', href: '#team', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-300 ${
          scrolled ? 'bg-black shadow-md' : 'bg-black/90 backdrop-blur-md'
        }`}
      >
        {/* ── 2. MIDDLE ICON & LOGO BAR ── */}
        <div className="relative w-full max-w-7xl mx-auto px-6 py-4 flex items-center h-20">
          
          {/* Center Logo (Absolutely Centered) */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 transition-transform hover:scale-105 duration-500"
          >
            <img src="/logo.png" alt="Design Aura" className="h-10 sm:h-14 w-auto drop-shadow-2xl" />
          </a>

          {/* Right Icons (Hamburger) - pushed to right via ml-auto */}
          <div className="ml-auto flex items-center gap-5 text-white/90">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden hover:text-maroon transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── 3. BOTTOM NAV LINKS (Desktop) ── */}
        <nav className="hidden lg:flex w-full pb-5 justify-center items-center gap-8">
          {NAV_LINKS.map(({ label, href, hasDropdown, highlight }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-colors ${
                highlight
                  ? 'text-red-600 hover:text-red-500 font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {label}
              {hasDropdown && <ChevronDown size={14} className="opacity-70" />}
            </a>
          ))}
        </nav>
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        className={`fixed inset-0 z-[150] bg-black flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          <X size={20} />
        </button>

        <div className="mb-10 flex items-center justify-center gap-3">
          <img src="/logo.png" alt="Design Aura" className="h-12 w-auto" />
        </div>

        <nav className="flex flex-col gap-1 items-center text-center">
          {NAV_LINKS.map(({ label, href, highlight }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`px-5 py-4 text-2xl font-serif tracking-wide transition-colors ${
                highlight ? 'text-red-500' : 'text-white hover:text-white/70'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
