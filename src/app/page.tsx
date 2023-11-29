import KanbanColumn from "./components/Kanban/KanbanColumn/KanbanColumn";


export default function Home() {
  return (
    <main className="flex min-h-screen justify-around p-2 bg-slate-800">
      <KanbanColumn title="FAZER" className="border-kanban-column-color-fazer" />
      <KanbanColumn title="FAZENDO" className="border-kanban-column-color-fazendo" />
      <KanbanColumn title="PAUSADO" className="border-kanban-column-color-pausado" />
      <KanbanColumn title="FINALIZADO" className="border-kanban-column-color-finalizado" />
    </main>
  );
}
