import Anim from "../components/Anim";
import "../About.css";

export default function About({ visible }) {
  return (
    <section className="page about-page">

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <Anim visible={visible} delay={100}>
            <div className="eyebrow">— About Me</div>
          </Anim>

          <Anim visible={visible} delay={200}>
            <h2 className="sec-title">
              Crafting Digital <br /> Experiences.
            </h2>
          </Anim>

          <Anim visible={visible} delay={300}>
            <p className="body-text">
              I'm Ishant Mittal, a Full Stack Developer passionate about building
              scalable and user-friendly applications that solve real-world problems.
            </p>
          </Anim>

          <Anim visible={visible} delay={400}>
            <p className="body-text">
              I work with modern technologies like React, Node.js, and databases
              to create efficient, high-performance systems with clean architecture.
            </p>
          </Anim>

          <Anim visible={visible} delay={500}>
            <div className="edu-card">
              <div className="edu-label">Education</div>
              <div className="edu-degree">
                B.Tech — Computer Science & Engineering
              </div>
              <div className="edu-uni">
                UPES Dehradun
              </div>
              <div className="edu-year">2024 – 2028</div>
            </div>
          </Anim>

          <Anim visible={visible} delay={600}>
            <div className="social-row">
              <a href="https://github.com/mishant9166-del" className="soc-btn" data-hover>GitHub ↗</a>
              <a href="https://www.linkedin.com/in/ishant-mittal-b43498329?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="soc-btn" data-hover>LinkedIn ↗</a>
              <a href="mailto:mishant9166@gmail.com" className="soc-btn" data-hover>Email ↗</a>
            </div>
          </Anim>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <Anim visible={visible} delay={200}>
            <div className="stat-card big">
              <div className="stat-card-label">Projects Built</div>
              <div className="stat-card-num">05+</div>
            </div>
          </Anim>

          <Anim visible={visible} delay={300}>
            <div className="stat-card mid">
              <div className="stat-card-label">Technologies</div>
              <div className="stat-card-num">10+</div>
            </div>
          </Anim>

          <Anim visible={visible} delay={400}>
            <div className="stat-card small">
              <div className="stat-card-label">Learning & Growth</div>
              <div className="stat-card-num">∞</div>
            </div>
          </Anim>

        </div>

      </div>

      <div className="page-num">02 / 05</div>
    </section>
  );
}