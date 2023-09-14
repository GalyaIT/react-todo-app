import React from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodosWrapper = ({todos, setTodos}) => {



  const addTodo=(title)=> {
    setTodos([
      ...todos,
      { id:uuidv4(), title, completed: false, edited:false },
    ]);   
  }

  const toggleTodo = (id)=>{
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );  
  }


const editTodo =(id)=>{
  setTodos(
    todos.map((todo)=>todo.id===id ?{
...todo,edited:!todo.edited}: todo)
  )
}


  const editTask =(title, id)=>{

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, edited: !todo.edited} : todo
      )
    );
  }

const deleteTodo =(id)=>{
  setTodos(
    todos.filter(todo=>todo.id!==id)
  )
}

  return (
       <div className='todo__app-wrapper'>
         <h1 style={{color:"white", textAlign:"center", marginBottom:"20px"}}>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/> 
      <h3 style={{color:"white",textAlign:"center",marginBottom:"20px", marginTop:"20px"}}>Todo List</h3>     
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask}/>
      </div>     
  )
}

export default TodosWrapper
