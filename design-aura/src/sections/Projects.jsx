import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/content';
import { ArrowUpRight, MapPin, Calendar, Maximize } from 'lucide-react';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 80}>
      <article
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
          <p className="text-slate-aura/60 text-sm leading-relaxed mb-5 line-clamp-2">{project.desc}</p>

          <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-black/6">
            <div className="flex items-center gap-2 text-slate-aura/50">
              <MapPin size={12} />
              <span className="font-mono text-xs">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-aura/50">
              <Calendar size={12} />
              <span className="font-mono text-xs">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-aura/50">
              <Maximize size={12} />
              <span className="font-mono text-xs">{project.area}</span>
            </div>
          </div>
        </div>

        {/* Bottom hover bar */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-maroon transition-all duration-500 ${hovered ? 'w-full' : 'w-0'}`} />
      </article>
    </AnimatedSection>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const FILTERS = ['All', 'Hospital', 'Clinic', 'Surgical', 'Diagnostics'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="relative bg-white py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-maroon/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
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
                Healthcare
                <br />
                <em>Spaces We've Built.</em>
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
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

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
