import { TaskBoard, TaskStatus } from 'src/modules/Task'

import './global-styles.css'

function App() {
  const tasks = [
    {
      id: 'task-1',
      content: 'Find beautiful dnd lib',
      status: TaskStatus.Done,
    },
    {
      id: 'task-2',
      content: 'Implement it',
      status: TaskStatus.InProgress
    },
  ]

  return <TaskBoard tasks={tasks} />
}

export default App
