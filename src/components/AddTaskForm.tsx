"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  interface AddTaskPayload {
    title: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title } as AddTaskPayload));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        className="border p-2 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
