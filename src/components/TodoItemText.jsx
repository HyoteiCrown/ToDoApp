import useThemeStore from "../store/themeStore";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const TodoItemText = ({ todo, toggleComplete }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="flex items-center">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded-md border-2 transition-all duration-200
          ${
            isDarkMode
              ? todo.completed
                ? "border-primary-dark bg-accent/20"
                : "border-secondary-dark bg-secondary-dark/20"
              : todo.completed
              ? "border-primary bg-accent/10"
              : "border-secondary bg-secondary/10"
          }
          hover:bg-accent/20
        `}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200
            ${todo.completed ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
          >
            <FaCheck
              className={`w-3 h-3 ${
                isDarkMode ? "text-primary-dark" : "text-primary"
              }`}
            />
          </div>
        </div>
      </label>
      <span
        className={`ml-3 ${todo.completed ? "line-through opacity-60" : ""}`}
      >
        {todo.text}
      </span>
    </div>
  );
};

TodoItemText.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoItemText;
