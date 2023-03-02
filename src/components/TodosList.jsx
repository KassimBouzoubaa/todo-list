import React, { useState } from "react";

const TodosList = ({ todos, setTodos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredTodo = todos.filter((todo) =>
    todo.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = ({ id }) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleImportanceChange = (event, todoId) => {
    const newImportance = event.target.value;
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, importance: newImportance };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    
  }

  return (
    <div>
      <div className='search-bar'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Recherchez un Todo'
        />
      </div>
      {filteredTodo.map((todo, i) => (
        <li className={`list-item-${todo.importance}`} key={i}>
          <input
            className='list'
            type='text'
            value={todo.titre}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className='button-complete task-button'
              onClick={() => handleDelete(todo)}
            >
              <i className='fa fa-check-circle'></i>
            </button>
          </div>
            <label>
           <span className="importance">Importance:  </span> 
            <select value={todo.importance} onChange={(event) => handleImportanceChange(event, todo.id)}>
              <option value="faible">Faible</option>
              <option value="moyenne">Moyenne</option>
              <option value="grande">Grande</option>
            </select>
          </label>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
