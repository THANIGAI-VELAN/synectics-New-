import { events } from "../data/events";
import { Building, Calendar, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="min-h-screen  text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="
        absolute
        text-[180px]
        md:text-[240px]
        font-playfair
        text-white/5
        -top-10
        left-1/2
        -translate-x-1/2
        pointer-events-none
        select-none
      ">
        ABOUT
      </div>

        {events.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
      <div
        className={`relative w-full md:w-[85%] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 mt-20 transition-all duration-1000 ease-out hover:-translate-y-3 hover:border-[#D4AF37]/40`}
        style={{
          clipPath: isLeft
            ? "polygon(0 0, 96% 0, 100% 14%, 100% 100%, 0 100%)"
            : "polygon(0 14%, 4% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="md:w-3/4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            {item.department.replace(item.highlight, "")}
            <span className="text-[#D4AF37]">
              {item.highlight}
            </span>
          </h2>

          <h3 className="mt-3 text-xl md:text-2xl font-semibold text-[#D4AF37] tracking-wide">
            {item.event.toUpperCase()}
          </h3>

          <div className="w-24 h-[2px] bg-[#D4AF37] mt-5 mb-8" />

          <ul className="space-y-3 text-gray-300 font-light text-lg">
            <li className="flex items-center gap-3">
              <Building />
              <strong className="text-white">Venue:</strong>
              {item.venue}
            </li>

            <li className="flex items-center gap-3">
              <Calendar />
              <strong className="text-white">Date:</strong>
              {item.date}
            </li>

            <li className="flex items-center gap-3">
              <Clock />
              <strong className="text-white">Time:</strong>
              {item.time}
            </li>
          </ul>
        </div>
      </div>
    </div>
          );
        })}
      </div>
    </div>
  );
}