import { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "../store/todoStore";
import useThemeStore from "../store/themeStore";
import { FaTrashAlt } from "react-icons/fa";

function TodoList() {
  const [filter, setFilter] = useState("all");
  const { isDarkMode } = useThemeStore();
  const { todos, clearTodos, toggleComplete, deleteTodo, editTodo } =
    useTodoStore();
  const listRef = useRef(null);

  const filteredTodos = todos
    .sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return b.id - a.id;
    })
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

  return (
    <section
      className={`flex flex-col justify-center items-center w-full mt-10 overflow-hidden transition-colors duration-150 ${
        isDarkMode
          ? "bg-background-dark text-text-light"
          : "bg-background-light text-text-dark"
      }`}
    >
      <div
        className={`flex flex-col w-1/2 h-[70vh] rounded-3xl transition-colors duration-150 ${
          isDarkMode
            ? "bg-gradient-to-b from-primary-dark to-accent"
            : "bg-gradient-to-b from-primary to-accent"
        } pt-0 p-4 overflow-hidden relative mb-4`}
      >
        <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-accent scrollbar-track-background">
          <div className="sticky top-0 z-20 pb-2 backdrop-blur-sm bg-opacity-70 bg-transparent w-full -mx-4 px-4">
            <h2 className="p-4 text-2xl font-bold text-tcolor">Tasks:</h2>
            <span className="inline-flex rounded-md mt-2">
              <button
                className={`transition-colors duration-150 ${
                  isDarkMode
                    ? `text-tcolor-dark bg-secondary-dark`
                    : `text-tcolor bg-secondary`
                } border-none not-last:py-2 px-4 rounded-l-md focus:bg-accent`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`transition-colors duration-150 ${
                  isDarkMode
                    ? `text-tcolor-dark bg-secondary-dark`
                    : `text-tcolor bg-secondary`
                } border-none not-last:py-2 px-4 focus:bg-accent`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`transition-colors duration-150 ${
                  isDarkMode
                    ? `text-tcolor-dark bg-secondary-dark`
                    : `text-tcolor bg-secondary`
                } border-none not-last:py-2 px-4 rounded-r-md focus:bg-accent`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </span>
          </div>
          <ul className="flex flex-col m-10 gap-2" ref={listRef}>
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`transform transition-all duration-200
                  ${
                    todo.completed
                      ? "translate-x-2 opacity-70"
                      : "translate-x-0 opacity-100"
                  }
                  animate-slideInDown
                  hover:scale-[1.02]
                  group
                `}
              >
                <div className="transition-all duration-200 group-hover:shadow-lg group-hover:shadow-accent/10 rounded-xl">
                  <TodoItem
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end w-1/2 mb-4">
        <button
          onClick={clearTodos}
          className={`transition-colors duration-150 p-2 ${isDarkMode ? `text-tcolor-dark bg-secondary-dark` : `text-tcolor bg-secondary`} border-none not-last:py-2 px-4 rounded-md focus:bg-accent hover:bg-gradient-to-tr from-primary-dark to-accent-dark transition-colors duration-500 hover:scale-110`}
        >
          <span className="relative flex gap-2">
            <FaTrashAlt /> Clear All
          </span>
        </button>
      </div>
    </section>
  );
}

export default TodoList;
