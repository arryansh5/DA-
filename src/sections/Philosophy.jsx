import AnimatedSection from '../components/AnimatedSection';

const PRINCIPLES = [
  { num: '01', title: 'Form Follows Function', desc: 'Every spatial decision must serve clinical utility first. But in our philosophy, clinical efficiency and aesthetic beauty are not in conflict — they are inseparable.' },
  { num: '02', title: 'The Healing Environment', desc: 'Natural light, biophilic elements, noise management, and material warmth are not luxuries. Research shows they directly impact patient recovery times and staff burnout.' },
  { num: '03', title: 'Design for All Stakeholders', desc: 'A great healthcare space serves the patient, the caregiver, the administrator, and the family. We balance these four perspectives in every zone we design.' },
  { num: '04', title: 'Future-Ready Infrastructure', desc: 'Healthcare technology evolves rapidly. Our designs build in flexibility, scalability, and adaptability — so your facility grows with you without expensive retrofits.' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-white overflow-hidden py-28 md:py-40">
      {/* Subtle bg image — very faint */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=30"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.04 }}
          loading="lazy"
        />
      </div>
      {/* Right maroon accent */}
      <div className="absolute right-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-maroon/20 to-transparent hidden xl:block" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-maroon" />
              <span className="eyebrow-label">Design Philosophy</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-tight mb-6 heading-hover cursor-default">
              We believe design <em>changes outcomes.</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-slate-aura/65 text-lg leading-relaxed">
              At Design Aura, our philosophy is rooted in the belief that architecture has the power to heal. Not metaphorically — literally. The environments we design directly influence clinical outcomes, patient experience, and organisational culture.
            </p>
          </AnimatedSection>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {PRINCIPLES.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 100}>
              <div className="group bg-[#F7F7F5] border border-black/8 p-8 md:p-10 border-l-2 border-l-transparent hover:border-l-maroon transition-all duration-400 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-maroon/60">{p.num}</span>
                  <div className="h-px flex-1 bg-black/8 group-hover:bg-maroon/20 transition-colors duration-400" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-maroon mb-4 group-hover:text-slate-aura transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-aura/60 text-sm md:text-base leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote */}
        <AnimatedSection delay={200} direction="up">
          <div className="relative border-2 border-maroon/15 p-10 md:p-16 text-center bg-[#F7F7F5]">
            <div className="absolute top-4 left-8 text-maroon/15 font-serif text-8xl leading-none select-none">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl xl:text-4xl text-charcoal leading-relaxed max-w-3xl mx-auto relative z-10">
              Architecture is the thoughtful making of space. In healthcare, that space is where lives are saved, restored, and transformed.
            </blockquote>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-maroon" />
                <span className="eyebrow-label">Arvind Kapoor, Principal Architect</span>
                <div className="h-px w-8 bg-maroon" />
              </div>
            </div>
            <div className="absolute bottom-4 right-8 text-maroon/15 font-serif text-8xl leading-none select-none rotate-180">"</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
