import React from 'react';
interface KanbanCardWrapTypes {
    children: React.ReactNode
};

const KanbanCardWrap =({children}:KanbanCardWrapTypes) => {
    return (
        <div className='flex w-60 bg-zinc-900 p-2 flex-col rounded-md border-2 border-solid border-orange-600 text-teal-300'>
           {children}
        </div>
    );
};



export default KanbanCardWrap;