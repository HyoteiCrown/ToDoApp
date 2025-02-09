import PropTypes from "prop-types";
import { useState, useRef } from "react";

function TodoItem({ todo, deleteTodo, editTodo }) {
    const [isEditing,setIsEditing] = useState(false);
    const [editedText, setEditedText]= useState(todo.text)
    const inputRef = useRef(0);

    const handleSave = () =>{
        if(editedText.trim()===''){
            alert('You cant save and empty task');
        } else {
            editTodo(todo.id,editedText);
        setIsEditing(false);
        inputRef.current.focus();
        }
    
    }
    const onEditing = (e) => {
        setEditedText(e.target.value)
        inputRef.current.focus();
        
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSave();
        }
      }

  return (
      <li className="flex justify-between items-center p-2 ">
        {isEditing ? (
            <input id="focus_input" type="text"
            value={editedText}
            onChange={onEditing}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className="p-1 border-2 border-secondary rounded-2xl focus:outline-none focus:ring-accent" />
        ):(<span>{todo.text}</span>)}
          <div className="flex gap-2 ">
            {isEditing ? (
                <button onClick={handleSave} className="p-1 bg-accent text-white rounded hover:bg-accent transform hover:scale-125 transition-all ease-in-out duration-150">
                Save
            </button>
            ):(
                <button onClick={()=>setIsEditing(true)} className='p-1 bg-accent text-white rounded hover:bg-accent transform hover:scale-125 transition-all ease-in-out duration-150'  >Edit</button>
            )}
            
          <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 bg-accent text-white rounded hover:bg-accent transform hover:scale-125 transition-all ease-in-out duration-150"
          >
              Delete
          </button>
          </div>
          
      </li>
  );
}

TodoItem.propTypes ={
    todo: PropTypes.shape({
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        }).isRequired,
        deleteTodo:PropTypes.func.isRequired,
        editTodo:PropTypes.func.isRequired,
    }

export default TodoItem;
