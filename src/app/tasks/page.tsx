import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList";
import FilterButtons from "../../components/FilterButtons";

export default function TaskPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <SignedIn>
        <AddTaskForm />
        <FilterButtons />
        <TaskList />
      </SignedIn>
      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <SignIn />
        </div>
      </SignedOut>
    </div>
  );
}
