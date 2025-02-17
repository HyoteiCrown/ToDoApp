import PropTypes from "prop-types";
import { useState, useRef } from "react";
import TodoItemText from "./TodoItemText";
import TodoItemActions from "./TodoItemActions";

function TodoItem({ todo, deleteTodo, completeToggle, handleSave, editTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef(null);

  
  const onEditing = (e) => {
    setEditedText(e.target.value);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave(editedText);
      setIsEditing(false);
    }
  };

  return (
    <li
      className={`flex justify-between items-center p-2 border-b-2 text-tcolor w-full`}
    >
      {isEditing ? (
        <input
          id="focus_input"
          type="text"
          value={editedText}
          onChange={onEditing}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="animate-pulse rounded-2xl focus:outline-none"
        />
      ) : (
        <TodoItemText todo={todo} completeToggle={completeToggle} />
      )}
      <TodoItemActions todo={todo} deleteTodo={deleteTodo} setIsEditing={setIsEditing} editTodo={editTodo} editedText={editedText} inputRef={inputRef} isEditing={isEditing}/>
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
  handleSave: PropTypes.func.isRequired,
};

export default TodoItem;
