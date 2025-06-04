"use client";
import { useState } from "react";
import { useAddTaskMutation } from "@/redux/features/tasks/tasksAPI";
import Button from "./ui/Button";
import TextField from "./ui/TextField";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [addTask] = useAddTaskMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTask({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <TextField
        label="Task Title"
        name="taskTitle"
        type="text"
        value={title}
        checked={false}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="New Task"
        required
      />
      <Button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {}}
      >
        Add Task
      </Button>
    </form>
  );
}
