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
      className={`w-1/2 overflow-hidden transition-colors duration-150 ${
        isDarkMode
          ? "bg-background-dark text-text-light"
          : "bg-background-light text-text-dark"
      }`}
    >
      <div
        className={`flex flex-col rounded-3xl transition-colors duration-150 ${
          isDarkMode
            ? "bg-gradient-to-b from-primary-dark to-accent"
            : "bg-gradient-to-b from-primary to-accent"
        } pt-0 p-4 h-[70vh] overflow-y-auto relative mb-4`}
      >
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
      <button
        onClick={clearTodos}
        className={`p-2 px-4 border-none flex items-center gap-2 text-sm ml-auto relative overflow-hidden rounded-xl
                  transition-colors duration-150
                  ${
                    isDarkMode
                      ? "text-tcolor-dark bg-secondary-dark"
                      : "text-tcolor bg-secondary"
                  }
                  before:absolute before:inset-0 before:transition-transform before:duration-300
                  before:-translate-x-full hover:before:translate-x-0
                  hover:-translate-y-0.5
                  ${isDarkMode ? "before:bg-accent/80" : "before:bg-accent/60"}
                  `}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          <FaTrashAlt /> Clear All
        </span>
      </button>
    </section>
  );
}

export default TodoList;
