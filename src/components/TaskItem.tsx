"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import EditTaskModal from "@/components/EditTaskModal";
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
  const [updateTask, { isLoading: isUpdating }] = useUpdateTaskMutation();
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();

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
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChangeStatus}
          disabled={isUpdating}
          className="w-4 h-4"
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          className="text-blue-600"
          onClick={handleEdit}
          disabled={isUpdating || isDeleting}
        >
          {isUpdating ? "Updating..." : "Edit"}
        </Button>

        <Button
          className="text-red-500"
          onClick={handleDelete}
          disabled={isDeleting || isUpdating}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </div>

      {editId && <EditTaskModal taskId={editId} onClose={handleCloseModal} />}
    </div>
  );
}
