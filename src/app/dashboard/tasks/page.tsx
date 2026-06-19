import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Plus, ListFilter, CheckCircle2, Circle, MoreVertical, Calendar } from "lucide-react";

export default async function TasksPage() {
  const session = await getServerSession(authOptions);

  const mockTasks = [
    { id: 1, title: "สรุป Requirement ระบบลางาน", status: "TODO", priority: "High", date: "วันนี้", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    { id: 2, title: "ออกแบบหน้า Dashboard ผู้บริหาร", status: "DOING", priority: "Medium", date: "พรุ่งนี้", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    { id: 3, title: "แก้บั๊ก Login ใช้งานไม่ได้", status: "DONE", priority: "High", date: "เมื่อวาน", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    { id: 4, title: "เตรียมสไลด์สำหรับประชุม Townhall", status: "TODO", priority: "Low", date: "ศุกร์นี้", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            งานของฉัน (My Tasks)
          </h1>
          <p className="text-slate-400">จัดการและติดตามงานที่ได้รับมอบหมายทั้งหมด</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors w-full sm:w-auto">
            <ListFilter className="size-4" />
            ตัวกรอง
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4ff00] to-[#b6e600] hover:from-[#b6e600] hover:to-[#99cc00] text-black font-semibold shadow-[0_0_15px_rgba(212,255,0,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto whitespace-nowrap">
            <Plus className="size-4" />
            สร้างงานใหม่
          </button>
        </div>
      </div>

      {/* Task List container */}
      <div className="glass-card rounded-3xl p-2 md:p-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex gap-2 p-2 mb-4 overflow-x-auto border-b border-white/5 pb-4">
          {['ทั้งหมด (4)', 'ต้องทำ (2)', 'กำลังทำ (1)', 'เสร็จแล้ว (1)'].map((tab, i) => (
            <button key={i} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#1f4dff]/20 text-[#1f4dff] border border-[#1f4dff]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-2 pb-4">
          {mockTasks.map((task) => (
            <div key={task.id} className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">
              
              <div className="flex items-center gap-4 flex-1">
                <button className="text-slate-500 hover:text-[#d4ff00] transition-colors shrink-0">
                  {task.status === "DONE" ? (
                    <CheckCircle2 className="size-6 text-[#d4ff00]" />
                  ) : (
                    <Circle className="size-6" />
                  )}
                </button>
                <div className="flex flex-col">
                  <span className={`text-base font-medium transition-colors ${task.status === "DONE" ? "text-slate-500 line-through" : "text-white group-hover:text-[#d4ff00]"}`}>
                    {task.title}
                  </span>
                  <div className="flex items-center gap-3 mt-1 sm:hidden">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${task.color}`}>
                      {task.priority}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="size-3" /> {task.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-4 shrink-0">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${task.color} w-20 text-center`}>
                  {task.priority}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-400 w-24">
                  <Calendar className="size-4" /> {task.date}
                </span>
                <button className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                  <MoreVertical className="size-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
