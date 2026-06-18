"use client";
import { useState } from "react";

export default function AttendancePage() {
  const [status, setStatus] = useState<"IDLE" | "CHECKED_IN" | "CHECKED_OUT">("IDLE");

  const handleCheckIn = async () => {
    setStatus("CHECKED_IN");
    alert("ลงเวลาเข้างานสำเร็จ");
  };

  const handleCheckOut = async () => {
    setStatus("CHECKED_OUT");
    alert("ลงเวลาออกงานสำเร็จ");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white border rounded-lg shadow-sm p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">ลงเวลาทำงานวันนี้</h2>
        <div className="flex flex-col gap-4">
          <button 
            onClick={handleCheckIn} 
            disabled={status !== "IDLE"}
            className="w-full text-lg h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          >
            Check-in (เช้า)
          </button>
          <button 
            onClick={handleCheckOut} 
            disabled={status !== "CHECKED_IN"}
            className="w-full text-lg h-16 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-md disabled:opacity-50"
          >
            Check-out (เย็น)
          </button>
        </div>
      </div>
    </div>
  );
}
