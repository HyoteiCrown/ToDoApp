import PropTypes from "prop-types";
import { useState, useRef } from "react";
import TodoItemText from "./TodoItemText";
import TodoItemActions from "./TodoItemActions";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef(null);

  const onEditing = (e) => {
    setEditedText(e.target.value);
    inputRef.current.focus();
  };

  const handleEdit = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center p-2 border-b-2 text-tcolor w-full`}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={editedText}
          onChange={onEditing}
          onBlur={handleEdit}
          className="animate-pulse rounded-2xl focus:outline-none"
        />
      ) : (
        <TodoItemText todo={todo} toggleComplete={toggleComplete} />
      )}
      <TodoItemActions
        todo={todo}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        deleteTodo={deleteTodo}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
