import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Users, Activity, CheckCircle, Clock } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  // Mock data for the Live Attendance table
  const mockAttendance = [
    { name: "John Doe", role: "Frontend Dev", timeIn: "08:45", status: "ON_TIME", color: "text-green-400 bg-green-500/10 border-green-500/20" },
    { name: "Jane Smith", role: "Backend Dev", timeIn: "09:15", status: "LATE", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
    { name: "Bob Wilson", role: "Designer", timeIn: "-", status: "ABSENT", color: "text-red-400 bg-red-500/10 border-red-500/20" },
    { name: "Alice Brown", role: "Marketing", timeIn: "08:55", status: "ON_TIME", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          ภาพรวมผู้บริหาร (CEO & Admin)
        </h1>
        <p className="text-slate-400">สรุปข้อมูลการเข้างานและภาพรวมทีมแบบ Real-time</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "พนักงานทั้งหมด", value: "45", icon: Users, color: "text-blue-400" },
          { label: "เข้างานแล้ว", value: "42", icon: CheckCircle, color: "text-[#d4ff00]" },
          { label: "มาสาย", value: "2", icon: Clock, color: "text-yellow-400" },
          { label: "ลางาน/ขาด", value: "1", icon: Activity, color: "text-red-400" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-400">{stat.label}</span>
              <stat.icon className={`size-5 ${stat.color}`} />
            </div>
            <span className="text-4xl font-bold text-white tabular-nums">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Live Attendance Table */}
      <div className="glass-card rounded-3xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <div className="size-2 rounded-full bg-red-500 animate-pulse" />
            Live Attendance วันนี้
          </h2>
          <button className="text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
            ดูทั้งหมด
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-sm text-slate-400">
                <th className="pb-4 font-medium px-4">พนักงาน</th>
                <th className="pb-4 font-medium px-4">ตำแหน่ง</th>
                <th className="pb-4 font-medium px-4">เวลาเข้างาน</th>
                <th className="pb-4 font-medium px-4">สถานะ</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {mockAttendance.map((record, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{record.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-white">{record.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-400">{record.role}</td>
                  <td className="py-4 px-4 font-mono">{record.timeIn}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${record.color}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
