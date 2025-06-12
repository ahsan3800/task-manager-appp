
import { configureStore } from '@reduxjs/toolkit';
import tasksFilterSilce from '@/redux/features/tasks/tasksSlice';
import { callApiData } from '@/redux/features/tasks/tasksAPI';

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
