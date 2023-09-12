import React, {useState, useEffect} from 'react';
import './App.css';
import TodosWrapper from './components/TodosWrapper';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo__app">      
      <TodosWrapper todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
