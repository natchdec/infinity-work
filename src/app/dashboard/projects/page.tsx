import KanbanBoard from "@/components/KanbanBoard";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">โปรเจกต์ (Project Board)</h1>
      <KanbanBoard />
    </div>
  );
}
