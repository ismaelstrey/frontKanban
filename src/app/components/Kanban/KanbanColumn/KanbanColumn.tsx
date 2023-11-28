'use client'
import React, { useRef, useState } from "react";
import KanbanCard from "../KanbanCard/KanbanCard";
import Kanban from "../Kanban";
import API from "@/app/api/api";
interface KanbanColumnProps {
  title: string;
  className?: string;
}
const KanbanColumn = ({ title, className }: KanbanColumnProps) => {
  const [todo, setTodo] = useState({ API })
  const filtraTodo = (filtro: string) => todo.API.filter((filtra) => filtra.status.name == filtro)
  const teste = useRef(Kanban)




  // console.log(teste)
  const RenderTodo = () =>
    <Kanban title={title} className={className} >
      {filtraTodo(title).map((todoItem) => <KanbanCard onDragCapture={(e) => console.log(todoItem.id, e)} title={todoItem.name} key={todoItem.id} id={todoItem.id} message={todoItem.description} className={className} />)}
    </Kanban>

  return (
    <RenderTodo />
  );
};

export default KanbanColumn;
