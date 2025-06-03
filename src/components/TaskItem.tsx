"use client";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { updateTask, deleteTask } from "@/redux/features/tasks/tasksSlice";
import EditTaskModal from "./EditTaskModal";
import { useState } from "react";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null>(null);

  const handleChangeStatus = () => {
    dispatch(
      updateTask({
        id: task.id,
        updates: { completed: !task.completed },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setEditId(task.id);
  };

  const handleCloseModal = () => {
    setEditId(null);
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div className="flex items-center gap-2 ">
        <TextField
          label=""
          name={`completed-${task.id}`}
          type="checkbox"
          checked={task.completed}
          value={task.completed ? "true" : "false"}
          placeholder=""
          required={false}
          onChange={handleChangeStatus}
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>

      <div className="flex">
        <Button className="text-blue-600 mx-3" onClick={handleEdit}>
          Edit
        </Button>

        {editId && <EditTaskModal taskId={editId} onClose={handleCloseModal} />}

        <Button className="text-red-500" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
