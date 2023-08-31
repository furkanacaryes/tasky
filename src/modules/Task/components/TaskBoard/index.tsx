import { FC, useState } from 'react'

import { DragDropContext } from 'src/vendor'
import { Task, TaskStack } from 'src/modules/Task'

import { createTaskStacksFrom } from './helpers'

export type TaskBoardProps = {
  tasks: Task[]
}

export const TaskBoard: FC<TaskBoardProps> = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks)

  const stacks = createTaskStacksFrom(tasks)

  const onDragEnd = (result) => {
    // TODO: Handle the drag and drop result
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {stacks.map(({ id, tasks }) => (
        <TaskStack key={id} id={id} tasks={tasks} />
      ))}
    </DragDropContext>
  )
}
