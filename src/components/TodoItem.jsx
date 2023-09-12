import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import {FaRegEdit} from 'react-icons/fa';

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className={completed ? "checked" : "unchecked"}>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />      
      </label>
      <span>{title} </span>
      <div className="icons">
         <button onClick={() => deleteTodo(id)}>
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
