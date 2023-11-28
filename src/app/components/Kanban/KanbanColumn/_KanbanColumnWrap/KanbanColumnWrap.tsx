import React from 'react';
interface KanbanColumnWrapTypes {
    children: React.ReactNode;
    className?: string;
};

const KanbanColumnWrap = ({ children, className }: KanbanColumnWrapTypes) => {

    return (
        <div className={`flex flex-col gap-3 min-h-screen bg-zinc-600 p-2 rounded-lg border-solid align-top justify-start content-start border-2 ${className} shadow-black shadow-md`}>
            {children}
        </div>
    );
};



export default KanbanColumnWrap;

