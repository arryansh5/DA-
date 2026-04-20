import React, {  useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`;
    };
    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px,${ring.current.y - 18}px)`;
      raf = requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    const hIn = () => {
      dotRef.current?.classList.add("hov");
      ringRef.current?.classList.add("hov");
    };
    const hOut = () => {
      dotRef.current?.classList.remove("hov");
      ringRef.current?.classList.remove("hov");
    };
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a,button,input,textarea,[data-hover]")) hIn();
      else hOut();
    });
    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="c-dot" ref={dotRef} />
      <div className="c-ring" ref={ringRef} />
    </>
  );
}