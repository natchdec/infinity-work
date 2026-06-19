"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MapPin, 
  ListTodo, 
  Target, 
  CalendarDays, 
  Plane, 
  Activity, 
  LayoutDashboard,
  Users,
  Settings,
  Sparkles
} from "lucide-react";

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();

  const employeeMenus = [
    { name: "หน้าแรกพนักงาน", path: "/dashboard", icon: LayoutDashboard },
    { name: "เช็คอินเช้า–เย็น", path: "/dashboard/attendance", icon: MapPin },
    { name: "งานของฉัน", path: "/dashboard/tasks", icon: ListTodo },
    { name: "เป้าหมายและรายงาน", path: "/dashboard/reports", icon: Target },
    { name: "ปฏิทินรวม", path: "/dashboard/calendar", icon: CalendarDays },
    { name: "ลางานและทำโอที", path: "/dashboard/leaves", icon: Plane },
    { name: "ผลงานของฉัน", path: "/dashboard/kpi", icon: Activity },
  ];

  const adminMenus = [
    { name: "ภาพรวมผู้บริหาร", path: "/admin", icon: Sparkles },
    { name: "จัดการบทบาทพนักงาน", path: "/admin/users", icon: Users },
    { name: "ตั้งค่าระบบ", path: "/admin/settings", icon: Settings },
  ];

  const menus = role === "ADMIN" ? [...adminMenus, ...employeeMenus] : employeeMenus;

  return (
    <aside className="w-64 border-r border-tint/10 bg-[#0a0a0a]/95 text-slate-300 flex flex-col h-screen overflow-y-auto backdrop-blur-xl">
      <div className="p-6 pb-2">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-8 rounded-lg bg-gradient-to-br from-[#d4ff00] to-[#1f4dff] flex items-center justify-center shadow-lg shadow-[#1f4dff]/20">
            <Sparkles className="size-4 text-black" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight group-hover:text-[#d4ff00] transition-colors">
            Work-OS
          </span>
        </Link>
      </div>

      <div className="px-6 py-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          เมนูหลัก
        </div>
        <nav className="space-y-1">
          {menus.map((menu) => {
            const isActive = pathname === menu.path;
            const Icon = menu.icon;
            return (
              <Link
                key={menu.name}
                href={menu.path}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-[#1f4dff]/15 text-[#d4ff00] border border-[#1f4dff]/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                <div className={`flex items-center justify-center rounded-md p-1 ${isActive ? "bg-[#1f4dff]/20" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{menu.name}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-white">HM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white truncate">hmathh</span>
            <span className="text-xs text-[#d4ff00]">{role}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
