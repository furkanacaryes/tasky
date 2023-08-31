import { FC } from "react"

import { Droppable } from "src/vendor"
import { Task, TaskStackItem } from "src/modules/Task"

export type TaskStackProps = {
	id: string
	tasks: Task[]
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
