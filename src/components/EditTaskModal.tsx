"use client";
import React, { useMemo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import {
  useUpdateTaskMutation,
  useGetTasksQuery,
} from "@/redux/features/tasks/tasksAPI";

interface EditTaskModalProps {
  taskId: string;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ taskId, onClose }) => {
  const { data: tasks } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();

  const task = useMemo(() => {
    return tasks?.find((t) => t.id === taskId);
  }, [tasks, taskId]);

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <Formik
          initialValues={{ title: task.title }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
          })}
          onSubmit={async (values) => {
            await updateTask({ id: taskId, updates: { title: values.title } });
            onClose();
          }}
        >
          <Form>
            <TextField
              label="Task Title"
              name="title"
              placeholder="Update task title"
              required
              className="w-full"
            />
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={() => {}}
              >
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditTaskModal;
