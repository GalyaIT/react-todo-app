import React from 'react'
import TodoItem from './TodoItem'
import TodoEditForm from './TodoEditForm'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, editTask }) => {

  return (
    <ul className="list">
      {todos?.length === 0 && "No Todos"}
      {todos?.map(todo => {       
        if(todo.edited){        
          return <TodoEditForm  key={todo.id} onSubmit={editTask} todo={todo}/>
        }else{
          return (                      
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />         
        )}        
      })}
    </ul>
  )
}

export default TodoList
