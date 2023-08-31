import { FC, PropsWithChildren } from "react";

import "./styles.css";

export type DraggableProps = PropsWithChildren & {
  className?: string;
};

export const Draggable: FC<DraggableProps> = ({ children, className = "" }) => {
  return (
    <div
      draggable
      className={`draggable-container ${className}`}
      onDrag={(e) => e.preventDefault()}
      // onDragStart={(e) => {e.preventDefault()}}
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
