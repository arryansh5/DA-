import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initialStyles = {
      up: 'translateY(40px)',
      left: 'translateX(-50px)',
      right: 'translateX(50px)',
      fade: 'translateY(0)',
    };

    el.style.opacity = '0';
    el.style.transform = initialStyles[direction] || initialStyles.up;
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0,0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
