import React from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul className="list">
      {todos?.length === 0 && "No Todos"}
      {todos?.map(todo => {
        return (          
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />         
        )
      })}
    </ul>
  )
}

export default TodoList
