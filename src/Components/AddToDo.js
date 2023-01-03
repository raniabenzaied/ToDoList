import React from 'react'
import {useState} from 'react'
const AddToDo = ({handleAdd}) => {
    const [input,setInput] = useState('')
    const AddTodo = () => {
        handleAdd ({
            isDone : false , 
            id : Math.random() , 
            text : input 

        })
    }

  return (
    <div className="task">
      <input type = 'text' placeholder='please enter a new todo' onChange={(e) =>setInput (e.target.value)}/>
      <button  onClick={() => AddTodo()}>Add</button>
    </div>
  )
}

export default AddToDo
