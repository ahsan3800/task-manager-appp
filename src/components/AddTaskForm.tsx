"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTask } from "../redux/features/tasks/tasksSlice";
import Button from "./ui/Button";
import TextField from "./ui/TextField";
export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title, completed }));
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <TextField
        label="Task Title"
        name="taskTitle"
        type="text"
        checked={undefined}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="New Task"
        required={true}
        className="border p-2"
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
