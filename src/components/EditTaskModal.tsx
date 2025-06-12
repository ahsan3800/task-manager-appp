"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import TextField from "./ui/TextField";
import {
  useUpdateTaskMutation,
  useGetTasksQuery,
} from "@/redux/features/tasks/tasksAPI";

interface EditTaskModalProps {
  taskId: string;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ taskId, onClose }) => {
  const { data: tasks } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();
  const task = tasks?.find((t) => t.id === taskId);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await updateTask({ id: taskId, updates: { title } });
      onClose();
    }
  };

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Title"
            name="title"
            type="text"
            checked={undefined}
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Update task title"
            required
          />
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
              onClick={() => {}}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
