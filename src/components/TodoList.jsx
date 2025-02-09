import { useState } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
    setTimeout(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, 700);
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <section className="w-1/2">
      <div className="flex flex-col bg-primary border-0 rounded-2xl p-3">
        <h2 className=" sticky text-2xl font-bold">Tasks:</h2>
        <span className="inline-flex rounded-md">
          <button className="bg-secondary py-2 px-4 rounded-l-md focus:bg-accent" onClick={() => setFilter("all")}>All</button>
          <button className="bg-secondary py-2 px-4 border-x-2 border-background-dark focus:bg-accent" onClick={() => setFilter("active")}>Active</button>
          <button className="bg-secondary py-2 px-4 rounded-r-md focus:bg-accent" onClick={() => setFilter("completed")}>Completed</button>
        </span>
        <ul className="flex flex-col m-10 gap-2">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completeToggle={completeToggle}
            />
          ))}
        </ul>
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
