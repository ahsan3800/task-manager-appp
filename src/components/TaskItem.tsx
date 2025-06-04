"use client";
import { useState } from "react";
import Button from "./ui/Button";
import TextField from "./ui/TextField";
import EditTaskModal from "./EditTaskModal";
import {
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "@/redux/features/tasks/tasksAPI";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [editId, setEditId] = useState<string | null>(null);
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleChangeStatus = () => {
    updateTask({ id: task.id, updates: { completed: !task.completed } });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setEditId(task.id);
  };

  const handleCloseModal = () => {
    setEditId(null);
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div className="flex items-center gap-2">
        <TextField
          label=""
          name={`completed-${task.id}`}
          type="checkbox"
          checked={task.completed}
          value={task.completed}
          placeholder=""
          required={false}
          onChange={handleChangeStatus}
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>

      <div className="flex">
        <Button className="text-blue-600 mx-3" onClick={handleEdit}>
          Edit
        </Button>
        {editId && <EditTaskModal taskId={editId} onClose={handleCloseModal} />}
        <Button className="text-red-500" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
