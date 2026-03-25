"use client";
import { useState } from "react";

export default function CourseSearch() {
  const [form, setForm] = useState({
    keywords: "",
    courseId: "",
    department: "",
    level: "",
    instructor: "",
    semester: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683135218463-12fd419b0b85?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBzdHVkeXxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1f4c]/90"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-white text-[34px] font-extrabold mb-12">
          Search For Courses
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Input */}
          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            value={form.keywords}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-white placeholder-gray-400 px-5 rounded-md outline-none"
          />

          <input
            type="text"
            name="courseId"
            placeholder="Course ID"
            value={form.courseId}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-white placeholder-gray-400 px-5 rounded-md outline-none"
          />

          {/* Select */}
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-gray-300 px-5 rounded-md outline-none appearance-none"
          >
            <option value="">Department</option>
            <option>Science</option>
            <option>Arts</option>
          </select>

          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-gray-300 px-5 rounded-md outline-none appearance-none"
          >
            <option value="">Level</option>
            <option>Beginner</option>
            <option>Advanced</option>
          </select>

          <select
            name="instructor"
            value={form.instructor}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-gray-300 px-5 rounded-md outline-none appearance-none"
          >
            <option value="">Instructor</option>
            <option>John</option>
          </select>

          <select
            name="semester"
            value={form.semester}
            onChange={handleChange}
            className="h-[60px] bg-[#0f144a] text-gray-300 px-5 rounded-md outline-none appearance-none"
          >
            <option value="">Semester</option>
            <option>Fall</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-4 rounded-md text-lg transition">
            Search Courses
          </button>
        </div>

      </div>
    </section>
  );
}