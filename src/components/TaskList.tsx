"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TaskItem from "@/components/TaskItem";
import { TaskFilterStates } from "@/constants/filters";

export default function TaskList() {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === TaskFilterStates.COMPLETED) return task.completed;
    if (filter === TaskFilterStates.INCOMPLETE) return !task.completed;
    return true;
  });

  return (
    <div className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
