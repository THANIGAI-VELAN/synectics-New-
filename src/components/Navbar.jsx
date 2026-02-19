import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const NavLink = ({ label, sectionId }) => (
    <button
      onClick={() => scrollToSection(sectionId)}
      className="relative px-4 py-2 text-sm tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 group bg-none border-none cursor-pointer"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
    </button>
  );

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      
      {/* Glass Container */}
      <div
        className={`
          w-full max-w-7xl
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          shadow-[0_0_40px_rgba(212,175,55,0.05)]
          transition-all duration-500
          ${isOpen ? "rounded-3xl" : "rounded-full"}
        `}
      >
        <div className="px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="font-playfair text-2xl font-bold tracking-wider cursor-pointer group">
              <span className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                SYNECTICS
              </span>
              <span className="text-[#D4AF37]">2K26</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink label="VENUES" sectionId="venues" />
              <NavLink label="ROADMAP" sectionId="roadmap" />
              <NavLink label="CONTACT" sectionId="contact" />
              <NavLink label="EMERGENCY CONTACT" sectionId="contact" />
            </nav>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-[#D4AF37] transition-transform active:scale-90"
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-[2px] bg-current"></span>
                  <span className="block w-6 h-[2px] bg-current"></span>
                  <span className="block w-6 h-[2px] bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col items-center space-y-4 pt-4">
            {[
              { label: "VENUES", id: "venues" },
              { label: "ROADMAP", id: "roadmap" },
              { label: "CONTACT", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-[#D4AF37] text-sm tracking-widest transition-colors bg-none border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
}
