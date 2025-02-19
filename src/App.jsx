import { useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import useTodoStore from "./store/todoStore";
import useThemeStore from "./store/themeStore";
import { getThemeClasses } from "./utils/themeUtils";

function App() {
  const { isDarkMode } = useThemeStore();
  const { todos } = useTodoStore();
  const theme = getThemeClasses(isDarkMode);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className={`flex flex-col h-screen transition-colors duration-150 ${theme.bg} ${theme.text}`}
    >
      <div className="flex flex-col flex-1 transition-colors duration-150">
        <Header />
        <main
          className={`flex flex-1 flex-col justify-center items-center gap-7 transition-colors duration-150 ${theme.bg}`}
        >
          <AddTask />
          <TodoList />
        </main>
        <footer
          className={`transition-colors duration-150 ${theme.bg} ${theme.text}`}
        >
          <p>Copyright 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
