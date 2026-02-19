import { useEffect, useRef } from "react";

export default function InteractiveGrid({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden pointer-events-none select-none ${className}`}
      style={{
        '--mouse-x': '-1000px',
        '--mouse-y': '-1000px',
      }}
    >
      {/* Base Grid */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(169, 169, 169, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(169, 169, 169, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold Highlight */}
      <div
        className="absolute inset-0 w-full h-full opacity-0 sm:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `
            radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)
          `,
          WebkitMaskImage: `
            radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)
          `,
        }}
      />
    </div>
  );
}
