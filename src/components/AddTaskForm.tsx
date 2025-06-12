"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAddTaskMutation } from "@/redux/features/tasks/tasksAPI";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { FormikHelpers } from "formik";

interface TaskFormValues {
  taskTitle: string;
}

export default function TaskForm() {
  const [addTask] = useAddTaskMutation();

  const initialValues: TaskFormValues = { taskTitle: "" };

  const validationSchema = Yup.object({
    taskTitle: Yup.string().required("Task title is required"),
  });

  const handleSubmit = async (
    values: TaskFormValues,
    { resetForm }: FormikHelpers<TaskFormValues>
  ) => {
    await addTask({ title: values.taskTitle, completed: false });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-2 mb-4">
        <TextField
          label="Task Title"
          name="taskTitle"
          placeholder="New Task"
          required
        />
        <Button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {}}
        >
          Add Task
        </Button>
      </Form>
    </Formik>
  );
}
