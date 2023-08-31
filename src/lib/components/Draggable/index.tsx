import { FC, PropsWithChildren, DragEventHandler } from "react";

import "./styles.css";

export type DraggableProps = PropsWithChildren & {
  className?: string;
};

export const Draggable: FC<DraggableProps> = ({ children, className = "" }) => {
  const configurePreview: DragEventHandler<HTMLDivElement> = (event) => {
    const noPreview = document.createElement('div')
    noPreview.style.backgroundColor = "red";
    event.dataTransfer.setDragImage(noPreview, 0, 0);
  }
  
  return (
    <div
      draggable
      className={`draggable-container ${className}`}
      onDrag={(e) => e.preventDefault()}
      onDragStart={configurePreview}
      onDragEnter={(e) => e.preventDefault()}
      onDragEnd={() => console.log("drag-end")}
      onDragExit={() => console.log("drag-exit")}
      onDragLeave={() => console.log("drag-leave")}
      onDragOver={() => console.log("drag-over")}
    >
      {children}
    </div>
  );
};
