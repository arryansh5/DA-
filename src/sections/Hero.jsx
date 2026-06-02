import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const MARQUEE_ITEMS = ['Healthcare Architecture', 'Hospital Design', 'Clinical Interiors', 'NABH Compliance', 'Healing Environments', 'Surgical Suites'];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── FULL-SCREEN VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Left-to-right gradient: dark on left for text legibility, fades to video on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        {/* Top & bottom subtle fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* ── ARCHITECTURAL GRID (very subtle) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── LEFT MAROON ACCENT LINE ── */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-maroon to-transparent z-[2] hidden xl:block" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-8xl mx-auto w-full px-6 md:px-12 xl:px-20 pt-28 pb-16">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="h-px w-12 bg-maroon" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-soft-grey/70">
              Healthcare Architecture & Interior Design Studio
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] text-white mb-8 transition-all duration-800 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '350ms' }}
          >
            Spaces That
            <br />
            <span
              className="not-italic"
              style={{
                backgroundImage: 'linear-gradient(135deg, #8B2635, #C04060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Heal.
            </span>
            <br />
            <span className="text-white/80">Design That</span>
            <br />
            Inspires.
          </h1>

          {/* Subtext */}
          <p
            className={`text-white/55 text-lg max-w-lg leading-relaxed mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            We design premium healthcare environments — hospitals, clinics, and surgical centres —
            built around clinical precision, patient well-being, and architectural excellence.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '650ms' }}
          >
            <button
              onClick={scrollToProjects}
              className="group btn-maroon flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest uppercase"
            >
              View Projects
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest uppercase border border-white/30 text-white hover:border-white/60 transition-all duration-300"
            >
              Our Studio
            </button>
          </div>
        </div>

        {/* Stats strip — bottom of content area */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '18', label: 'Years Experience' },
            { num: '12', label: 'Cities Across India' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              className={`px-6 py-5 md:px-8 md:py-7 ${i < 3 ? 'border-r border-white/10' : ''}`}
            >
              <div className="font-serif text-3xl md:text-4xl text-maroon-light font-bold mb-1">{num}</div>
              <div className="text-white/40 text-xs font-mono tracking-wider uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="relative z-10 pb-8 flex justify-center">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-maroon-light transition-colors duration-300 group"
        >
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent group-hover:from-maroon/60 transition-all duration-300" />
          <ArrowDown size={12} className="animate-bounce" />
        </button>
      </div>

      {/* ── MARQUEE TICKER ── */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden py-3 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 text-white/25 font-mono text-xs tracking-widest uppercase px-8"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-maroon/60 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
