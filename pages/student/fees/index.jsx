"use client";
import { useState } from "react";

const termFees = [
  { term: "Term 1", period: "Apr – Jun 2024", amount: 18000, dueDate: "5 Apr 2024", paidOn: "3 Apr 2024", status: "paid" },
  { term: "Term 2", period: "Jul – Sep 2024", amount: 18000, dueDate: "5 Jul 2024", paidOn: "1 Jul 2024", status: "paid" },
  { term: "Term 3", period: "Oct – Dec 2024", amount: 18000, dueDate: "5 Oct 2024", paidOn: "4 Oct 2024", status: "paid" },
  { term: "Term 4", period: "Jan – Mar 2025", amount: 18000, dueDate: "10 Jan 2025", paidOn: "—", status: "due" },
];

const otherCharges = [
  { desc: "Annual Sports Fee", amount: 2500, status: "paid" },
  { desc: "Lab & Library Fee", amount: 1500, status: "paid" },
  { desc: "School Trip – Agra", amount: 3200, status: "due" },
  { desc: "Art & Craft Material", amount: 800, status: "due" },
];

const history = [
  { date: "4 Oct 2024", desc: "Term 3 Tuition Fee", amount: 18000, mode: "UPI", ref: "GV-T3-0341" },
  { date: "1 Jul 2024", desc: "Term 2 Tuition Fee", amount: 18000, mode: "Net Banking", ref: "GV-T2-0341" },
  { date: "10 Jun 2024", desc: "Annual Sports Fee", amount: 2500, mode: "UPI", ref: "GV-SP-0341" },
  { date: "3 Apr 2024", desc: "Term 1 Tuition Fee", amount: 18000, mode: "Cheque", ref: "GV-T1-0341" },
  { date: "3 Apr 2024", desc: "Lab & Library Fee", amount: 1500, mode: "Cheque", ref: "GV-LL-0341" },
];

const statusStyles = {
  paid: "bg-green-100 text-green-800",
  due: "bg-red-100 text-red-800",
  partial: "bg-yellow-100 text-yellow-800",
};

function StatusPill({ status }) {
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusStyles[status]}`}>
      {status === "paid" ? "✓ Paid" : "⚠ Due"}
    </span>
  );
}

function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-[#1a2252] uppercase tracking-widest">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

export default function FeesPage() {
  const [showModal, setShowModal] = useState(false);

  const totalDue = termFees.filter(f => f.status === "due").reduce((a, f) => a + f.amount, 0)
    + otherCharges.filter(c => c.status === "due").reduce((a, c) => a + c.amount, 0);

  const totalPaid = termFees.filter(f => f.status === "paid").reduce((a, f) => a + f.amount, 0)
    + otherCharges.filter(c => c.status === "paid").reduce((a, c) => a + c.amount, 0);

  const totalAnnual = 72000;
  const paidPct = Math.round((totalPaid / totalAnnual) * 100);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1a2252]">Fees Management</h1>
          <p className="text-xs text-gray-400 mt-0.5">Academic Year 2024–25</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-5 py-2.5 rounded transition"
        >
          Pay Now
        </button>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3">
        <span className="text-red-500 text-lg mt-0.5">⚠</span>
        <div>
          <p className="text-sm font-semibold text-red-700">Payment Due</p>
          <p className="text-xs text-red-600 mt-0.5">
            Term 4 fee of <strong>₹18,000</strong> and other charges totalling <strong>₹4,000</strong> are due by <strong>10 Jan 2025</strong>.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Annual Fee", value: `₹${totalAnnual.toLocaleString("en-IN")}`, sub: "FY 2024–25", color: "text-[#1a2252]" },
          { label: "Total Paid", value: `₹${totalPaid.toLocaleString("en-IN")}`, sub: "3 terms + charges", color: "text-green-700" },
          { label: "Amount Due", value: `₹${totalDue.toLocaleString("en-IN")}`, sub: "Due: 10 Jan 2025", color: "text-red-600" },
          { label: "Status", value: "Partial", sub: `${paidPct}% cleared`, color: "text-yellow-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Fee Payment Progress</span>
          <span className="font-bold text-[#1a2252]">{paidPct}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1a2252] rounded-full transition-all duration-700"
            style={{ width: `${paidPct}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          ₹{totalPaid.toLocaleString("en-IN")} paid of ₹{totalAnnual.toLocaleString("en-IN")} annual fee
        </p>
      </div>

      {/* Term Fee Table */}
      <SectionCard title="Term-wise Fee Ledger">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {["Term", "Period", "Amount", "Due Date", "Paid On", "Status"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 py-3 first:rounded-l-lg last:rounded-r-lg">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {termFees.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition last:border-0">
                  <td className="px-4 py-3 font-semibold text-[#1a2252]">{f.term}</td>
                  <td className="px-4 py-3 text-gray-500">{f.period}</td>
                  <td className="px-4 py-3 font-semibold">₹{f.amount.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3 text-gray-500">{f.dueDate}</td>
                  <td className="px-4 py-3 text-gray-500">{f.paidOn}</td>
                  <td className="px-4 py-3"><StatusPill status={f.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Other Charges */}
      <SectionCard title="Other Charges">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {["Description", "Amount", "Status", "Action"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 py-3 first:rounded-l-lg last:rounded-r-lg">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {otherCharges.map((c, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition last:border-0">
                  <td className="px-4 py-3 font-medium text-gray-800">{c.desc}</td>
                  <td className="px-4 py-3 font-semibold">₹{c.amount.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3"><StatusPill status={c.status} /></td>
                  <td className="px-4 py-3">
                    {c.status === "due" && (
                      <button
                        onClick={() => setShowModal(true)}
                        className="text-xs text-red-600 font-semibold hover:underline"
                      >
                        Pay →
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Total due: <span className="font-bold text-red-600">₹{totalDue.toLocaleString("en-IN")}</span>
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#1a2252] hover:bg-[#232d6a] text-white text-sm font-semibold px-6 py-2.5 rounded transition"
          >
            Pay All Dues — ₹{totalDue.toLocaleString("en-IN")}
          </button>
        </div>
      </SectionCard>

      {/* Payment History */}
      <SectionCard
        title="Payment History"
        action={
          <button className="text-xs text-[#1a2252] font-semibold border border-[#1a2252] px-3 py-1.5 rounded hover:bg-[#1a2252] hover:text-white transition">
            Download PDF
          </button>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {["Date", "Description", "Amount", "Mode", "Reference"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 py-3 first:rounded-l-lg last:rounded-r-lg">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition last:border-0">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{h.date}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{h.desc}</td>
                  <td className="px-4 py-3 font-semibold text-green-700">₹{h.amount.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3 text-gray-500">{h.mode}</td>
                  <td className="px-4 py-3 text-gray-400 font-mono text-xs">{h.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-7">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#1a2252]">Pay Fees Online</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-700 text-xl">✕</button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <div className="flex justify-between mb-1"><span className="text-gray-500">Term 4 Fee</span><span className="font-semibold">₹18,000</span></div>
                <div className="flex justify-between mb-1"><span className="text-gray-500">School Trip</span><span className="font-semibold">₹3,200</span></div>
                <div className="flex justify-between mb-1"><span className="text-gray-500">Art Material</span><span className="font-semibold">₹800</span></div>
                <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                  <span className="font-bold text-[#1a2252]">Total Due</span>
                  <span className="font-bold text-red-600 text-base">₹22,000</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1.5">Payment Mode</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a2252]">
                  <option>UPI</option>
                  <option>Net Banking</option>
                  <option>Debit / Credit Card</option>
                  <option>Cheque</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1.5">UPI ID</label>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a2252]"
                />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-semibold text-sm transition">
                Pay ₹22,000 Securely
              </button>
              <p className="text-xs text-center text-gray-400">🔒 Secured by Razorpay Payment Gateway</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
