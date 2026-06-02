import AnimatedSection from '../components/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

const PILLARS = [
  { label: 'Evidence-Based Design', desc: 'Every spatial decision is backed by research into how environments affect patient recovery, staff efficiency, and clinical outcomes.' },
  { label: 'Clinical Precision', desc: 'We understand infection control, workflow optimization, and accreditation standards as deeply as we understand aesthetics.' },
  { label: 'Human-Centered Spaces', desc: 'From wayfinding to lighting, every element is calibrated to reduce anxiety, build trust, and support healing.' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#F7F7F5] overflow-hidden py-28 md:py-36">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Left maroon line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-maroon/40 to-transparent" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left */}
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-maroon" />
                <span className="eyebrow-label">About the Studio</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-tight mb-8 heading-hover cursor-default">
                Where Architecture
                <br />
                Meets <em>Healing.</em>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-slate-aura/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Design Aura is a specialist healthcare architecture and interior design studio with over 18 years of expertise in creating environments where clinical performance and human experience converge.
              </p>
              <p className="text-slate-aura/60 text-base leading-relaxed max-w-lg">
                From 200-bed multispecialty hospitals to boutique wellness clinics, our work is grounded in evidence-based design principles, regulatory expertise, and an unwavering commitment to the people who inhabit these spaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="group btn-maroon flex items-center gap-2 px-7 py-3.5 font-mono text-xs tracking-widest uppercase"
                >
                  Work with Us
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-outline-maroon flex items-center gap-2 px-7 py-3.5 font-mono text-xs tracking-widest uppercase"
                >
                  See Our Work
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — image */}
          <AnimatedSection delay={150} direction="left">
            <div className="relative">
              <div className="img-hover aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631217873436-b58f5f8adedb?w=800&q=80"
                  alt="Design Aura Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-maroon/20 -z-10" />
              <div className="absolute -bottom-6 left-6 bg-white border border-black/8 shadow-md px-6 py-4">
                <div className="font-serif text-3xl text-maroon font-bold">18+</div>
                <div className="eyebrow-label text-slate-aura/60 mt-1">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {PILLARS.map(({ label, desc }, i) => (
            <AnimatedSection key={label} delay={i * 100}>
              <div className="bg-white p-8 md:p-10 h-full group hover:bg-[#F7F7F5] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-maroon font-mono text-xs">0{i + 1}</span>
                  <div className="h-px flex-1 bg-black/8 group-hover:bg-maroon/30 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-maroon mb-3 group-hover:text-slate-aura transition-colors duration-300">{label}</h3>
                <p className="text-slate-aura/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Awards strip */}
        <AnimatedSection delay={200}>
          <div className="mt-16 flex flex-wrap items-center gap-8 md:gap-14 py-8 border-t border-black/8">
            <span className="eyebrow-label text-slate-aura/40">Recognized by</span>
            {['IIID Award 2023', 'HUDCO Excellence Award', 'Green Building Council', 'NABH Partner Studio', 'JCI Certified Process'].map((award) => (
              <span key={award} className="text-slate-aura/50 font-mono text-xs tracking-wider">{award}</span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
