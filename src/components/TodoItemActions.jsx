import { useCallback } from "react";
import PropTypes from "prop-types";
import ButtonMain from "./ButtonMain";

const TodoItemActions = ({
  todo,
  deleteTodo,
  setIsEditing,
  editTodo,
  editedText,
  inputRef,
  isEditing,
}) => {
  const handleSave = useCallback(() => {
    if (editedText.trim() === "") {
      alert("You can't save an empty task");
    } else {
      editTodo(todo.id, editedText);
      setIsEditing(false);
      inputRef.current.focus();
    }
  }, [editedText, editTodo, todo.id, setIsEditing, inputRef]);

  return (
    <div className="flex gap-2">
      {isEditing ? (
        <ButtonMain
        onClick={handleSave}
        >Save</ButtonMain>
      ) : (
      <ButtonMain
        onClick={() => setIsEditing(true)}
        >Edit</ButtonMain>
      )}
      <ButtonMain 
       onClick={() => deleteTodo(todo.id)}>Delete</ButtonMain>
    </div>
  );
};

TodoItemActions.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  editedText: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default TodoItemActions;
