"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); 

  const menu = [
    { name: "Home", path: "/" },
    { name: "Academic", path: "/nav-pages/academic" },
    { name: "Admissions", path: "/nav-pages/admissions" },
    { name: "Courses", path: "/nav-pages/courses" },
    { name: "Athletics", path: "/nav-pages/athletics" },
    { name: "School Life", path: "/nav-pages/school-life" },
    { name: "Student Login", path: "/student" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1c2143]/95 to-[#232a5c]/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="text-lg font-semibold tracking-wide text-white">
            Gautam Valley{" "}
            <span className="font-light text-gray-300">Public School</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {menu.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.path}
                onClick={() => setActive(item.name)}
                className={`transition duration-300 ${
                  active === item.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>

              {active === item.name && (
                <div className="absolute left-0 -bottom-3 w-full h-[2px] bg-red-500 rounded-full"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="text-gray-300 hover:text-white transition hidden lg:block">
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1c2143] px-6 py-4 space-y-4 text-sm">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name} 
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
