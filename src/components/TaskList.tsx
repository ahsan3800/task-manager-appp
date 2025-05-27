"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTask } from "../redux/features/tasks/tasksSlice";

// Define the Task type if not already imported
type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TaskList() {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul className="space-y-2">
      {filteredTasks.map((task: Task) => (
        <li
          key={task.id}
          className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          <input type="checkbox" checked={task.completed} readOnly />
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
