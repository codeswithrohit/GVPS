import Link from "next/link";

const footerLinks = {
  "Our Campus": [
    "Academic",
    "Planning & Administration",
    "Campus Safety",
    "Office of the Chancellor",
    "Facility Services",
    "Human Resources",
  ],
  "Campus Life": [
    "Accessibility",
    "Financial Aid",
    "Food Services",
    "Housing",
    "Information Technologies",
    "Student Life",
  ],
  Academics: [
    "Canvas",
    "Catalyst",
    "Library",
    "Time Schedule",
    "Apply For Admissions",
    "Pay My Tuition",
  ],
};

export default function Footer() {
  return (
    <footer className="w-full">

      {/* TOP BAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        
        {/* Left (Blue) */}
        <div className="lg:col-span-2 bg-[#2c2f66] text-white px-6 py-4 flex items-center justify-between">
          <p className="text-sm">
            RT <span className="text-red-400">@placeitapp</span>: Making a{" "}
            <span className="text-red-400">#YouTube</span> banner for your
            channel is easy with Placeit’s{" "}
            <span className="text-red-400">#bannermaker</span>!
          </p>
          <div className="hidden sm:flex gap-3 text-xl">
            ← →
          </div>
        </div>

        {/* Right (Red) */}
        <div className="bg-red-600 flex items-center justify-center text-white font-bold text-lg">
          Apply To Kingster
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#111111] text-white px-6 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">
                K
              </div>
              <h2 className="text-lg font-bold">
                Kingster <span className="text-gray-400 font-normal">HighSchool</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-7">
              Box 35300 <br />
              1810 Campus Way NE <br />
              Bothell, WA 98011-8246
            </p>

            <p className="text-gray-400 text-sm mt-4">
              +1-2534-4456-345 <br />
              admin@kingsteruni.edu
            </p>

            {/* Red Divider */}
            <div className="w-16 h-[2px] bg-red-600 mt-6"></div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                {title}
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-red-600"></span>
              </h3>

              <ul className="space-y-3 mt-6">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1a1a1a] text-gray-400 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          
          <p className="text-sm">
            Copyright All Right Reserved 2026, GoodLayers
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 sm:mt-0">
            {["f", "in", "s", "x", "ig"].map((icon) => (
              <span
                key={icon}
                className="text-red-600 text-sm cursor-pointer hover:opacity-80"
              >
                {icon}
              </span>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}