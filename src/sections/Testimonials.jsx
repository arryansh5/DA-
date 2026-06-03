import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative bg-[#F7F7F5] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-10 bg-maroon" />
                <span className="eyebrow-label">Client Voices</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl heading-hover cursor-default">
                What Our Clients
                <br />
                <em>Say About Us.</em>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={200} direction="left">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 border border-black/15 flex items-center justify-center text-slate-aura/50 hover:border-maroon hover:text-maroon transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-mono text-xs text-slate-aura/40">
                {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <button
                onClick={next}
                className="w-12 h-12 border border-black/15 flex items-center justify-center text-slate-aura/50 hover:border-maroon hover:text-maroon transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Content */}
        <AnimatedSection delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Featured */}
            <div className="lg:col-span-2 bg-white border border-black/8 shadow-sm p-8 md:p-12 border-l-2 border-l-maroon relative overflow-hidden">
              <Quote className="absolute top-6 right-8 text-maroon/8" size={80} />
              <blockquote
                key={active}
                className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 relative z-10"
                style={{ animation: 'fadeIn 0.5s ease forwards' }}
              >
                "{current.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img src={current.avatar} alt={current.author} className="w-12 h-12 rounded-full object-cover border-2 border-maroon/20" loading="lazy" />
                <div>
                  <p className="text-charcoal font-semibold text-sm">{current.author}</p>
                  <p className="text-slate-aura/50 text-xs font-mono mt-0.5">{current.role}</p>
                </div>
              </div>
              <div className="mt-8 h-px bg-black/6">
                <div
                  className="h-full bg-maroon transition-all duration-500"
                  style={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 border transition-all duration-300 ${
                    i === active
                      ? 'border-maroon bg-maroon/5'
                      : 'border-black/8 hover:border-black/20 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={t.avatar} alt={t.author} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                    <p className={`text-sm font-semibold ${i === active ? 'text-maroon' : 'text-charcoal/70'}`}>
                      {t.author}
                    </p>
                  </div>
                  <p className="text-slate-aura/50 text-xs font-mono leading-relaxed line-clamp-2">{t.role}</p>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
