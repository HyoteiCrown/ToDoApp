import PropTypes from "prop-types";

function TodoItem({ todo, deleteTodo }) {
  return (
      <li className="flex justify-between items-center p-2 border-2 border-black">
          <span>{todo.text}</span>
          <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transform hover:scale-105 transition-all ease-in-out duration-150"
          >
              Delete
          </button>
      </li>
  );
}

TodoItem.propTypes ={
    todo: PropTypes.shape({
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        }).isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

export default TodoItem;
