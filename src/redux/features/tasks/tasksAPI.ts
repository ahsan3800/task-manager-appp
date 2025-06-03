
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const fetchTasksAPI = async (): Promise<Task[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

export const addTaskAPI = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to add task");
  return response.json();
};

export const updateTaskAPI = async (id: string, updates: Partial<Task>): Promise<Task> => {
  const existingResponse = await fetch(`${BASE_URL}/${id}`);
  if (!existingResponse.ok) throw new Error("Failed to fetch existing task");
  const existingTask: Task = await existingResponse.json();

  const updatedTask = { ...existingTask, ...updates };

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};
