
import PropTypes from 'prop-types'
import useTodoStore from '../store/todoStore';
import useThemeStore from '../store/themeStore';
import {getThemeClasses } from '../utils/themeUtils';

const InputField = ({ value, onChange,placeholder }) => {
    const {isInputActive} = useTodoStore(); 
    const {isDarkMode } = useThemeStore();
    const theme = getThemeClasses(isDarkMode);
  return (
    <div
        className={`transition-opacity duration-500 transform ${isInputActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} ${isInputActive ? "visible" : "invisible"}`}
      >
        {isInputActive && (
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`p-2 w-2xs border-2 rounded-2xl transition-colors duration-150
                ${theme.bg} ${theme.text}
                ${isDarkMode ? 'border-secondary-dark' : 'border-secondary'}
                focus:scale-110
              `}
          />
        )}
      </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  isInputActive: PropTypes.bool.isRequired
};




export default InputField;