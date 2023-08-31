import { FC } from 'react'
import { DragDropContextProps, DragDropContext as VendorDragDropContext } from 'react-beautiful-dnd'

export const DragDropContext: FC<DragDropContextProps> = ({ children, ...props }) => (
  <VendorDragDropContext {...props}>{children}</VendorDragDropContext>
)
