import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
    const [todos, setTodos] = useState(()=>{
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : []
    }); 

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos), []);
    })

    

    return (
        <div className="flex flex-col h-screen bg-background-light text-background-dark">
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