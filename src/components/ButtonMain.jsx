import PropTypes from "prop-types";
import {useTheme} from "../ThemeContext";


const ButtonMain = ({ children, onClick }) => {
    const { isDarkMode } = useTheme();
    return (
        <button className={`p-2 border-none hover:transform hover:scale-110 transition-all ease-in-out duration-150 rounded-2xl ${
            isDarkMode
              ? "text-tcolor-dark bg-secondary-dark hover:bg-background-dark"
              : "text-tcolor bg-secondary hover:bg-secondary"
          }`} onClick={onClick}>{children}</button>
    );
};


ButtonMain.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonMain;
