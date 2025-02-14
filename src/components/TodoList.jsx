import { useState, useCallback, useMemo } from "react";
import { useTheme } from "../ThemeContext";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  const { isDarkMode } = useTheme();

  const deleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos, setTodos]
  );

  const completeToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  const sortedTodos = useMemo(() => {
    return [...filteredTodos].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  }, [filteredTodos]);

  const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  return (
    <section
      className={`w-1/2 ${
        isDarkMode
          ? "bg-background-dark text-text-light"
          : "bg-background-light text-text-dark"
      }`}
    >
      <div
        className={`flex flex-col rounded-3xl ${
          isDarkMode ? 'bg-gradient-to-b from-primary-dark to-accent ' : 'bg-gradient-to-b from-primary to-accent '
        } p-4`}
      >
        <h2 className=" sticky text-2xl font-bold">Tasks:</h2>
        <span className="inline-flex rounded-md">
          <button
            className={`${
              isDarkMode
                ? "bg-secondary-dark text-tcolor-dark"
                : "bg-secondary text-tcolor"
            } border-none not-last:py-2 px-4 rounded-l-md focus:bg-accent`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${
              isDarkMode
                ? "bg-secondary-dark text-tcolor-dark"
                : "bg-secondary text-tcolor"
            } border-none not-last:py-2 px-4  focus:bg-accent`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`${
              isDarkMode
                ? "bg-secondary-dark text-tcolor-dark"
                : "bg-secondary text-tcolor"
            } border-none not-last:py-2 px-4 rounded-r-md focus:bg-accent`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </span>
        <ul className="flex flex-col m-10 gap-2">
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              completeToggle={completeToggle}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <button
          onClick={clearTodos}
          className={`p-2 border-none self-end mb-4
                    ${
                      isDarkMode
                        ? `text-tcolor-dark bg-secondary-dark`
                        : `text-tcolor bg-secondary`
                    } hover:bg-background-secondary} hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl`}
        >
          Clear All
        </button>
      </div>
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
