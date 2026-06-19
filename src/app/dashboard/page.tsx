import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Clock, CheckCircle2, ChevronRight, AlertCircle, Plane } from "lucide-react";

export default async function DashboardMainPage() {
  const session = await getServerSession(authOptions);
  
  // mock time for hero section
  const currentTime = new Date().toLocaleTimeString('th-TH', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            สวัสดี, <span className="bg-gradient-to-r from-[#d4ff00] to-[#b6e600] bg-clip-text text-transparent">{session?.user?.name || "พนักงาน"}</span> 👋
          </h1>
          <p className="text-slate-400">มาเริ่มจัดการงานและเป้าหมายของวันนี้กันเถอะ</p>
        </div>
      </div>

      {/* Hero: Morning Check-in */}
      <div className="relative overflow-hidden rounded-[2rem] border border-tint/10 bg-gradient-to-br from-[#1f4dff]/10 to-[#1f4dff]/5 p-8 shadow-2xl glass-card">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 size-80 rounded-full bg-[#1f4dff]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-80 rounded-full bg-[#d4ff00]/10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f4dff]/20 text-[#1f4dff] text-sm font-medium mb-4 border border-[#1f4dff]/20">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1f4dff] opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-[#1f4dff]"></span>
              </span>
              เช็คอินภาคเช้า
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter tabular-nums">
              {currentTime}
            </h2>
            <p className="text-slate-300 max-w-md text-lg">
              บันทึกแผนงานและอารมณ์ของคุณในเช้าวันนี้ เพื่อให้ทีมเห็นภาพรวมว่าคุณกำลังทำอะไร
            </p>
          </div>
          
          <div className="w-full md:w-auto bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
            <button className="w-full md:w-64 py-4 px-6 bg-gradient-to-r from-[#d4ff00] to-[#b6e600] hover:from-[#b6e600] hover:to-[#99cc00] text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              <Clock className="size-5" />
              เช็คอินเข้าทำงาน
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">บันทึกพิกัดอัตโนมัติเมื่อกดปุ่ม</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: My Tasks */}
        <div className="md:col-span-8 space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="size-5 text-[#d4ff00]" />
                งานที่ต้องทำวันนี้
              </h3>
              <button className="text-sm text-[#1f4dff] hover:text-[#4d73ff] flex items-center transition-colors">
                ดูทั้งหมด <ChevronRight className="size-4" />
              </button>
            </div>
            
            <div className="space-y-3">
              {[
                { title: "อัปเดต Requirement Document", tag: "High", tagColor: "bg-red-500/20 text-red-400 border-red-500/20" },
                { title: "ประชุมกับทีม Marketing", tag: "Medium", tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/20" },
                { title: "Review PR ฝั่ง Backend", tag: "Medium", tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/20" },
              ].map((task, i) => (
                <div key={i} className="group/task flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="size-5 rounded-full border-2 border-slate-500 group-hover/task:border-[#d4ff00] transition-colors" />
                  <span className="flex-1 text-slate-300 group-hover/task:text-white transition-colors">{task.title}</span>
                  <span className={`px-2.5 py-1 text-xs rounded-lg border ${task.tagColor}`}>
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Leaves */}
        <div className="md:col-span-4 space-y-6">
          
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Plane className="size-20" />
            </div>
            <h3 className="text-slate-400 font-medium mb-1">วันลาพักร้อนคงเหลือ</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">6</span>
              <span className="text-slate-500">/ 10 วัน</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[#1f4dff] h-2 rounded-full w-[40%] shadow-[0_0_10px_#1f4dff]"></div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20">
                <AlertCircle className="size-6" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">ยังไม่มีเป้าหมายสัปดาห์นี้</h3>
                <p className="text-sm text-slate-400 mb-3">คุณยังไม่ได้ตั้งเป้าหมายการทำงาน (KPI) ประจำสัปดาห์</p>
                <button className="text-sm font-medium text-[#d4ff00] hover:text-[#b6e600] transition-colors">
                  ตั้งเป้าหมายเดี๋ยวนี้ &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
