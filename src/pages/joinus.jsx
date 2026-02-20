import { useEffect, useRef, useState } from "react";

function WhyCard({ number, title, description, delay }) {
  return (
    <div
      className={`
        relative
        backdrop-blur-2xl bg-white/5
        border border-white/10
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8 md:p-12
        transition-all duration-700
        hover:-translate-y-4
        hover:border-[#D4AF37]/50
        hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Big Number */}
      <div className="
        absolute -top-8 right-4 sm:right-6 md:right-8
        text-[50px] sm:text-[70px] md:text-[90px] font-playfair
        text-[#D4AF37]/15
        pointer-events-none
        select-none
      ">
        {number}
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
        {title}
      </h3>

      <div className="w-16 h-[2px] bg-[#D4AF37] mt-4 mb-6" />

      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function WhyJoinSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Scroll Reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-44 flex justify-center overflow-hidden"
    >

      {/* Background WHY Text */}
      <div className="
        absolute
        text-[60px]
        sm:text-[100px]
        md:text-[160px]
        lg:text-[260px]
        font-playfair
        text-white/5
        top-0
        left-1/2
        -translate-x-1/2
        pointer-events-none
        select-none
      ">
        WHY
      </div>

      <div className="relative w-full max-w-7xl text-center">

        <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          WHY JOIN <span className="text-[#D4AF37]">SYNECTICS 2026</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
          More Than an Event — It’s an Experience That Shapes Innovators
        </p>

        {/* Large Grid */}
        <div
          className={`
            mt-24
            grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16
            transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >

          <WhyCard
            number="01"
            title="Industry Exposure"
            description="Gain real-world experience through hands-on competitions, workshops, and expert-led technical sessions designed to bridge academic knowledge with industry demands."
            delay={0}
          />

          <WhyCard
            number="02"
            title="Innovation & Creativity"
            description="Participate in dynamic problem-solving environments that encourage innovative thinking and creative engineering solutions."
            delay={150}
          />

          <WhyCard
            number="03"
            title="Networking Opportunities"
            description="Connect with professionals, mentors, and peers from various engineering disciplines to expand your academic and career horizons."
            delay={300}
          />

          <WhyCard
            number="04"
            title="Career Advancement"
            description="Enhance your portfolio, improve practical skills, and gain recognition that strengthens your future job and internship prospects."
            delay={450}
          />

        </div>
      </div>
    </section>
  );
}
