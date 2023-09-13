import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import {FaRegEdit} from 'react-icons/fa';

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo, editTodo}) => {
  
  return (
    <li className={completed ? "checked" : "unchecked"}>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id)}
        />      
      </label>
      <span>{title} </span>
      <div className="icons">
         <button onClick={() => editTodo(id)}>
        <FaRegEdit color='white' />
      </button>
      <button onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine color='white' />
      </button>
      </div>
     
    </li>
  );
};

export default TodoItem;
