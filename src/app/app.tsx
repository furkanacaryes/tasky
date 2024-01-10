import { TaskBoard, TaskStatus } from 'src/modules/task'

import './global-styles.css'

export const App = () => {
  const tasks = [
    {
      id: 'task-1',
      content: 'Find beautiful dnd lib',
      status: TaskStatus.Done,
    },
    {
      id: 'task-2',
      content: 'Implement it',
      status: TaskStatus.InProgress,
    },
  ]

  return <TaskBoard tasks={tasks} />
}
