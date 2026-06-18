"use client";
import { useState } from "react";

export default function WeeklyReportPage() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("ส่งรายงานประจำสัปดาห์เรียบร้อยแล้ว");
    setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-semibold mb-6">ส่งรายงานประจำสัปดาห์ (Weekly Report)</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              รายละเอียดงานที่ทำสำเร็จ และปัญหาที่พบ
            </label>
            <textarea
              className="w-full min-h-[200px] p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="สรุปงานของสัปดาห์นี้..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              ส่งรายงานให้หัวหน้า
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
