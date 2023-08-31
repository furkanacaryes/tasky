import { FC } from "react";
import { DragDropContextProps } from "react-beautiful-dnd";

export const DragDropContext: FC<DragDropContextProps> = ({ children, ...props }) => (
	<DragDropContext {...props}>
		{children}
	</DragDropContext>
)
