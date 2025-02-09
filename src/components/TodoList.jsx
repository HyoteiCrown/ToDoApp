import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

 function TodoList({ todos, setTodos }) {
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)); 
    };
    const editTodo = (id, newText) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, text: newText };
            }
            return todo;
          })
        );
      };

    return (
        <section className="w-1/2">
            <div className="flex flex-col gap-2">
                <h2 className=" sticky text-2xl font-bold">Tasks:</h2>
                <ul className="flex flex-col m-10 gap-2">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
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