import { useState } from "react";
import PropTypes from "prop-types";
import "../index.css";

function AddTask({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("You can't add an empty task");
      return;
    }
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo("");
  };

  return (
    <section>
      <div className="flex gap-3">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="p-2 border-2 border-black bg-white focus:scale-110 transition-all ease-in-out duration-150 rounded-2xl"
          placeholder="New Task"
          type="text"
        />
         <button
          onClick={addTodo}
          className="p-2 border-2 
                    text-white border-secondary bg-secondary hover:bg-background-secondary hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl"
        >
          Add Task
        </button>
       
      </div>
    </section>
  );
}

AddTask.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
export default AddTask;
