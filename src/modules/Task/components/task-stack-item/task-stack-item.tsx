import { FC } from 'react'

import { Draggable } from 'src/modified-packages'

export type TaskStackItemProps = Task.Item & {
  index: number
}

export const TaskStackItem: FC<TaskStackItemProps> = ({ id, index, content }) => {
  return (
    <Draggable id={id} index={index}>
      {content}
    </Draggable>
  )
}
