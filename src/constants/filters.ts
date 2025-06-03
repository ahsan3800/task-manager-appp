
export const TaskFilterStates = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete",
} as const;

export type TaskFilter = (typeof TaskFilterStates)[keyof typeof TaskFilterStates];
