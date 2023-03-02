import Form from './components/Form';
import Header from './components/Header'
import {useEffect, useState} from 'react'
import TodosList from './components/TodosList';
import "./App.css"


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
 const parsedTodos = JSON.parse(storedTodos);
  if (parsedTodos) {
    setTodos(parsedTodos);
  }  
  }, [])
  const handleDelete = () => {
    setTodos([])
    localStorage.clear()

  }
  

  return (
    <div className='container'>
      
      <div className='app-wrapper'>
        <div>
      <Header />
        </div>
        <div>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} />
       
        </div>
        {todos.length ? <div className='btn-delete-pl'>
        <button
        className='btn-delete'
        type='submit'
        onClick={() => handleDelete()}
      >
        Tout supprimer
      </button>
        </div> : ""}
        
      </div>
   
    </div>
    
  );
}

export default App;
