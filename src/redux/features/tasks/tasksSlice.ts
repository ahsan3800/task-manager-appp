import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  text: string
  completed: boolean
}

interface TaskState {
  tasks: Task[]
  filter: 'all' | 'completed' | 'active'
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: Date.now().toString(), text: action.payload, completed: false })
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) task.completed = !task.completed
    },
    setFilter: (state, action: PayloadAction<TaskState['filter']>) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, setFilter } = taskSlice.actions
export default taskSlice.reducer
