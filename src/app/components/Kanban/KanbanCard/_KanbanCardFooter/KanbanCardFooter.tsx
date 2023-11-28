import React from 'react';
interface KanbanCardFooterTypes {
    message: string;
    id: number;
};

const KanbanCardFooter = ({ message, id }: KanbanCardFooterTypes) => {
    return (
        <div>
            {message}
            {id}
        </div>
    );
};



export default KanbanCardFooter;