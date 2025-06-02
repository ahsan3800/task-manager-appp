"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTask } from "../redux/features/tasks/tasksSlice";


export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false); // ✅ Add state for checkbox
  const dispatch = useDispatch<AppDispatch>();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title, completed })); // ✅ Now use actual checkbox value
    setTitle("");
    setCompleted(false); // reset checkbox
  };

  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        className="border p-2"
      />

      {/* <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Mark as completed
      </label> */}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
