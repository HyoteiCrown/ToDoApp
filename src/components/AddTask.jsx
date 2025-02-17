import { useState } from "react";
import {useTheme } from '../ThemeContext'
import PropTypes from "prop-types";
import ButtonMain from "./ButtonMain";
import "../index.css";

function AddTask({ setTodos }) {
  const {isDarkMode}= useTheme()
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
    <section
    className={`flex gap-3 ${
      isDarkMode ? 'bg-background-dark text-tcolor-dark' : 'bg-background text-tcolor'
    }`}>
      <div className="flex gap-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`p-2 border-2 focus:scale-110 transition-all ease-in-out duration-150 rounded-2xl ${isDarkMode ? 'bg-background-dark text-tcolor-dark' : 'bg-background text-tcolor'}`}
          placeholder="New Task"
          type="text"
        />
         <ButtonMain onClick={addTodo}>Add Task</ButtonMain>
       
      </div>
    </section>
  );
}

AddTask.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
export default AddTask;
