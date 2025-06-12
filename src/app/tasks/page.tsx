"use client";
import React from "react";
import { AuthGuard } from "@/utils/authGuard";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/AddTaskForm";
import FilterTabs from "@/components/FilterTabs";
import { UserButton, useClerk } from "@clerk/nextjs";
import { CircleCheckBig, LogOut } from "lucide-react";
import Button from "@/components/ui/Button";
export default function TasksPage() {
  const { signOut } = useClerk();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-indigo-600">
              <CircleCheckBig size={30} />
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Task Manager
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <UserButton />
              <Button
                onClick={() =>
                  signOut(() => {
                    window.location.href = "/";
                  })
                }
                className="flex items-center gap-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition"
              >
                <LogOut size={16} />
                Log Out
              </Button>
            </div>
          </div>

          {/* Task Form */}
          <section className="bg-indigo-50 rounded-xl p-5 shadow-inner">
            <TaskForm />
          </section>
          <FilterTabs />
          <TaskList />
        </div>
      </div>
    </AuthGuard>
  );
}
