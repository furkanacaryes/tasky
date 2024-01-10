import { FC } from 'react'

import { Droppable } from 'src/modified-packages'
import { TaskStackItem } from 'src/modules/task'

export type TaskStackProps = {
  id: string
  tasks: Task.Item[]
}

export const TaskStack: FC<TaskStackProps> = ({ id, tasks }) => {
  return (
    <Droppable id={id}>
      {tasks.map((task, index) => (
        <TaskStackItem key={task.id} {...task} index={index} />
      ))}
    </Droppable>
  )
}
