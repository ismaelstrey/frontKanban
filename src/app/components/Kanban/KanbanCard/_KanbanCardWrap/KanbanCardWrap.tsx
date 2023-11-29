import React from "react";
interface KanbanCardWrapTypes {
  children: React.ReactNode;
  className?: string;
  id: number;
  onDragCapture: (e: any) => void;
}

const KanbanCardWrap = ({ children, className, id }: KanbanCardWrapTypes) => {
  return (
    <div
      draggable
      onDragCapture={(e) => console.log("capture", id)}
      className={`relative flex w-80 bg-zinc-900 gap-2 p-2 rounded-md border-2 border-solid text-teal-300 shadow-teal-500 shadow-md hover:shadow-inner hover:shadow-teal-300 cursor-pointer ${
        className && className
      }`}
    >
      <div className="flex flex-col w-80"> {children}</div>
      <div className="flex left-1 w-3 rounded-lg h-40 bg-teal-600 static right-0 justify-center ">
        <span className="flex my-4 bg-red-500 w-[4px] h-[80%] items-center content-center justify-center"></span>
      </div>
    </div>
  );
};

export default KanbanCardWrap;
