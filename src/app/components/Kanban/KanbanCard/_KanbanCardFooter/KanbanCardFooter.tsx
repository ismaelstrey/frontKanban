import Image from "next/image";
import React from "react";
import user from "./user.jpg";
interface KanbanCardFooterTypes {
  id: number;
}

const KanbanCardFooter = ({ id }: KanbanCardFooterTypes) => {
  return (
    <div className="flex justify-end content-end items-end">
      <div className="flex w-full">
        <div className="flex flex-col justify-center content-center items-center">
          <Image
            src={user}
            alt="user"
            title="Juliano Farias Lima"
            width={40}
            height={40}
            className="rounded-full border-solid border-4 border-teal-500"
          />
          <span className="hidden">Juliano Farias</span>
        </div>
      </div>
      {id}
    </div>
  );
};

export default KanbanCardFooter;
