"use client";
import Link from "next/link";

const news = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Professor Albert joint research on mobile money in Tanzania",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200",
    title: "A Global MBA for the next generation of business leaders",
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200",
    title: "Professor Tom comments on voluntary recalls by snack brands",
  },
  {
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200",
    title: "Professor Alexa is interviewed about Twitter’s valuation",
  },
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=200",
    title: "Kingster Public Safety Survey open through Nov. 30",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200",
    title: "Audio Post Format",
  },
];

export default function VideoNewsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT: VIDEO */}
        <div>
          <h2 className="text-2xl font-bold text-[#1c2143] pb-3 border-b-2 border-red-600 w-full">
            School Video Tour
          </h2>

          <div className="mt-8">
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200"
                className="w-full h-[260px] object-cover"
              />

              {/* RED OVERLAY */}
              <div className="absolute inset-0 bg-red-700/60 flex items-center justify-center">

                {/* PLAY BUTTON */}
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

              </div>
            </div>

            <p className="mt-6 text-gray-500 leading-7 text-[15px]">
              Take a tour in Kingster and you will find the best school in the state.
              The video will take you to every places in this school.
            </p>
          </div>
        </div>

        {/* RIGHT: NEWS */}
        <div>
          <h2 className="text-2xl font-bold text-[#1c2143] pb-3 border-b-2 border-red-600 w-full">
            School News & Updates
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {news.map((item, i) => (
              <div key={i} className="flex gap-4">
                
                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* CONTENT */}
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    June 6, 2016 / By James Smith
                  </p>

                  <Link
                    href="#"
                    className="text-[#1c2143] font-semibold leading-snug hover:text-red-600 transition"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="#"
              className="text-red-600 font-semibold hover:underline"
            >
              Read The Blog →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}