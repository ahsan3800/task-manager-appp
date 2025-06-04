
import { configureStore } from '@reduxjs/toolkit';
import tasksFilterSilce from './features/tasks/tasksSlice';
import { callApiData } from './features/tasks/tasksAPI';

export const store = configureStore({
  reducer: {
    tasksFilter: tasksFilterSilce,     
    [callApiData.reducerPath]: callApiData.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(callApiData.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
