
import PropTypes from 'prop-types';
import useTodoStore  from '../store/todoStore';
import useThemeStore from '../store/themeStore';

const ButtonMain = ({ onClick }) => {
  const { isActive, isMoving } = useTodoStore();
  const {isDarkMode} = useThemeStore();

  return (
    <div>
      <button
        onClick={onClick}
        className={`
          w-12 h-12 ${isDarkMode ? `bg-primary hover:bg-gradient-to-tr from-primary-dark to-accent-dark transition-colors duration-500 `  : `bg-primary-dark hover:bg-gradient-to-tr from-primary to-accent transition-colors duration-500 `} rounded-full text-white flex items-center justify-center relative group hover:bg-gradient-to-tr from-primary-dark to-accent-dark transition-colors duration-500 hover:scale-110 ${isMoving ? "translate-x-7 transition-transform  duration-500 ease bg-red-500 group-hover:bg-gradient-to-tr from-red-500 to-accent" : "translate-x-0 transition-transform duration-500"}`}
      >
        <span
          className={`
    absolute 
    w-1 
    h-6 
    bg-white
    transition-transform 
    duration-300
    ${isActive ? "rotate-45" : "rotate-0"}
   `}
        ></span>
        <span
          className={`
      absolute 
      w-1 
      h-6 
      bg-white 
      transition-transform 
      duration-300
      ${isActive ? "rotate-[-45deg]" : "rotate-90"}
      `}
        ></span>
      </button>
    </div>
  );
};
ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isInputActive: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  closeTodo: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isMoving: PropTypes.bool.isRequired
  };
export default ButtonMain;