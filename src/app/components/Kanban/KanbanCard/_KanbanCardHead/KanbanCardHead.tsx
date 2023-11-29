import React from "react";
interface KanbanCardHeadTypes {
  message: string;
  id: number;
}

const KanbanCardHead = ({ message, id }: KanbanCardHeadTypes) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <span className="w-6 h-2 bg-teal-400 rounded-xl border-solid border-black border-2"></span>
          <span className="w-6 h-2 bg-red-500 rounded-xl border-solid border-black border-2"></span>
          <span className="w-6 h-2 bg-stone-600-400 rounded-xl border-solid border-black border-2"></span>
          <span className="w-6 h-2 bg-orange-500 rounded-xl border-solid border-black border-2"></span>
        </div>
        <span>ID:#{id}</span>
      </div>
      {message}
    </div>
  );
};

export default KanbanCardHead;
