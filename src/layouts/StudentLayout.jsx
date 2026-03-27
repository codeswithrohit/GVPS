"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    id: "profile",
    label: "My Profile",
    href: "/student",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="8" cy="5" r="3" />
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    id: "fees",
    label: "Fees",
    href: "/student/fees",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="4" width="12" height="9" rx="1.5" />
        <path d="M5 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M6 9h4M8 7v4" />
      </svg>
    ),
  },
  {
    id: "attendance",
    label: "Attendance",
    href: "/student/attendance",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="3" width="12" height="11" rx="1.5" />
        <path d="M5 1v4M11 1v4M2 7h12M5 10l1.5 1.5L11 9" />
      </svg>
    ),
  },
  {
    id: "grades",
    label: "Results & Grades",
    href: "/student/grades",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M3 13V7M6 13V5M9 13V9M12 13V3" />
      </svg>
    ),
  },
  {
    id: "timetable",
    label: "Timetable",
    href: "/student/timetable",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="3" width="12" height="11" rx="1.5" />
        <path d="M5 1v4M11 1v4M2 7h12M6 10h4" />
      </svg>
    ),
  },
];

export default function StudentLayout({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#1a2252] h-16 flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-white mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-sm rounded">G</div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Gautam Valley</p>
            <p className="text-gray-400 text-xs">Student Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5 opacity-70 hover:opacity-100 transition">
              <path d="M8 1a5 5 0 0 1 5 5v2l1.5 2.5h-13L3 8V6a5 5 0 0 1 5-5zM6.5 13a1.5 1.5 0 0 0 3 0" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-semibold">AR</div>
            <div className="hidden sm:block text-right">
              <p className="text-white text-xs font-medium">Aryan Rajput</p>
              <p className="text-gray-400 text-xs">Grade 10 – A</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-56 bg-[#1a2252] flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="px-4 py-5 border-b border-white/10">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Navigation</p>
          </div>
          <nav className="flex-1 py-4 overflow-y-auto">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-5 py-3 text-sm transition-all border-l-[3px] ${
                    active
                      ? "bg-red-600/20 border-red-500 text-white"
                      : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="px-5 py-5 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M11 11l3-3-3-3M14 8H6" />
              </svg>
              Log out
            </Link>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Page content */}
        <main className="flex-1 min-w-0 p-6">{children}</main>
      </div>
    </div>
  );
}
