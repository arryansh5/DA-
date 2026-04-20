import {  useRef } from "react";
import Anim from "../components/Anim";


const PROJECTS = [
  {
    id: "01",
    title: "YourOrder",
    category: "Food Tech · Full Stack",
    desc: "Full-featured food ordering platform with real-time order tracking, restaurant management dashboard, cart system, and seamless checkout.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    color: "",
    emoji: "🍔",
    github: "https://github.com/Tarundahiya7/Your-Order-",
  },
  {
    id: "02",
    title: "PetPal",
    category: "Social Good · Full Stack",
    desc: "Pet shelter platform connecting homeless animals with loving families. Adoption applications, pet listings, and shelter management.",
    stack: ["React", "Node.js", "MongoDB", "REST API", "Cloudinary"],
    color: "",
    emoji: "🐾",
    github: "https://github.com/mishant9166-del/PetPal",
  },
  {
    id: "03",
    title: "Memory-Aware CPU Scheduler",
    category: "Systems · OS",
    desc: "Advanced CPU scheduling simulator factoring real-time memory availability, with custom algorithms and live process visualization.",
    stack: ["C++", "OS Algorithms", "Data Structures"],
    color: "",
    emoji: "🖥️",
    github: "https://github.com/Tarundahiya7/MACS",
  },
  {
    id: "04",
    title: "Web Accessibility Auditor",
    category: "Dev Tool · JS",
    desc: "Browser tool scanning pages for WCAG accessibility violations, generating detailed reports to help build more inclusive products.",
    stack: ["JavaScript", "Node.js", "WCAG", "DOM APIs"],
    color: "",
    emoji: "♿",
    github: "https://github.com/Srijato-05/Web_Accessibility_Auditor",
  },
  {
    id: "05",
    title: "QuickChat",
    category: "Real-Time · Full Stack",
    desc: "Real-time messaging with instant delivery, authentication, online presence, typing indicators and clean minimal interface.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    color: "",
    emoji: "💬",
    github: "https://github.com/mishant9166-del/QuickChat",
  },
];

export default function Projects({ visible }) {
  const scrollRef = useRef();

  return (
    <section className="page projects-page">
      <div className="projects-inner">
        <Anim visible={visible} delay={50}>
          <div className="eyebrow">— Projects</div>
        </Anim>

        <Anim visible={visible} delay={120}>
          <h2 className="projects-heading">Selected Work & Experiments.</h2>
        </Anim>

        {/* SCROLL CONTAINER */}
        <div className="proj-scroll" ref={scrollRef}>
          {PROJECTS.map((p, i) => (
            <Anim key={i} visible={visible} delay={200 + i * 80}>
              <div className="proj-card" style={{ "--pc": p.color }}>
                {/* TOP */}
                <div className="proj-top">
                  <span className="proj-id">{p.id}</span>
                  <span className="proj-cat">{p.category}</span>
                </div>

                {/* TITLE */}
                <h3 className="proj-title">{p.title}</h3>

                {/* DESCRIPTION */}
                <p className="proj-desc">{p.desc}</p>

                {/* STACK */}
                <div className="proj-tags">
                  {p.stack.map((s, si) => (
                    <span key={si}>{s}</span>
                  ))}
                </div>

                {/* ORB */}
                <div className="proj-orb">
                  <span>{p.emoji}</span>
                </div>

                {/* LINK */}
                <a
                  className="pd-nav-gh"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub ↗
                </a>
              </div>
            </Anim>
          ))}
        </div>
      </div>

      <div className="page-num">04 / 05</div>
    </section>
  );
}
