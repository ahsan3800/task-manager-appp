"use client";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "@/redux/features/tasks/tasksSlice";
import { RootState } from "@/redux/store";

export default function FilterTabs() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div className="flex gap-2 mb-4">
      {(
        ["all", "completed", "incomplete"] as Array<"all" | "completed" | "incomplete">
      ).map((f) => (
        <button
          key={f}
          onClick={() => dispatch(filterTasks(f))}
          className={`px-3 py-1 rounded ${
            currentFilter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
