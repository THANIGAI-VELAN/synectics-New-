export default function NavItem({ label, href }) {
  return (
    <a 
      href={href} 
      className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-[#D4AF37] group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full opacity-80" />
    </a>
  );
}
