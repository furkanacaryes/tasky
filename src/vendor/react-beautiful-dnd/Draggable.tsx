import { FC, PropsWithChildren } from 'react'
import { Draggable as VendorDraggable } from 'react-beautiful-dnd'

export type DraggableProps = PropsWithChildren<{
	id: string
	index: number
}>

export const Draggable: FC<DraggableProps> = ({ id, index, children }) => {
	return (
		<VendorDraggable key={id} draggableId={id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{children}
				</div>
			)}
		</VendorDraggable>
	)
}
