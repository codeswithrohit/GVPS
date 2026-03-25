import Link from "next/link";

const events = [
  {
    day: "17",
    month: "DEC",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    title: "Fintech & Key Investment Conference",
    time: "1:00 pm – 1:00 pm",
    location: "Kingster Grand Hall",
    href: "#",
  },
  {
    day: "04",
    month: "NOV",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    title: "Sport Management Information Webinar",
    time: "1:00 pm – 1:00 pm",
    location: "Kingster Grand Hall",
    href: "#",
  },
  {
    day: "11",
    month: "SEP",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Planning and Facilitating Effective Meetings",
    time: "8:00 am – 8:00 am",
    location: "Kingster Grand Hall",
    href: "#",
  },
];

export default function EventsSection() {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-[26px] font-extrabold text-[#1e2a39] mb-10 relative inline-block">
          Kingster Events
          <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-red-700"></span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="group">
              
              {/* Image */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex gap-4 mt-5">
                
                {/* Date */}
                <div className="text-center min-w-[50px]">
                  <p className="text-red-700 text-[32px] font-extrabold leading-none">
                    {event.day}
                  </p>
                  <p className="text-[12px] text-gray-500 font-semibold tracking-wider mt-1">
                    {event.month}
                  </p>
                </div>

                {/* Details */}
                <div>
                  <Link
                    href={event.href}
                    className="text-[17px] font-bold text-[#1e2a39] leading-snug hover:text-red-700 transition"
                  >
                    {event.title}
                  </Link>

                  <div className="mt-2 space-y-1">
                    
                    {/* Time */}
                    <div className="flex items-center gap-2 text-gray-400 text-[13px]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                      </svg>
                      {event.time}
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-red-700 text-[13px]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {event.location}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10">
          <Link
            href="#"
            className="text-red-700 font-semibold text-sm hover:text-red-900 transition"
          >
            View All Events →
          </Link>
        </div>

      </div>
    </section>
  );
}