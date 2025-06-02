"use client";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { updateTask, deleteTask } from "@/redux/features/tasks/tasksSlice";
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
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null>(null);


  
  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div className="flex items-center gap-2 ">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            dispatch(
              updateTask({
                id: task.id,
                updates: { completed: !task.completed },
              })
            )
          }
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>
      <div className="flex">
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

        <button
          className="text-red-500"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
