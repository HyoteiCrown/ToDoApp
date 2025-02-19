import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  addTodo: (todo) =>
    set((state) => {
      const newTodos = [...state.todos, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
  deleteTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
  toggleComplete: (id) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
  editTodo: (id, text) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
  clearTodos: () =>
    set(() => {
      localStorage.removeItem("todos");
      return { todos: [] };
    }),
}));

export default useTodoStore;
