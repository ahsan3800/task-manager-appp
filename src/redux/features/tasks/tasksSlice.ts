import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Task = {
  id: string;
  title: string;
  completed: boolean;
};


type TasksState = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};


const initialState: TasksState = {
  tasks: [],
  filter: 'all',
};


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  reducers: {

    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask = {
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks.push(newTask);
    },


    editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },


    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },


    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },


    filterTasks: (state, action: PayloadAction<TasksState['filter']>) => {
      state.filter = action.payload;
    },

    
  },
});

export const { addTask, editTask, deleteTask, toggleComplete, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
