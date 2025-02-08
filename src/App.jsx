import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
    const [todos, setTodos] = useState([]); 

    return (
        <div className="flex flex-col h-screen bg-background-light text-background-dark">
            <div className="flex flex-col flex-1 bg-primary">
                <Header />
                <main className="flex flex-1 justify-center items-center gap-7">
                    <TodoList todos={todos} setTodos={setTodos} />
                    <AddTask setTodos={setTodos} />
                </main>
                <footer>
                    <p>Copyright 2025</p>
                </footer>
            </div>
        </div>
    );
}

export default App;