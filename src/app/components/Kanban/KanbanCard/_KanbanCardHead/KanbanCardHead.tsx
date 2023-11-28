
import React from "react";
interface KanbanCardHeadTypes {
  message: string;
  title: string;
}

const KanbanCardHead = ({ message, title }: KanbanCardHeadTypes) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <span className="w-6 h-2 bg-teal-400 rounded-xl border-solid border-black border-2" title={title}></span>
        <span className="w-6 h-2 bg-red-500 rounded-xl border-solid border-black border-2"></span>
        <span className="w-6 h-2 bg-stone-600-400 rounded-xl border-solid border-black border-2"></span>
        <span className="w-6 h-2 bg-orange-500 rounded-xl border-solid border-black border-2"></span>
      </div>
      {message}
    </div>
  );
};

export default KanbanCardHead;
