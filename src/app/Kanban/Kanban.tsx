import React from 'react';
import KanbanColumnTitle from './KanbanColumn/_KanbanColumnTitle/KanbanColumnTitle';
import KanbanColumnWrap from './KanbanColumn/_KanbanColumnWrap/KanbanColumnWrap';
interface KanbanTypes {
    children: React.ReactNode;
    title: string;
};

const Kanban =({children, title}:KanbanTypes) => {
    return (
      <KanbanColumnWrap>
        <KanbanColumnTitle title={title}/>
           {children}
      </KanbanColumnWrap>
    );
};



export default Kanban;