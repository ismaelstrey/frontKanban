import React from 'react';
interface KanbanCardContentTypes {
    message: string;
};

const KanbanCardContent =( {message}:KanbanCardContentTypes) => {
    return (
        <div className='flex h-24 justify-center content-center items-center'>
            {message}
        </div>
    );
};



export default KanbanCardContent;