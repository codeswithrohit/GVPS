"use client";
import { useState } from "react";
import Link from "next/link";

const STEPS = ["Personal Info", "Academic Details", "Parent / Guardian", "Documents", "Review & Submit"];

const StepIndicator = ({ current }) => (
  <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
    {STEPS.map((step, i) => (
      <div key={step} className="flex items-center shrink-0">
        <div className="flex flex-col items-center gap-1">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
            i < current ? "bg-red-700 border-red-700 text-white"
            : i === current ? "bg-white border-red-700 text-red-700"
            : "bg-white border-gray-300 text-gray-400"
          }`}>
            {i < current ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            ) : i + 1}
          </div>
          <span className={`text-xs font-medium hidden sm:block ${i === current ? "text-red-700" : "text-gray-400"}`}>
            {step}
          </span>
        </div>
        {i < STEPS.length - 1 && (
          <div className={`h-0.5 w-10 sm:w-16 mx-1 transition-all duration-300 ${i < current ? "bg-red-700" : "bg-gray-200"}`} />
        )}
      </div>
    ))}
  </div>
);

const Field = ({ label, type = "text", placeholder, required, options, hint }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    {options ? (
      <select className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
        <option value="">Select {label}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    ) : type === "textarea" ? (
      <textarea rows={3} placeholder={placeholder} className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" />
    ) : (
      <input type={type} placeholder={placeholder} className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
    )}
    {hint && <p className="text-gray-400 text-xs">{hint}</p>}
  </div>
);

// ── Step panels ──────────────────────────────────────────────
function Step0() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2">Personal Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name" placeholder="e.g. Rahul" required />
        <Field label="Last Name" placeholder="e.g. Kumar" required />
        <Field label="Date of Birth" type="date" required />
        <Field label="Gender" options={["Male", "Female", "Other"]} required />
        <Field label="Nationality" options={["Indian", "NRI", "Foreign National"]} required />
        <Field label="Religion" options={["Hindu", "Muslim", "Christian", "Sikh", "Other"]} />
        <Field label="Category" options={["General", "OBC", "SC", "ST", "EWS"]} required />
        <Field label="Aadhar Number" placeholder="XXXX-XXXX-XXXX" hint="12-digit Aadhar card number" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
        <Field label="Email Address" type="email" placeholder="student@email.com" required />
      </div>
      <Field label="Permanent Address" type="textarea" placeholder="Full address including city, state, PIN" required />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Field label="City" placeholder="City" required />
        <Field label="State" options={["Delhi", "UP", "Haryana", "Maharashtra", "Other"]} required />
        <Field label="PIN Code" placeholder="110001" required />
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2">Academic Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Applying for Class" options={["Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"]} required />
        <Field label="Stream (for XI/XII)" options={["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Not Applicable"]} />
        <Field label="Previous School Name" placeholder="School name" required />
        <Field label="Board" options={["CBSE", "ICSE", "State Board", "IB", "IGCSE"]} required />
        <Field label="Last Class Passed" options={["V", "VI", "VII", "VIII", "IX", "X", "XI"]} required />
        <Field label="Percentage / CGPA" placeholder="e.g. 85% or 8.5 CGPA" required />
        <Field label="Academic Year" options={["2023-24", "2022-23", "2021-22"]} required />
        <Field label="Reason for Transfer" options={["Relocation", "Better Education", "Other"]} />
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-800 text-sm font-medium flex items-start gap-2">
          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Admission is subject to seat availability and an entrance test. You will be contacted within 7 working days.
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2">Parent / Guardian Information</h3>
      {/* Father */}
      <div>
        <p className="text-red-700 font-semibold text-sm mb-3 uppercase tracking-wider">Father's Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Father's Name" placeholder="Full name" required />
          <Field label="Occupation" placeholder="e.g. Engineer" />
          <Field label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          <Field label="Email" type="email" placeholder="father@email.com" />
          <Field label="Annual Income" options={["< ₹2 Lakh", "₹2–5 Lakh", "₹5–10 Lakh", "₹10–20 Lakh", "> ₹20 Lakh"]} />
          <Field label="Education Qualification" options={["High School", "Graduate", "Post Graduate", "Doctorate", "Other"]} />
        </div>
      </div>
      {/* Mother */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-red-700 font-semibold text-sm mb-3 uppercase tracking-wider">Mother's Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Mother's Name" placeholder="Full name" required />
          <Field label="Occupation" placeholder="e.g. Teacher" />
          <Field label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          <Field label="Email" type="email" placeholder="mother@email.com" />
        </div>
      </div>
      {/* Guardian */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-gray-500 font-semibold text-sm mb-3 uppercase tracking-wider">Local Guardian (if different)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Guardian Name" placeholder="Full name" />
          <Field label="Relation" options={["Uncle", "Aunt", "Grandparent", "Sibling", "Other"]} />
          <Field label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" />
          <Field label="Address" placeholder="Guardian's address" />
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const docs = [
    { name: "Birth Certificate", required: true },
    { name: "Aadhar Card (Student)", required: true },
    { name: "Previous School Transfer Certificate", required: true },
    { name: "Mark Sheet / Report Card", required: true },
    { name: "Passport Size Photos (4 copies)", required: true },
    { name: "Caste Certificate (if applicable)", required: false },
    { name: "Medical Certificate", required: false },
    { name: "Migration Certificate (if applicable)", required: false },
  ];

  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2">Document Upload</h3>
      <p className="text-gray-500 text-sm">Upload clear scanned copies. Accepted formats: PDF, JPG, PNG. Max size: 2MB each.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {docs.map((doc) => (
          <div key={doc.name} className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-red-400 hover:bg-red-50/30 transition-colors group cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-gray-100 group-hover:bg-red-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800">
                  {doc.name}
                  {doc.required && <span className="text-red-600 ml-1">*</span>}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">Click to upload or drag & drop</p>
                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step4() {
  const rows = [
    ["Student Name", "Rahul Kumar"],
    ["Date of Birth", "15 March 2008"],
    ["Gender", "Male"],
    ["Applying for Class", "Class XI – Science (PCM)"],
    ["Previous School", "Delhi Public School, Rohini"],
    ["Last Percentage", "87.4%"],
    ["Father's Name", "Suresh Kumar"],
    ["Mother's Name", "Priya Kumar"],
    ["Contact Number", "+91 98765 43210"],
    ["Email", "rahul@email.com"],
  ];

  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2">Review Your Application</h3>
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([key, val], i) => (
              <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-3 text-gray-500 font-medium w-48">{key}</td>
                <td className="px-5 py-3 text-gray-900 font-semibold">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex gap-3">
        <input type="checkbox" id="agree" className="mt-0.5 accent-red-700 w-4 h-4 shrink-0" />
        <label htmlFor="agree" className="text-sm text-gray-700">
          I hereby declare that all the information provided above is true and correct to the best of my knowledge. I agree to the <span className="text-red-700 underline cursor-pointer">Terms & Conditions</span> of Kingster HighSchool.
        </label>
      </div>
    </div>
  );
}

const STEP_COMPONENTS = [Step0, Step1, Step2, Step3, Step4];

export default function AdmissionPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const StepComponent = STEP_COMPONENTS[step];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 text-sm mb-2">Your application ID is</p>
          <p className="text-red-700 font-extrabold text-2xl mb-4">KHS-2024-00847</p>
          <p className="text-gray-500 text-sm mb-8">
            You will receive a confirmation email within 24 hours. Our admissions team will contact you within 7 working days.
          </p>
          <Link href="/" className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-10 sm:py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">K</span>
            </div>
            <span className="font-bold text-lg">Kingster HighSchool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Admission Form</h1>
          <p className="text-gray-400 text-sm sm:text-base">Academic Year 2024–25 · Applications Open</p>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-3xl mx-auto px-4 -mt-6 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <StepIndicator current={step} />
          <StepComponent />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Back
            </button>
            <span className="text-gray-400 text-xs hidden sm:block">Step {step + 1} of {STEPS.length}</span>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="px-6 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-colors"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
              >
                Submit Application ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
