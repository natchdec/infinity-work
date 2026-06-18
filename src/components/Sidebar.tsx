import Link from "next/link";
import { Home, CheckSquare, KanbanSquare, FileText, Settings } from "lucide-react";

export default function Sidebar({ role }: { role: string }) {
  const menus = [
    { name: "Dashboard", path: "/dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "ลงเวลา (Check-in)", path: "/dashboard/attendance", icon: <CheckSquare className="w-5 h-5" /> },
    { name: "งานของฉัน (My Tasks)", path: "/dashboard/tasks", icon: <CheckSquare className="w-5 h-5" /> },
    { name: "โปรเจกต์ (Board)", path: "/dashboard/projects", icon: <KanbanSquare className="w-5 h-5" /> },
    { name: "รายงาน (Weekly)", path: "/dashboard/reports", icon: <FileText className="w-5 h-5" /> },
  ];

  if (role === "ADMIN") {
    menus.push({ name: "จัดการผู้ใช้", path: "/admin/users", icon: <Settings className="w-5 h-5" /> });
  }

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-slate-800">
        Work-OS
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {menu.icon}
            <span>{menu.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
