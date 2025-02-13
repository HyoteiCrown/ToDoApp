import {useState } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  

  const deleteTodo= (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const sortedTodos =[...filteredTodos].sort((a,b) =>{
    if(a.completed === b.completed) return 0;
    return a.completed ? 1: 
    -1;
  });

  const clearTodos = ()=>{
    setTodos([]);
    localStorage.removeItem('todos')
}



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
                onClick={clearTodos} className="p-2 border-2 self-end mb-4
                    text-white border-secondary bg-secondary hover:bg-background-secondary hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl">Clear All</button>
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
