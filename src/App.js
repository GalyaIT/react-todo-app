import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id:uuidv4(), title, completed: false },
      ]
    })
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }      
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  console.log(todos);
  return (
    <div className="todo__app">
      <div className='todo__app-wrapper'>
         <h1 style={{color:"white", textAlign:"center"}}>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/> 
      <h3 style={{color:"white",textAlign:"center"}}>Todo List</h3>     
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>     
    </div>
  );
}

export default App;
