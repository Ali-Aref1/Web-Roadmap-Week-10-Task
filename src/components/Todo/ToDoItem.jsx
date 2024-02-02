import './ToDoItem.css'
import React from 'react'

const ToDoItem = ({item,items,setItems}) => {
  const handleDelete = () => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };
  return (
    <div id="toDoItem">
      <div id="toDoItemWrapper"><p>{item}</p> <button className="deleteButton" onClick={handleDelete}>Delete</button></div>
      <hr></hr>
      </div>
  )
}

export default ToDoItem