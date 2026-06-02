import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9997] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-maroon-dark via-maroon to-maroon-light"
        style={{ width: '0%', transition: 'width 0.1s linear' }}
      />
    </div>
  );
}
