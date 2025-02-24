import PropTypes from "prop-types";
import useThemeStore from "../store/themeStore";

const ButtonCircle = ({ children, onClick }) => {
    const { isDarkMode } = useThemeStore();
    return (
        <button 
            className={`p-2 border-none rounded-full w-9 h-9 flex items-center justify-center relative overflow-hidden
                ${isDarkMode ? "text-tcolor-dark bg-secondary-dark" : "text-tcolor bg-secondary"}
                transition-all duration-300 ease-in-out
                hover:bg-accent hover:shadow-lg hover:-translate-y-1
            `} 
            onClick={onClick}
        >
            <span className="relative z-10 hover:rotate-12">
                {children}
            </span>
        </button>
    );
};

ButtonCircle.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonCircle; 