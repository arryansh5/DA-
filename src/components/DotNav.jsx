export default function DotNav({ active, onDotClick }) {
  const SECTIONS = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="dot-nav">
      {SECTIONS.map((section, i) => (
        <button
          key={i}
          className={`dn${i === active ? " act" : ""}`}
          onClick={() => onDotClick(i)}
          title={section}
          data-hover
        />
      ))}
    </nav>
  );
}