import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function MyTasksPage() {
  const session = await getServerSession(authOptions);
  
  const tasks = await prisma.task.findMany({
    where: { assigneeId: session?.user.id },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">งานของฉัน</h1>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${task.status === 'DONE' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'}`}>
                {task.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm">{task.description || "ไม่มีรายละเอียด"}</p>
          </div>
        ))}
        {tasks.length === 0 && <p className="text-slate-500">คุณยังไม่มีงานในขณะนี้ (หรือยังไม่ได้เชื่อม Database)</p>}
      </div>
    </div>
  );
}
