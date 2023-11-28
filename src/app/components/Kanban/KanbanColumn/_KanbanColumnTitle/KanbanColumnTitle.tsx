import React from 'react';
interface KanbanColumnTitleTypes {
    title: string;
};

const KanbanColumnTitle =( {title}:KanbanColumnTitleTypes) => {
    return (
        <div className='flex w-full bg-black text-teal-400 py-4 mb-3 font-extrabold justify-center'>
            {title}
        </div>
    );
};



export default KanbanColumnTitle;