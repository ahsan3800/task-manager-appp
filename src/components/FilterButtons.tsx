"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { filterTasks } from "@/redux/features/tasks/tasksSlice";
import Button from "@/components/ui/Button";
import { TaskFilterStatus } from "@/constants/enum";

export default function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasksFilter.filter);

  return (
    <div className="flex justify-center gap-2 mb-4">
      {Object.values(TaskFilterStatus).map((f) => (
        <Button
          key={f}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => dispatch(filterTasks(f))}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </div>
  );
}
