import React from 'react';
interface KanbanCardContentTypes {
    message: string;
};

const KanbanCardContent =( {message}:KanbanCardContentTypes) => {
    return (
        <div>
            {message}
        </div>
    );
};



export default KanbanCardContent;