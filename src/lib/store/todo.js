import create from 'zustand';

export const ToDoStore = create((set, get) => ({
  todos: [],
  updateList: (list) => set({ todos: list }),
}));
