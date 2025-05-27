import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AddTaskForm from "@/components/AddTaskForm";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/tasks");
  return (
    <div className="text-center pt-20">
      <AddTaskForm />
      <FilterButtons />
      <TaskList />
      Welcome to the Task Manager my Task
    </div>
  );
}
