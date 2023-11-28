import React from "react";
import KanbanCard from "../KanbanCard/KanbanCard";
import Kanban from "../Kanban";
interface KanbanColumnProps {
  title: string;
}

const KanbanColumn = ({ title }: KanbanColumnProps) => {
  return (
    <Kanban title={title} >     
      <KanbanCard  />
    </Kanban>
  );
};

export default KanbanColumn;
