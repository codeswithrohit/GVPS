"use client";
import Link from "next/link";

export default function AdmissionBanner() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664372145537-bd55c09328fb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHN0dWR5fGVufDB8fDB8fHww')",
        }}
      />

      {/* RIGHT SIDE BLUE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#262a5b] via-[#262a5bd9] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-end">
          
          <div className="max-w-lg text-left">
            
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Apply for Admission
            </h2>

            <p className="text-white/80 text-lg mb-6">
              Fall 2019 applications are now open
            </p>

            <p className="text-white/70 leading-7 text-[15px] mb-8">
              We don't just give students an education and experiences that set
              them up for success in a career. We help them succeed in their
              career—to discover a field they’re passionate about and dare to
              lead it.
            </p>

            <Link
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 text-lg rounded-md transition"
            >
              Apply Now
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
}