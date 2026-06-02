import { Camera, Link2, X, ArrowUpRight } from 'lucide-react';

const FOOTER_LINKS = [
  { title: 'Studio', links: ['About Us', 'Philosophy', 'Our Team', 'Careers'] },
  { title: 'Services', links: ['Hospital Planning', 'Interior Design', 'NABH Compliance', 'Surgical Suites'] },
  { title: 'Work', links: ['All Projects', 'Hospitals', 'Clinics', 'Diagnostics'] },
];

export default function Footer() {
  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal relative overflow-hidden">
      {/* Architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top maroon line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-maroon to-transparent" />

      {/* CTA Band */}
      <div className="relative border-b border-white/5">
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow-label text-maroon-light mb-3">Start a Conversation</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white hover:text-soft-grey transition-colors duration-300 cursor-default">
              Ready to design your<br />
              <em className="not-italic text-maroon-light hover:text-soft-grey">healthcare space?</em>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            className="group flex items-center gap-3 border border-maroon px-8 py-4 text-maroon-light hover:bg-maroon hover:text-white transition-all duration-400 whitespace-nowrap"
          >
            <span className="font-mono text-xs tracking-widest uppercase">Book Consultation</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Design Aura" className="h-12 w-auto brightness-0 invert opacity-80" />
              <span className="font-serif text-xl text-white">
                Design<span className="text-maroon-light"> Aura</span>
              </span>
            </div>
            <p className="text-soft-grey/40 text-sm leading-relaxed max-w-xs mb-8">
              A premium healthcare architecture and interior design studio crafting healing environments that inspire confidence, comfort, and clinical excellence.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Link2, label: 'LinkedIn' },
                { icon: X, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-soft-grey/30 hover:border-maroon hover:text-maroon-light transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <p className="eyebrow-label text-soft-grey/40 mb-5">{title}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-soft-grey/30 text-sm hover:text-maroon-light transition-colors duration-200 anim-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-soft-grey/25 text-xs font-mono">
            © 2024 Design Aura. All rights reserved. · Healthcare Architecture & Interior Design
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-soft-grey/25 text-xs font-mono hover:text-maroon-light transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
