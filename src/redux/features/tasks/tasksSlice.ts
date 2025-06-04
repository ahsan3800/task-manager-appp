
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  filter: "all" | "completed" | "incomplete";
}

const initialState: TasksState = {
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasksFilter",
  initialState,
  reducers: {
    filterTasks: (state, action: PayloadAction<TasksState["filter"]>) => {
      state.filter = action.payload;
    },
  },
});



export const { filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
