import { useTheme } from "../ThemeContext";
import PropTypes from "prop-types";
import { getThemeClasses } from "./Header";


const TodoItemText = ({ todo, completeToggle }) => {
  const { isDarkMode } = useTheme();
  const commonClasses = "transition duration-300 ease-in-out p-2";
  const { text } = getThemeClasses(isDarkMode);

  return (
    <div className={`${todo.completed ? "line-through" : ""} ${commonClasses} ${text}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeToggle(todo.id)}
        className={`mr-2.5 ${text}`}
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




