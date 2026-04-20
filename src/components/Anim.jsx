export default function Anim({ children, delay = 0, visible, className = "" }) {
  return (
    <div
      className={`anim-el ${className}${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}