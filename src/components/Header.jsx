export default function Header({ goTo }) {
  return (
    <header className="top-nav">
      <div className="nav-left">
        <div className="nav-brand">
          <span className="nav-logo">IM.</span>
          <span className="nav-name">Ishant Mittal</span>
        </div>
      </div>

      <nav className="nav-center">
        <span onClick={() => goTo(0)} data-hover>HOME</span>
        <span onClick={() => goTo(1)} data-hover>ABOUT</span>
        <span onClick={() => goTo(2)} data-hover>SKILLS</span>
        <span onClick={() => goTo(3)} data-hover>PROJECTS</span>
        <span onClick={() => goTo(4)} data-hover>CONTACT</span>
      </nav>

      <div className="nav-right">
        <span className="nav-phone">(+91) 9166563495</span>
        {/* <a
          href="mailto:mishant9166@gmail.com"
          className="nav-mail"
          data-hover
        >
          ✉
        </a> */}
      </div>
    </header>
  );
}