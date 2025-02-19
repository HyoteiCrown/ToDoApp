import useThemeStore from "../store/themeStore";
import { FaSun, FaMoon } from "react-icons/fa";
import { getThemeClasses } from "../utils/themeUtils";

export default function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const theme = getThemeClasses(isDarkMode);

  return (
    <header
      className={`flex justify-center items-center h-20 transition-colors duration-150 ${theme.bg}`}
    >
      <h1
        className={`text-3xl font-bold transition-colors duration-150 ${theme.text}`}
      >
        ToDoApp
      </h1>
      <button
        onClick={toggleTheme}
        className={`ml-6 p-3 rounded-full
          flex items-center justify-center
          transition-all duration-200
          group
          ${
            isDarkMode
              ? "bg-secondary-dark text-primary-dark hover:text-tcolor"
              : "bg-secondary text-primary hover:text-tcolor"
          }
          hover:-translate-y-[2px]
        `}
      >
        {isDarkMode ? (
          <FaSun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
        ) : (
          <FaMoon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
        )}
      </button>
    </header>
  );
}
