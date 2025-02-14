import { useEffect, useState } from "react";
import {useTheme} from './ThemeContext';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
    const {isDarkMode} = useTheme();
    const [todos, setTodos] = useState(()=>{
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : []
    }); 


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos), []);
    })

    

    return (
        <div className={`flex flex-col h-screen ${
            isDarkMode ? 'bg-background-dark text-text-light' : 'bg-background-light text-text-dark'
          }`}>
            <div className="flex flex-col flex-1 bg-background-light">
                <Header />
                <main className="flex flex-1 flex-col justify-center items-center gap-7">
                    <AddTask setTodos={setTodos} /> 
                    
                    <TodoList todos={todos} setTodos={setTodos} />
                </main>
                <footer>
                    <p>Copyright 2025</p>
                </footer>
            </div>
        </div>
    );
}

export default App;