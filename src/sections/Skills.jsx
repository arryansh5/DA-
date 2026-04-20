import Anim from "../components/Anim";

const SKILLS = [
  {
    title: "Frontend",
    
    items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    title: "Backend",
    
    items: ["Node.js", "Express", "REST APIs", "JWT", "Socket.io"],
  },
  {
    title: "Database",
    
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Tools",
    
    items: ["Git", "GitHub", "Postman", "Figma", "Linux"],
  },
];


export default function Skills({ visible }) {
  return (
    <section className="page skills-page">
      <div className="skills-container">

        <Anim visible={visible} delay={100}>
          <div className="eyebrow">— My Stack</div>
        </Anim>

        <Anim visible={visible} delay={200}>
          <h2 className="skills-heading">
            Technologies I Work With.
          </h2>
        </Anim>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <Anim key={i} visible={visible} delay={300 + i * 120}>
              <div className={`skill-box skill-box-${i}`}>
                <div className="skill-box-top">
                  <span>{skill.title}</span>
                  <span className="skill-arrow">↗</span>
                </div>

                <div className="skill-box-tags">
                  {skill.items.map((it, j) => (
                    <span key={j}>{it}</span>
                  ))}
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>

      <div className="page-num">03 / 05</div>
    </section>
  );
}