import React from 'react';
interface KanbanCardFooterTypes {
    message: string;
};

const KanbanCardFooter =( {message}:KanbanCardFooterTypes) => {
    return (
        <div>
            {message}
        </div>
    );
};



export default KanbanCardFooter;