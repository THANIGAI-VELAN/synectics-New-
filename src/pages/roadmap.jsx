import { useEffect, useRef, useState } from "react";
import roadmapImage from "../../public/route_map.jpeg"; // <-- your roadmap image

export default function RoadmapSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40 flex justify-center overflow-hidden"
    >

      {/* Background Text */}
      <div className="
        absolute
        text-[50px]
        sm:text-[80px]
        md:text-[140px]
        lg:text-[220px]
        font-playfair
        text-white/5
        top-0
        left-1/2
        -translate-x-1/2
        pointer-events-none
        select-none
      ">
        ROADMAP
      </div>

      <div
        className={`
          relative w-full max-w-6xl
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >

        {/* Golden Border Frame */}
        <div className="
          relative
          p-3 sm:p-4 md:p-6 lg:p-8
          border-2 border-[#D4AF37]
          rounded-2xl sm:rounded-3xl
          shadow-[0_0_40px_rgba(212,175,55,0.15)]
          transition-all duration-500
          hover:shadow-[0_0_70px_rgba(212,175,55,0.3)]
        ">

          {/* Inner subtle glow layer */}
          <div className="
            absolute inset-0
            rounded-3xl
            bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5
            pointer-events-none
          " />

          {/* Roadmap Image */}
          <img
            src={roadmapImage}
            alt="Event Roadmap"
            className="
              relative
              w-full
              h-auto
              rounded-2xl
              object-contain
              transition-transform duration-700
              hover:scale-[1.02]
            "
          />

        </div>

      </div>
    </section>
  );
}