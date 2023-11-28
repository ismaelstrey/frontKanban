import React from 'react';
interface KanbanCardWrapTypes {
    children: React.ReactNode;
    className?: string;
    id: number;
    onDragCapture: (e: any) => void;
};

const KanbanCardWrap = ({ children, className, onDragCapture, id }: KanbanCardWrapTypes) => {
    return (
        <div draggable onDragCapture={(e) => console.log("capture", id)} className={`flex w-80 bg-zinc-900 gap-2 p-2 flex-col rounded-md border-2 border-solid text-teal-300 shadow-teal-500 shadow-md hover:shadow-inner hover:shadow-teal-300 cursor-pointer ${className && className}`}>
            {children}
        </div>
    );
};



export default KanbanCardWrap;