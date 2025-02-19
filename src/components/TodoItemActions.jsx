import PropTypes from "prop-types";
import ButtonCircle from "./ButtonCircle";
import { FaRegEdit, FaTrashAlt, FaRegSave } from "react-icons/fa";

function TodoItemActions({ todo, deleteTodo, setIsEditing, isEditing }) {
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex gap-2">
      {isEditing ? (
        <ButtonCircle onClick={handleSave}>
          <FaRegSave />
        </ButtonCircle>
      ) : (
        <ButtonCircle onClick={() => setIsEditing(true)}>
          <FaRegEdit />
        </ButtonCircle>
      )}
      <ButtonCircle onClick={() => deleteTodo(todo.id)}>
        <FaTrashAlt />
      </ButtonCircle>
    </div>
  );
}

TodoItemActions.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default TodoItemActions;
