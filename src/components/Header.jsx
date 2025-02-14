import { useTheme } from '../ThemeContext';

export default function Header() {

  const {toggleTheme,isDarkMode} = useTheme();


  return (
      <header className={`flex justify-center items-center h-20 ${
        isDarkMode ? 'bg-background-dark text-tcolor-dark' : 'bg-background text-tcolor'
      }`}>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-tcolor-dark bg-background-dark' : 'text-tcolor bg-background'}`}>
          ToDoApp</h1>
          <button onClick={toggleTheme} className={`ml-4 text-sm ${isDarkMode? 'bg-background-dark text-tcolor-dark' : 'bg-background'} hover:bg-${isDarkMode? 'bg-background-dark' : 'bg-background '} transition-all duration-300`}>Toggle {isDarkMode? 'Light' : 'Dark'} Mode</button>
      </header>
  );
}