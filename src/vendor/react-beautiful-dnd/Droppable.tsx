import { FC, PropsWithChildren } from 'react'
import { Droppable as VendorDroppable } from 'react-beautiful-dnd'

export type DroppableProps = PropsWithChildren<{
  id: string
}>

export const Droppable: FC<DroppableProps> = ({ children, id }) => {
  return (
    <VendorDroppable droppableId={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {children}

          {provided.placeholder}
        </div>
      )}
    </VendorDroppable>
  )
}
