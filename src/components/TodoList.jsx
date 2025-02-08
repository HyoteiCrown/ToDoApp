import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

 function TodoList({ todos, setTodos }) {
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)); 
    };

    return (
        <section className="w-1/2">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Tasks:</h2>
                <ul className="flex flex-col gap-2">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        })).isRequired,
        setTodos: PropTypes.func.isRequired

};

export default TodoList;