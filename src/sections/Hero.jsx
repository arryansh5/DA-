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
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient — strong on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        {/* Top navbar area darker so nav text is always visible */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* ── SUBTLE GRID ── */}
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
            <div className="h-px w-16 bg-maroon" />
            <span
              className="font-mono text-sm tracking-[0.2em] uppercase text-white font-bold"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
            >
              Healthcare Architecture &amp; Interior Design Studio
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`font-serif font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] text-white mb-8 transition-all duration-800 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '350ms', textShadow: '0 2px 30px rgba(0,0,0,0.8), 0 4px 60px rgba(0,0,0,0.5)' }}
          >
            Spaces That
            <br />
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #C03050, #E05070)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
            }}>
              Heal.
            </span>
            <br />
            <span className="text-white/95">Design That</span>
            <br />
            Inspires.
          </h1>

          {/* Sub */}
          <p
            className={`text-white/85 text-lg max-w-lg leading-relaxed mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms', textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
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
              className="flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest uppercase border border-white/30 text-white hover:border-white/70 hover:bg-white/10 transition-all duration-300"
            >
              Our Studio
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/15 bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '18', label: 'Years Experience' },
            { num: '12', label: 'Cities Across India' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map(({ num, label }, i) => (
            <div key={label} className={`px-6 py-5 md:px-8 md:py-7 ${i < 3 ? 'border-r border-white/15' : ''}`}>
              <div className="font-serif text-3xl md:text-4xl text-white font-bold mb-1">{num}</div>
              <div className="text-white/70 text-xs font-mono tracking-wider uppercase">{label}</div>
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
            <span key={i} className="inline-flex items-center gap-6 text-white/25 font-mono text-xs tracking-widest uppercase px-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-maroon/60 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
