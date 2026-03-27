"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      />

      {/* Dark + greenish overlay (important for same look) */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-2xl">
          
          {/* Small Text */}
          <p className="text-white/80 italic text-lg sm:text-xl mb-3">
            Welcome to
          </p>

          {/* Big Heading */}
          <h1 className="text-white font-serif font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8">
            Gautam Valley Public School
          </h1>

          {/* Button */}
          <Link
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-sm shadow-lg transition"
          >
            Take A Tour
          </Link>
        </div>
      </div>
    </section>
  );
}