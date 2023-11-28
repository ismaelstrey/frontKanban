import React from 'react';
interface KanbanColumnWrapTypes {
    children: React.ReactNode;
};

const KanbanColumnWrap =({children}:KanbanColumnWrapTypes) => {
    return (
        <div className='flex flex-col h-screen bg-zinc-600 p-2 rounded-lg'>          
           {children}
        </div>
    );
};



export default KanbanColumnWrap;