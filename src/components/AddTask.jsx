import { useTheme } from '../ThemeContext';
import ButtonMain from './ButtonMain';
import '../index.css';
import useTodoStore from '../store/usetodoStore'; // Импортируем хранилище Zustand

function AddTask() {
  const { isDarkMode } = useTheme();
  const { newTodo, setNewTodo, addTodo } = useTodoStore(); // Используем Zustand

  return (
    <section
      className={`flex gap-3 ${
        isDarkMode ? 'bg-background-dark text-tcolor-dark' : 'bg-background text-tcolor'
      }`}
    >
      <div className="flex gap-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`p-2 border-2 focus:scale-110 transition-all ease-in-out duration-150 rounded-2xl ${
            isDarkMode ? 'bg-background-dark text-tcolor-dark' : 'bg-background text-tcolor'
          }`}
          placeholder="New Task"
          type="text"
        />
        <ButtonMain onClick={addTodo}>Add Task</ButtonMain>
      </div>
    </section>
  );
}

export default AddTask;