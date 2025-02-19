import { useState } from 'react';
import ButtonMain from './ButtonMain';
import '../index.css';
import useTodoStore from '../store/todoStore';
import useThemeStore from '../store/themeStore';
import { getThemeClasses } from '../utils/themeUtils';

function AddTask() {
  const { isDarkMode } = useThemeStore();
  const theme = getThemeClasses(isDarkMode);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state)=> state.addTodo);

  const handleAddTodo =() =>{
    if (newTodo.trim() === ""){
      alert("You can't add an empty task");
      return;
    }
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    addTodo(todo);
    setNewTodo("");
  }

  return (
    <section className="flex gap-3">
      <div className="flex gap-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`p-2 border-2 rounded-2xl transition-colors duration-150
            ${theme.bg} ${theme.text}
            ${isDarkMode ? 'border-secondary-dark' : 'border-secondary'}
            focus:scale-110
          `}
          placeholder="New Task"
          type="text"
        />
        <ButtonMain onClick={handleAddTodo}>Add Task</ButtonMain>
      </div>
    </section>
  );
}

export default AddTask;