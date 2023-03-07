import React from "react";
import { nanoid } from 'nanoid';


const Form = ({ input, setInput, todos, setTodos }) => {

  

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {id: nanoid(), titre: input, etat: false, importance: "faible"};
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setInput("");
    console.log(todos);
  }


  return (
    <form  onSubmit={onFormSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='Créez un Todo...'
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
        maxLength={50} 
      />
      <button
        className='button-add'
        type='submit'
      >
        Ajouter
      </button>
    </form>
  );
};

export default Form;
