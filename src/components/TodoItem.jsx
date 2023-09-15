import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({completed, id, title, toggleTodo, deleteTodo, editTodo}) => {
  const [value, setValue] = useState(false);

  const handleDelete = () => {
    setValue(!value);
  };
  useEffect(() => {
    document.body.style.overflow = value ? "hidden" : "unset";
  }, [value]);


  return (
    <>
      <li className={completed ? "checked fade" : "unchecked fade"}>
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={completed}
            onChange={(e) => toggleTodo(id)}
          />
          <span>{title} </span>
        </label>

        <div className='icons'>
          <button onClick={() => editTodo(id)}>
            <FaRegEdit />
          </button>
          <button onClick={handleDelete}>
            <RiDeleteBinLine />
          </button>
        </div>
      </li>
      {value && (
        <div className='warning-wrapper'>
          <div className='warning-box'>
            <p>Are you sure want to delete?</p>
            <div className='warning-box-buttons'>
              <button onClick={() => deleteTodo(id)}>Yes</button>
              <button onClick={handleDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
