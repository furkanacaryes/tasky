import { FC } from 'react'

import { Draggable } from 'src/vendor'
import { Task } from 'src/modules/Task'

export type TaskStackItemProps = Task & {
  index: number
}

export const TaskStackItem: FC<TaskStackItemProps> = ({ id, index, content }) => {
  return (
    <Draggable id={id} index={index}>
      {content}
    </Draggable>
  )
}
