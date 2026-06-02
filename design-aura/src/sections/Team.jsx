import AnimatedSection from '../components/AnimatedSection';
import { team } from '../data/content';
import { Link2, ArrowUpRight } from 'lucide-react';

function TeamCard({ member, index }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="group relative">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden mb-5 relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/92 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-slate-aura/70 text-sm leading-relaxed">{member.bio}</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn"
                className="w-8 h-8 border border-maroon/30 flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all duration-300">
                <Link2 size={13} />
              </a>
              <a href="#" aria-label="Profile"
                className="w-8 h-8 border border-black/12 flex items-center justify-center text-slate-aura/50 hover:border-maroon hover:text-maroon transition-all duration-300">
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-black/10">
            <span className="font-mono text-xs text-slate-aura/60">{member.exp}</span>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl text-maroon group-hover:text-slate-aura transition-colors duration-300">
            {member.name}
          </h3>
          <p className="eyebrow-label mt-1.5">{member.role}</p>
          <div className="mt-4 h-px bg-black/8 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-0 bg-maroon group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-white py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-10 bg-maroon" />
                <span className="eyebrow-label">The Studio Team</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-tight heading-hover cursor-default">
                The Minds Behind
                <br />
                <em>Every Space.</em>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={200} direction="left">
            <p className="text-slate-aura/60 text-base leading-relaxed max-w-sm">
              Our team brings together architects, interior designers, clinical consultants,
              and brand strategists united by a shared passion for healthcare excellence.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="mt-16 pt-10 border-t border-black/8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-aura/50 text-sm max-w-md">
              We're always looking for passionate designers who share our belief
              that great architecture transforms healthcare outcomes.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group btn-outline-maroon flex items-center gap-3 px-8 py-3.5 font-mono text-xs tracking-widest uppercase"
            >
              Join Our Studio
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
