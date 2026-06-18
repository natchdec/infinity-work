import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardMainPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">ยินดีต้อนรับสู่ Work-OS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-slate-700">สถานะการทำงานวันนี้</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">ยังไม่ได้ลงเวลา</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-slate-700">งานที่ต้องทำ</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">5 งาน</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-slate-700">แจ้งเตือนใหม่</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
