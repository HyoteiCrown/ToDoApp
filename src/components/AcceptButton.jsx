import PropTypes from "prop-types";
import useTodoStore from "../store/todoStore";
import useThemeStore from "../store/themeStore";


export default function AcceptButton({ onClick }) {
  const { isInputActive, isMoving, isActive } = useTodoStore();
  const { isDarkMode } = useThemeStore();
  

  return (
    <button
      onClick={onClick}
      className={`relative rounded-full
                before:-translate-x-full 
        ${
          isInputActive 
            ? "w-12 h-12 ml-[-2rem] mr-10" 
            : "opacity-0 pointer-events-none"
        }
        ${
          isDarkMode
            ? "text-tcolor-dark bg-secondary-dark"
            : "text-tcolor bg-secondary"
        }
        ${
          isDarkMode
            ? `hover:bg-gradient-to-br from-primary-dark to-accent-dark ease-in-out hover:scale-110 transition-transform duration-300 `
            : `hover:bg-gradient-to-br from-primary to-accent scale-110 transition-transform duration-300`
        }
        ${
          isMoving
            ? "translate-x-10 transition-transform duration-500 ease"
            : "translate-x-0 transition-transform duration-300"
        }`}
    >
      <span
        className={`absolute left-4/10 top-2/5 w-1 h-3  bg-tcolor-dark transform -translate-x-1/2 rotate-45 -translate-y-1/2 transition-all duration-300 ${
          isActive ? "rotate-[-45deg] translate-y-1/4" : "rotate-45"
        }`}
      ></span>

      <span
        className={`absolute top-2/5 right-1/3 w-1 h-5 bg-tcolor-dark transform -translate-x-1/2 rotate-[-45deg] -translate-y-1/2 transition-all duration-300 ${ isActive ? "rotate-[45deg] -translate-y-1/4" : "-rotate-45"
        }`}
      ></span>
    </button>
  );
}
AcceptButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isInputActive: PropTypes.bool.isRequired,
};
