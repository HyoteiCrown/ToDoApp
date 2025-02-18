import useThemeStore from '../store/themeStore';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const getThemeClasses = (isDarkMode) => ({
  bg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  text: isDarkMode ? 'text-white' : 'text-gray-800'
});

export default function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { bg, text } = getThemeClasses(isDarkMode);

  return (
    <header className={`flex justify-center items-center h-20 ${bg} ${text}`}>
      <h1 className={`text-3xl font-bold ${bg} ${text}`}>ToDoApp</h1>
      <button
        type="button"
        onClick={toggleTheme}
        className={`ml-4 text-sm ${bg} ${text} hover:opacity-80 transition-all duration-300 flex items-center gap-2`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};



