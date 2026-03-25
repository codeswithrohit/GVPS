"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menu = [
    "Home",
    "Academic",
    "Pages",
    "Admissions",
    "Courses",
    "Athletics",
    "School Life",
  ];

  return (
    <header className="w-full bg-[#1c2143] text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold rounded-sm">
            K
          </div>
          <div className="text-lg font-semibold tracking-wide">
            Kingster <span className="font-light">HighSchool</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {menu.map((item) => (
            <div key={item} className="relative">
              <Link
                href="#"
                onClick={() => setActive(item)}
                className={`transition ${
                  active === item ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </Link>

              {/* Active underline */}
              {active === item && (
                <div className="absolute left-0 -bottom-3 w-full h-[2px] bg-red-600"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Search */}
        <div className="flex items-center">
          <button className="text-gray-300 hover:text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}