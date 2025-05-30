// components/EditTaskModal.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { editTask } from "../redux/features/tasks/tasksSlice";

interface EditTaskModalProps {
  taskId: string;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ taskId, onClose }) => {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((t) => t.id === taskId)
  );

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(editTask({ id: taskId, title }));
      onClose();
    }
  };

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Update task title"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
