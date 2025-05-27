"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFilter } from "../redux/features/tasks/tasksSlice";

export default function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div className="flex justify-center gap-2 mb-4">
      {(
        ["all", "active", "completed"] as Array<"all" | "active" | "completed">
      ).map((f) => (
        <button
          key={f}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => dispatch(setFilter(f))}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
