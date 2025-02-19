export const getThemeClasses = (isDarkMode) => ({
  bg: isDarkMode ? "bg-background-dark" : "bg-background-light",
  text: isDarkMode ? "text-tcolor-dark" : "text-tcolor",
});
