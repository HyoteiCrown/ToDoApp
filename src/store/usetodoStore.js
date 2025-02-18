import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
    newTodo: "",
    addTodo: ()=>set((state)=>{
        if(state.newTodo.trim() === ""){
            alert("You can't add an empty task");
            return state;
        }
        const todo = {
            id: Date.now(),
            text: state.newTodo,
            completed: false,
        };
        const updatedTodos = [...state.todos, todo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return {
            todos: [...state.todos, todo],
            newTodo: "",
        };
    }),
    setNewTodo: (text) => set({ newTodo: text }),
    editingTodoId: null,
    editedText: "",
    setEditingTodoId: (id, text) => set({ editingTodoId: id, editedText: text }),
    clearEditingTodo: () => set({ editingTodoId: null, editedText: "" }),

}));

export default useTodoStore;
