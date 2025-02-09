import PropTypes from "prop-types";
import { useState, useRef } from "react";

function TodoItem({ todo, deleteTodo, editTodo, completeToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleSave = () => {
    if (editedText.trim() === "") {
      alert("You can't save an empty task");
    } else {
      editTodo(todo.id, editedText);
      setIsEditing(false);
      inputRef.current.focus();
    }
  };

  const onEditing = (e) => {
    setEditedText(e.target.value);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <li className="flex justify-between items-center p-2 border-b-2 border-secondary w-full ">
      {isEditing ? (
        <input
          id="focus_input"
          type="text"
          value={editedText}
          onChange={onEditing}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="p-1  animate-pulse rounded-2xl focus:outline-none "
        />
      ) : (
        <div
          className={
            todo.completed
              ? "line-through text-decoration-solid text-decoration-thickness-2 align-middle transition duration-300 ease-in-out p-2 "
              : "transition duration-300 ease-in-out  p-2 "
          }
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeToggle(todo.id)}
            className="mr-2.5"
          />
          {todo.text}
        </div>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="p-2 border-2 
                    text-white border-secondary bg-secondary hover:bg-background-secondary hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 border-2 
                    text-white border-secondary bg-secondary hover:bg-background-secondary hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 border-2 
                    text-white border-secondary bg-secondary hover:bg-background-secondary hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
