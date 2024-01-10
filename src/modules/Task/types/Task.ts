import { TaskStatus } from './task-status'

declare global {
  namespace Task {
    export type Item = {
      id: string
      content: string
      status: Status
    }

    export type Status = TaskStatus
  }
}
