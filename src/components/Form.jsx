import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {id: todos.length +1, titre: input, etat: false, importance: "faible"};
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setInput("");
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
