export const createTaskStacksFrom = (tasks: Task.Item[]) => {
  // ? Grups tasks by their status, eventually creates a task stacks dictionary
  const taskStackDict = tasks.reduce<Record<string, Task.Item[]>>((stacks, task) => {
    const prevTaskStacks = structuredClone(stacks)

    const stackId = task.status

    const doesStackExist = !!stacks[stackId]

    if (doesStackExist) {
      prevTaskStacks[stackId].push(task)
    } else {
      prevTaskStacks[stackId] = [task]
    }

    return prevTaskStacks
  }, {})

  const taskStacks = Object.entries(taskStackDict).map(([id, tasks]) => ({ id, tasks }))

  return taskStacks
}
