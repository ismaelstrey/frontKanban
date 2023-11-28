import Image from "next/image";
import KanbanColumn from "./Kanban/KanbanColumn/KanbanColumn";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-slate-800">
      <KanbanColumn title="A fazer" />
      <KanbanColumn title="Fazendo" />
      <KanbanColumn title="Pausado" />
      <KanbanColumn title="Finalizado" />
    </main>
  );
}
