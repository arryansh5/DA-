import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="relative bg-[#F7F7F5] py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-maroon/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-10 bg-maroon" />
                <span className="eyebrow-label">What We Do</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-tight heading-hover cursor-default">
                Services Built for <em>Healthcare.</em>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={200} direction="left">
            <p className="text-slate-aura/60 text-base md:text-lg leading-relaxed">
              Our services span the complete spectrum of healthcare facility development — from master planning to environmental branding — delivered with technical expertise and design intelligence.
            </p>
          </AnimatedSection>
        </div>

        {/* Services list */}
        <div className="border-t border-black/8">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 60}>
              <div
                className={`group border-b border-black/8 cursor-pointer transition-all duration-400 ${
                  activeService === i ? 'bg-white' : 'hover:bg-white/70'
                }`}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="py-7 px-0 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="font-mono text-xs text-maroon/50 w-5">{service.id}</span>
                      <span className={`text-xl transition-colors duration-300 ${activeService === i ? 'text-maroon' : 'text-slate-aura/30'}`}>
                        {service.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300 truncate ${
                        activeService === i ? 'text-slate-aura' : 'text-maroon group-hover:text-slate-aura'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-slate-aura/60 text-sm leading-relaxed mt-2 transition-all duration-500 overflow-hidden ${
                        activeService === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 border flex items-center justify-center transition-all duration-400 ${
                    activeService === i
                      ? 'border-maroon bg-maroon text-white rotate-0'
                      : 'border-black/12 text-slate-aura/30 group-hover:border-maroon/40 group-hover:text-maroon -rotate-45'
                  }`}>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA strip */}
        <AnimatedSection delay={200}>
          <div className="mt-14 glass-maroon p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-l-2 border-maroon">
            <div>
              <p className="eyebrow-label mb-2">Custom Projects</p>
              <p className="text-charcoal text-lg font-serif">
                Have a unique requirement? We tailor every engagement to your specific clinical context.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group btn-maroon flex items-center gap-3 px-8 py-3.5 font-mono text-xs tracking-widest uppercase whitespace-nowrap"
            >
              Discuss Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
