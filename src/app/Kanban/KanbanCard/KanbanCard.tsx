import React from "react";
import KanbanCardHead from "./_KanbanCardHead/KanbanCardHead";
import KanbanCardContent from "./_KanbanCardContent/KanbanCardContent";
import KanbanCardFooter from "./_KanbanCardFooter/KanbanCardFooter";
import KanbanCardWrap from "./_KanbanCardWrap/KanbanCardWrap";
const KanbanCard = () => {
  return (
    <KanbanCardWrap>
      <KanbanCardHead message="head" />
      <KanbanCardContent message="Conteudo" />
      <KanbanCardFooter message="Footer" />
    </KanbanCardWrap>
  );
};

export default KanbanCard;
