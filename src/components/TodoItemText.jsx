import { useTheme } from "../ThemeContext";
import PropTypes from "prop-types";


const TodoItemText = ({ todo, completeToggle }) => {
  const { isDarkMode } = useTheme();

  return (
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
    className={`mr-2.5 ${isDarkMode ? `text-tcolor-dark` : `text-tcolor`}`}
  />
  {todo.text}
</div>
);
};

TodoItemText.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeToggle: PropTypes.func.isRequired,
};

export default TodoItemText;




