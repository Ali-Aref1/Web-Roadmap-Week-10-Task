import './ToDoInput.css'
import React from 'react'

const ToDoInput = ({items, setItems}) => {
const [input, setInput] = React.useState('')

  return (
    <div id="Todowrapper">
        <input type="text" id="addTodo" placeholder="Add Todo..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button id="submit" onClick={()=>{
          if(input !== ''){
          setItems([...items,input])
          setInput('')
          }
        }}>Submit</button>
    </div>
  )
}

export default ToDoInput
 
      