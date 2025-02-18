import PropTypes from "prop-types";
import { useRef } from "react";
import TodoItemText from "./TodoItemText";
import TodoItemActions from "./TodoItemActions";
import useTodoStore from "../store/usetodoStore";

function TodoItem({ todo, deleteTodo, completeToggle, handleSave, editTodo }) {

const { editingTodoId, editedText, setEditingTodo, clearEditingTodo } = useTodoStore();
const isEditing = editingTodoId == todo.id;
const inputRef = useRef(null);


  
  const onEditing = (e) => {
    setEditingTodo(todo.id,e.target.value);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave(editedText);
      clearEditingTodo();
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
      <TodoItemActions todo={todo} deleteTodo={deleteTodo} setIsEditing={()=>setEditingTodo(todo.id,todo.text)} editTodo={editTodo} editedText={editedText} inputRef={inputRef} isEditing={isEditing}/>
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
