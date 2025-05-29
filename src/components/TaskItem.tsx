"use client";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "@/redux/features/tasks/tasksSlice";
import EditTaskModal from "./EditTaskModal";
import { useState } from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState<string | null>(null);

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleComplete(task.id))}
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>

      <div>
        {/* Edit button for this task */}
        <button
          className="text-blue-600 mx-3"
          onClick={() => setEditId(task.id)}
        >
          Edit
        </button>

        {/* Edit Modal */}
        {editId && (
          <EditTaskModal taskId={editId} onClose={() => setEditId(null)} />
        )}
      </div>
      <button
        className="text-red-500"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </button>
    </div>
  );
}
