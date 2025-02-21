import { useState } from 'react';
import InputField from './InputField';
import AcceptButton from './AcceptButton';
import ButtonMain from './ButtonMain';
import useTodoStore from '../store/todoStore';



function AddTask() {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const { isActive, setIsMoving, setIsActive, setIsInputActive } = useTodoStore();


  function handleClick(){
    setIsActive(!isActive);
    setIsMoving((prev) => !prev);
    setIsInputActive((prev) => !prev);
  }

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
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
  };

  function closeTodo(){
    setNewTodo('');
    setIsActive(false);
    setIsMoving(false);
    setIsInputActive(false);
  }

  return (
    <section className="flex items-center gap-2 justify-center">
      <div className="flex gap-3">
        <InputField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Task"
        />
        <AcceptButton onClick={handleAddTodo} />
        <ButtonMain onClick={isActive ? closeTodo : handleClick}></ButtonMain>
      </div>
    </section>
  );
}

export default AddTask;