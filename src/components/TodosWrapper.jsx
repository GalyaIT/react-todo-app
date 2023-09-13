import React from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodosWrapper = ({todos, setTodos}) => {

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
  function editTodo(id, updatedTitle) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, updatedTitle }
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
  return (
       <div className='todo__app-wrapper'>
         <h1 style={{color:"white", textAlign:"center"}}>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/> 
      <h3 style={{color:"white",textAlign:"center"}}>Todo List</h3>     
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>     
  )
}

export default TodosWrapper
