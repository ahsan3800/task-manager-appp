export interface Task {
  id: string;
  title: string;
  completed: boolean;
}


const BASE_URL = 'http://localhost:3001/tasks';


export const fetchTasksAPI = async (): Promise<Task[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};


export const addTaskAPI = async (task: Omit<Task, "id">): Promise< Task> => {
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
  // Step 1: Fetch the existing task
  const existingResponse = await fetch(`http://localhost:3001/tasks/${id}`);
  if (!existingResponse.ok) throw new Error("Failed to fetch existing task");
  const existingTask: Task = await existingResponse.json();

  // Step 2: Merge updates with the full task object
  const updatedTask = { ...existingTask, ...updates };

  // Step 3: Send the full task object in PUT
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};
