
import KanbanCardHead from "./_KanbanCardHead/KanbanCardHead";
import KanbanCardContent from "./_KanbanCardContent/KanbanCardContent";
import KanbanCardFooter from "./_KanbanCardFooter/KanbanCardFooter";
import KanbanCardWrap from "./_KanbanCardWrap/KanbanCardWrap";

interface KanbanCardTypes {
  message: string;
  title: string;
  className?: string;
  id: number;
  onDragCapture: (e: React.DragEvent<HTMLDivElement>) => void;
}
const KanbanCard = ({ message, title, id, className, onDragCapture }: KanbanCardTypes) => {

  return (
    <KanbanCardWrap className={className} onDragCapture={onDragCapture} id={id}>
      <KanbanCardHead message={title} title={title} />
      <KanbanCardContent message={message} />
      <KanbanCardFooter message="" id={id} />
    </KanbanCardWrap>
  );
};

export default KanbanCard;
