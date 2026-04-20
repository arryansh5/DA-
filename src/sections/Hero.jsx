
import Anim from "../components/Anim";

export default function Hero({ visible, onConnect }) {
  return (
    <section className="hero-page">
      {/* VIDEO BACKGROUND */}
      <div className="video-wrap">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/videos/liquid2.mp4" type="video/mp4" />
        </video>

        {/* fallback if video not loaded */}
        <div className="video-fallback" />
      </div>

      {/* OVERLAYS */}
      <div className="overlay-gradient" />
      <div className="overlay-vignette" />

      {/* CONTENT */}
      <div className="hero-content">
        <Anim visible={visible} delay={200}>
          <p className="hero-quote">
            Building scalable solutions with clean design and efficient code.
          </p>
          <p className="hero-attr">Ishant Mittal · Full Stack Developer</p>
        </Anim>

        <Anim visible={visible} delay={400}>
          <h1 className="hero-h1">
            Turning Ideas <br />
            Into <span>Impactful Products</span>
          </h1>
        </Anim>

        <Anim visible={visible} delay={600}>
          <button className="btn-connect" data-hover onClick={onConnect}>
            Let’s Connect <span>↗</span>
          </button>
        </Anim>
      </div>

      {/* SCROLL INDICATOR */}
      {/* <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div> */}
    </section>
  );
}
