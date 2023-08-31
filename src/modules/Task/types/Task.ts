import { TaskStatus } from './TaskStatus'

export type Task = {
  id: string
  content: string
  status: TaskStatus
}
