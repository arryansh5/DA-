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

const LEFT_LINKS  = NAV_LINKS.slice(0, 3);  // About · Projects · Services
const RIGHT_LINKS = NAV_LINKS.slice(3);     // Philosophy · Team · Contact

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

  /* shared pill class */
  const pillCls = scrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-sm border border-black/8'
    : 'bg-black/40 backdrop-blur-md border border-white/15';

  /* shared link class */
  const linkCls = (href) =>
    `relative px-5 py-2.5 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300 ${
      activeLink === href
        ? 'bg-maroon text-white shadow-sm'
        : scrolled
        ? 'text-slate-aura/70 hover:text-[#B04050] hover:bg-[#B04050]/10'
        : 'text-white font-semibold hover:text-[#FFB0B8] hover:bg-white/10'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="relative max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* ── LEFT NAV PILL ── */}
          <nav className={`hidden lg:flex items-center rounded-full px-2.5 py-2.5 transition-all duration-400 ${pillCls}`}>
            {LEFT_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={(e) => handleNav(e, href)} className={linkCls(href)}>
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile spacer — balances hamburger so logo stays centred */}
          <div className="lg:hidden w-12 h-12" />

          {/* ── CENTER: LOGO (absolutely centred) ── */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-400 z-10 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-sm border border-black/8'
                : 'bg-black/40 backdrop-blur-md border border-white/20'
            }`}
          >
            <img src="/logo.png" alt="Design Aura" className="h-9 w-auto" />
            <span className={`font-serif text-lg font-semibold whitespace-nowrap ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Design<span className="text-maroon"> Aura</span>
            </span>
          </a>

          {/* ── RIGHT NAV PILL + CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <nav className={`flex items-center rounded-full px-2.5 py-2.5 transition-all duration-400 ${pillCls}`}>
              {RIGHT_LINKS.map(({ label, href }) => (
                <a key={href} href={href} onClick={(e) => handleNav(e, href)} className={linkCls(href)}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className={`flex items-center px-7 py-3 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-400 border ${
                scrolled
                  ? 'border-maroon text-maroon hover:bg-[#B04050] hover:border-[#B04050] hover:text-white bg-white/95 backdrop-blur-xl shadow-sm'
                  : 'border-white text-white font-semibold hover:bg-[#B04050] hover:border-[#B04050] bg-black/30 backdrop-blur-md'
              }`}
            >
              Consult Us
            </a>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/95 border border-black/8 text-charcoal shadow-sm'
                : 'bg-white/15 border border-white/20 text-white'
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        className={`fixed inset-0 z-[150] bg-white flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-charcoal"
          onClick={() => setMenuOpen(false)}
        >
          <X size={20} />
        </button>

        <div className="mb-10 flex items-center gap-3">
          <img src="/logo.png" alt="Design Aura" className="h-10 w-auto" />
          <span className="font-serif text-xl text-charcoal">Design<span className="text-maroon"> Aura</span></span>
        </div>

        <nav className="flex flex-col gap-3">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`flex items-center gap-4 px-5 py-4 rounded-full group transition-all duration-300 ${
                activeLink === href
                  ? 'bg-maroon text-white'
                  : 'hover:bg-[#B04050]/12 hover:text-[#B04050] text-charcoal'
              }`}
            >
              <span className="text-maroon/50 font-mono text-xs w-5">0{i + 1}</span>
              <span className="font-serif text-2xl">{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-10 pt-8 border-t border-black/8">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-maroon inline-block px-8 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase"
          >
            Book a Consultation ↗
          </a>
        </div>

        <p className="absolute bottom-8 left-8 text-slate-aura/30 text-xs font-mono">
          Design Aura © 2024 · Healthcare Architecture Studio
        </p>
      </div>
    </>
  );
}
