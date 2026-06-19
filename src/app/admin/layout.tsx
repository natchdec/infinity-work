import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Bell, Search } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-[#d4ff00] selection:text-black">
      {/* Background Dot Pattern is applied via body in globals.css */}
      
      <Sidebar role={session.user.role} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1f4dff]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <header className="h-16 border-b border-tint/10 bg-background/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="ค้นหาพนักงาน, งาน, หรือโปรเจกต์..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#d4ff00] focus:border-[#d4ff00] transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell className="size-5 text-slate-400" />
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <span className="text-sm font-medium text-slate-300 hidden sm:block">
                {session.user.name}
              </span>
              <div className="size-8 rounded-full bg-gradient-to-br from-[#1f4dff] to-[#d4ff00] p-[2px]">
                <div className="size-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {session.user.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 md:p-8 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}
