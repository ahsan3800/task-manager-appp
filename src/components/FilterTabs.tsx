"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { filterTasks } from "@/redux/features/tasks/tasksSlice";
import Button from "./ui/Button";
import { TaskFilterStatus } from "../constants/enum";

export default function FilterTabs() {
  const dispatch = useDispatch();

  const currentFilter = useSelector(
    (state: RootState) => state.tasksFilter.filter
  );

  return (
    <div className="flex gap-2 mb-4">
      {(Object.values(TaskFilterStatus) as TaskFilterStatus[]).map((status) => (
        <Button
          key={status}
          onClick={() => dispatch(filterTasks(status))}
          className={`px-3 py-1 rounded ${
            currentFilter === status ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {status[0].toUpperCase() + status.slice(1)}
        </Button>
      ))}
    </div>
  );
}
