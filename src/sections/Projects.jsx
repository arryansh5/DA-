import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/content';
import { ArrowUpRight, MapPin, Calendar, Maximize } from 'lucide-react';

const STATS = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '18',  label: 'Years Experience' },
  { num: '12',  label: 'Cities Across India' },
  { num: '98%', label: 'Client Satisfaction' },
];

function StatDisplay({ text }) {
  return (
    <>
      {text}
      <span
        className="inline-block w-[2px] h-[0.85em] bg-white/40 ml-0.5 align-middle"
        style={{ animation: 'blink 0.75s step-end infinite' }}
      />
    </>
  );
}

function StatsStrip() {
  const [charIndex, setCharIndex] = useState(0);
  const [erasing, setErasing]     = useState(false);

  useEffect(() => {
    let timeout;
    const maxLen = Math.max(...STATS.map(s => s.num.length));
    const tick = () => {
      setCharIndex(prev => {
        if (!erasing) {
          const next = prev + 1;
          if (next >= maxLen) {
            setTimeout(() => setErasing(true), 1800);
            return next;
          }
          timeout = setTimeout(tick, 110);
          return next;
        } else {
          const next = prev - 1;
          if (next <= 0) {
            setTimeout(() => setErasing(false), 600);
            return 0;
          }
          timeout = setTimeout(tick, 70);
          return next;
        }
      });
    };
    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [erasing]);

  return (
    <div className="w-full bg-charcoal border-b border-white/10">
      <div className="max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map(({ num, label }, i) => (
            <div key={label} className="px-6 py-6 md:px-8 md:py-8">
              <div className="font-serif text-3xl md:text-4xl text-white font-bold mb-1">
                <StatDisplay text={num.slice(0, charIndex)} />
              </div>
              <div className="text-white/50 text-xs font-mono tracking-wider uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 80}>
      <article
        onClick={onClick}
        className="group relative overflow-hidden bg-white border border-black/8 cursor-pointer card-lift"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-500 ${hovered ? 'opacity-20' : 'opacity-50'}`} />
          <div className={`absolute inset-0 bg-maroon/10 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

          <div className="absolute top-4 left-4">
            <span className="proj-num">{project.id}</span>
          </div>
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-mono tracking-wider px-3 py-1 border border-black/10">
                {tag}
              </span>
            ))}
          </div>
          <div className={`absolute bottom-4 right-4 w-9 h-9 bg-maroon flex items-center justify-center transition-all duration-400 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <ArrowUpRight size={15} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <p className="eyebrow-label mb-2">{project.category}</p>
          <h3 className="font-serif text-xl md:text-2xl text-maroon group-hover:text-slate-aura transition-colors duration-300 mb-3">
            {project.title}
          </h3>
          <p className="text-slate-aura/60 text-sm leading-relaxed mb-5 line-clamp-3">{project.desc}</p>


          <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-black/6">
            {project.location && (
              <div className="flex items-center gap-2 text-slate-aura/50">
                <MapPin size={12} />
                <span className="font-mono text-xs">{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2 text-slate-aura/50">
                <Calendar size={12} />
                <span className="font-mono text-xs">{project.year}</span>
              </div>
            )}
            {project.area && (
              <div className="flex items-center gap-2 text-slate-aura/50">
                <Maximize size={12} />
                <span className="font-mono text-xs">{project.area}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom hover bar */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-maroon transition-all duration-500 ${hovered ? 'w-full' : 'w-0'}`} />
      </article>
    </AnimatedSection>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[999] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-5xl w-full shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 border border-black/10 flex items-center justify-center text-charcoal hover:bg-maroon hover:text-white hover:border-maroon transition-all duration-300"
          aria-label="Close details"
        >
          <span className="text-xl font-light">&times;</span>
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] relative aspect-[4/3] md:aspect-auto bg-charcoal overflow-hidden flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-6 left-6 md:hidden">
            <span className="bg-white/95 backdrop-blur-sm text-charcoal text-[10px] font-mono tracking-wider px-3 py-1 border border-black/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] p-6 md:p-12 overflow-y-auto flex flex-col justify-between bg-white">
          <div>
            <div className="hidden md:flex items-center gap-4 mb-4">
              <span className="eyebrow-label text-maroon">{project.category}</span>
              <div className="h-px flex-1 bg-black/8" />
              <span className="font-mono text-xs text-slate-aura/40">{project.id}</span>
            </div>
            
            <h2 className="font-serif text-2xl md:text-4xl text-charcoal mb-6 leading-tight">
              {project.title}
            </h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-slate-aura/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {project.desc}
              </p>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-black/8 pt-6 text-xs font-mono mt-auto">
            {project.client && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Client</span>
                <span className="text-charcoal font-semibold">{project.client}</span>
              </div>
            )}
            {project.location && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Location</span>
                <span className="text-charcoal font-semibold">{project.location}</span>
              </div>
            )}
            {project.area && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Area</span>
                <span className="text-charcoal font-semibold">{project.area}</span>
              </div>
            )}
            {project.beds && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Capacity</span>
                <span className="text-charcoal font-semibold">{project.beds} Beds</span>
              </div>
            )}
            {project.cost && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Investment</span>
                <span className="text-charcoal font-semibold">{project.cost}</span>
              </div>
            )}
            {project.year && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Year</span>
                <span className="text-charcoal font-semibold">{project.year}</span>
              </div>
            )}
            {project.type && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Project Type</span>
                <span className="text-charcoal font-semibold">{project.type}</span>
              </div>
            )}
            {project.scope && (
              <div>
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Scope</span>
                <span className="text-charcoal font-semibold">{project.scope}</span>
              </div>
            )}
            {project.focus && (
              <div className="col-span-2">
                <span className="text-slate-aura/40 block text-[9px] uppercase tracking-wider mb-0.5">Design Focus</span>
                <span className="text-charcoal font-semibold">{project.focus}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const FILTERS = ['All', 'Hospital', 'Clinic', 'Surgical', 'Diagnostics'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="relative bg-white overflow-hidden">
      {/* Stats strip at the very top */}
      <StatsStrip />

      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-maroon/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20 py-28 md:py-36">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-10 bg-maroon" />
                <span className="eyebrow-label">Selected Projects</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl heading-hover cursor-default">
                Healthcare <em>Spaces We've Built.</em>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={200} direction="left">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                    filter === f
                      ? 'bg-maroon border-maroon text-white'
                      : 'border-black/15 text-slate-aura/60 hover:border-maroon/50 hover:text-maroon'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* View all */}
        <AnimatedSection delay={300}>
          <div className="mt-14 flex justify-center">
            <button className="group btn-outline-maroon flex items-center gap-3 px-10 py-4 font-mono text-xs tracking-widest uppercase">
              View All Projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
