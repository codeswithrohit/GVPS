"use client";
import { useState } from "react";
import Link from "next/link";

const quickLinks = [
  "Alumni & Donors",
  "Athletic Calendar",
  "All Kingster’s Events",
  "Partnership & Out Reach",
  "Academic Programs",
  "Tuition And Fees",
];

export default function BottomInfoSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3">

        {/* LEFT - QUICK LINKS */}
        <div
          className="relative text-white px-10 py-16"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-red-700/90"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              🔗 Quick Links
            </h3>

            <ul className="space-y-6">
              {quickLinks.map((link, i) => (
                <li key={i} className="border-b border-white/30 pb-3">
                  <Link href="#" className="text-white text-[15px] font-medium hover:opacity-80">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CENTER - NEWSLETTER */}
        <div className="bg-[#f5f5f5] text-center px-10 py-16 flex flex-col items-center justify-center">
          
          {/* Icon */}
          <div className="w-16 h-16 border-2 border-red-600 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Subscribe To Newsletter
          </h3>

          <p className="text-gray-500 text-sm mb-6">
            Get updates to news & events
          </p>

          <p className="text-gray-500 text-sm max-w-md mb-8">
            The Campaign for the Kingster University is the largest fundraising
            campaign in history. With a historic
          </p>

          {/* Input */}
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md bg-gray-200 px-5 py-4 text-sm outline-none mb-4"
          />

          {/* Button */}
          <button className="w-full max-w-md bg-red-600 text-white py-4 font-semibold hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>

        {/* RIGHT - DONATION */}
        <div className="px-10 py-16">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80"
            alt="Donation"
            className="w-full h-[200px] object-cover mb-6"
          />

          <h3 className="text-xl font-bold text-[#1e2a39] mb-3">
            Donation helps us
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            The Campaign for the Kingster University is the{" "}
            <span className="font-semibold text-gray-700">
              largest fundraising campaign in history.
            </span>{" "}
            With a historic $1 billion goal, the campaign is expanding global
            leadership capacity.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition"
          >
            ❤️ Become a donor
          </Link>
        </div>

      </div>
    </section>
  );
}