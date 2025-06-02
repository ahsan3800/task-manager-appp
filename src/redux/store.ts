
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../redux/features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;






// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from '../redux/features/tasks/tasksSlice';


// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


// import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer from "./features/tasks/tasksSlice";
// import { loadState, saveState } from "@/utils/localStorage";

// const preloadedState = {
//   tasks: loadState(),
// };

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
 

//   },
//   preloadedState,
// });

// store.subscribe(() => {
//   saveState(store.getState().tasks);
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// store.js or store.ts


// store.ts (or store.js if you're using JS)


// import { configureStore } from '@reduxjs/toolkit'

// import tasksReducer from "./features/tasks/tasksSlice";

// export const store = configureStore({
//   reducer: {
//       tasks: tasksReducer,
//     [taskApi.reducerPath]: taskApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(taskApi.middleware),
// })

// // ✅ Types (for TypeScript)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch