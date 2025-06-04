"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TaskItem from "@/components/TaskItem";
import { TaskFilterStates } from "@/constants/filters";
import { useGetTasksQuery } from "@/redux/features/tasks/tasksAPI";

export default function TaskList() {
  const filter = useSelector((state: RootState) => state.tasksFilter.filter);
  const { data: tasks = [], isLoading, error } = useGetTasksQuery();

  const filteredTasks = tasks.filter((task) => {
    if (filter === TaskFilterStates.COMPLETED) return task.completed;
    if (filter === TaskFilterStates.INCOMPLETE) return !task.completed;
    return true;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load tasks</p>;

  return (
    <div className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
