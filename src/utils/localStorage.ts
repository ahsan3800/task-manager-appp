// // utils/localStorage.ts

// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("tasks");
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch {
//     return undefined;
//   }
// };

// export const saveState = (state: unknown) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("tasks", serializedState);
//   } catch {
//     // Ignore write errors.
//   }
// };
