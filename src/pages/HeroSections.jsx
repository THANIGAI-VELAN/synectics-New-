import { useEffect, useState, useRef } from "react";

import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0,
    });

    const [loaded, setLoaded] = useState(false);
    const parallaxRef = useRef(null);

    const scrollToRoadmap = () => {
        const roadmapSection = document.getElementById("roadmap");
        if (roadmapSection) {
            roadmapSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const offset = window.scrollY * 0.15;
                parallaxRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            let targetDate = new Date(currentYear, 1, 21);

            if (now > targetDate) {
                targetDate = new Date(currentYear + 1, 1, 21);
            }

            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">

            {/* Hero Content */}
            <div
                className={`transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
            >
                <div className="inline-block mb-4 px-4 py-2 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-sm">
                    <span className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.25em] uppercase">
25 years of excellence
                    </span>
                </div>


                <BlurText
                    text="GARUDA'26"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="font-playfair text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#D4AF37] leading-[0.9] tracking-tight mb-8"
                />
              
<ShinyText
  text="Innovating the future through code, design, and technology.
        Join the most prestigious gathering of tech minds on February 21st ."
  speed={2}
   className="mt-6 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 font-light"
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

                    <button 
                        onClick={scrollToRoadmap}
                        className="px-8 py-3 bg-[#D4AF37] text-black font-semibold tracking-wide rounded-sm
            shadow-[0_0_20px_rgba(212,175,55,0.3)]
            hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]
            hover:bg-[#F4CF57]
            transition-all duration-300 transform hover:-translate-y-1">

                       ROADMAP
                    </button>

 <a
  href="/event_brochure.jpeg"
  download="Event_Brochure.jpeg"
  className="px-8 py-3 border border-[#A9A9A9] text-gray-300 font-semibold tracking-wide rounded-sm
  hover:border-[#D4AF37]
  hover:text-[#D4AF37]
  hover:bg-[#D4AF37]/5
  transition-all duration-300 inline-block"
>
  DOWNLOAD BROCHURE
</a>


                </div>
            </div>

            {/* Countdown */}
          
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
                <span className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
                    Scroll Down
                </span>

                <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center relative">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

        </section>
    );
}
