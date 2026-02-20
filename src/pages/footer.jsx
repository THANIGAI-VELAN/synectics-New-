export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 mt-40">
 <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">

        {/* College Logo */}


        {/* Synectics Title */}
        <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-white">
          Synectics’26
        </h3>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4">
          Synectics’26 is a National Level Technical Symposium organized by the
          Student Association of Nandha Engineering College, bringing
          innovation, technology, and engineering excellence together.
        </p>

        {/* Divider */}
        <div className="mt-12 w-24 h-[2px] bg-[#D4AF37] mx-auto" />

        {/* Address */}
        <p className="mt-8 text-sm text-gray-500">
          Erode - Perundurai Main Road, Vaikkaalmedu, Erode - 638 052.
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs text-gray-600">
          © Thanigai velan, Pradeepa , Tamil Muhilan, Dev Bharath. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
