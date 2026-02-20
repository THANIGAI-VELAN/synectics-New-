import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40 flex justify-center overflow-hidden"
    >

      {/* Background Text */}
      <div className="
        absolute
        text-[60px]
        sm:text-[100px]
        md:text-[180px]
        lg:text-[240px]
        font-playfair
        text-white/5
        top-10
        left-1/2
        -translate-x-1/2
        pointer-events-none
        select-none
      ">
        CONTACT
      </div>

      <div
        className={`
          relative w-full max-w-7xl
          transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >

        <h2 className="text-center font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          Connect With <span className="text-[#D4AF37]">Us</span>
        </h2>

        {/* Social Media */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-gray-300 px-4">

          {["Instagram", "LinkedIn", "YouTube", "Email"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="
                text-xs sm:text-sm md:text-base lg:text-lg font-medium
                transition-all duration-300
                hover:text-[#D4AF37]
                hover:-translate-y-1
              "
            >
              {platform}
            </a>
          ))}

        </div>

        {/* Google Map */}
        <div className="
          mt-12 sm:mt-16 md:mt-20
          backdrop-blur-2xl bg-white/5
          border border-white/10
          rounded-2xl sm:rounded-3xl
          overflow-hidden
          transition-all duration-500
          hover:border-[#D4AF37]/40
          px-4 sm:px-0
        ">
          <iframe
            src="https://www.google.com/maps?q=Erode%20-%20Perundurai%20Main%20Road,%20Vaikkaalmedu,%20Erode%20-%20638%20052&output=embed"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}
