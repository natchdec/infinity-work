"use client";

export default function KanbanBoard() {
  const columns = [
    { title: "To Do", tasks: [{ id: 1, title: "ออกแบบหน้า Login" }] },
    { title: "In Progress", tasks: [{ id: 2, title: "เขียน API Check-in" }] },
    { title: "Done", tasks: [{ id: 3, title: "Setup Prisma" }] }
  ];

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map(col => (
        <div key={col.title} className="w-80 flex-shrink-0 bg-slate-100 p-4 rounded-xl">
          <h3 className="font-semibold text-slate-700 mb-4">{col.title}</h3>
          <div className="flex flex-col gap-3">
            {col.tasks.map(task => (
              <div key={task.id} className="p-4 bg-white border shadow-sm rounded-lg cursor-grab active:cursor-grabbing hover:border-blue-300">
                <p className="font-medium text-slate-800">{task.title}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Task</span>
                  <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
