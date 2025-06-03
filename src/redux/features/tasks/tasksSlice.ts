import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasksAPI, addTaskAPI, Task ,updateTaskAPI} from "./tasksAPI";


interface TasksState {
  tasks: Task[];
  filter: "all" | "completed" | "incomplete";
  loading: boolean;
  error: string | null;
}


const initialState: TasksState = {
  tasks: [],
  filter: "all",
  loading: false,
  error: null,
};


export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const data = await fetchTasksAPI();
  return data;
});



export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: { title: string; completed: boolean }) => {
    return await addTaskAPI(task);
  }
);


export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updates }: { id: string; updates: Partial<Task> }) => {
    return await updateTaskAPI(id, updates);
  }
);



const tasksSlice = createSlice({

  name: "tasks",
  initialState,
  reducers: {


    // Local reducers
    editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    filterTasks: (state, action: PayloadAction<TasksState["filter"]>) => {
      state.filter = action.payload;
    },

  },


  extraReducers: (builder) => {


    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add task";
      })

      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

     .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
        state.tasks[index] = action.payload;
      }
      })

    .addCase(updateTask.rejected, (state, action) => {
     state.loading = false;
     state.error = action.error.message || "Failed to update task";
    });

  },

});

export const { editTask, deleteTask,filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
