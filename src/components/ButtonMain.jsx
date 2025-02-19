import PropTypes from "prop-types";
import useThemeStore from "../store/themeStore";

const ButtonMain = ({ children, onClick }) => {
  const { isDarkMode } = useThemeStore();
  return (
    <button
      className={`px-4 py-2 border-none rounded-xl relative overflow-hidden transition-all duration-200
                ${
                  isDarkMode
                    ? "text-tcolor-dark bg-secondary-dark"
                    : "text-tcolor bg-secondary"
                }
                before:absolute before:inset-0 before:transition-transform before:duration-300
                before:-translate-x-full hover:before:translate-x-0
                hover:-translate-y-0.5
                ${isDarkMode ? "before:bg-accent/80" : "before:bg-accent/60"}
            `}
      onClick={onClick}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonMain;
