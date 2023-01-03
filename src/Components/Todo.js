import React from 'react'

const Todo = ({todo , deleteHandle , HandleDone}) => {
    console.log('todo 2' ,todo) ; 
   
   //partie delete
    const deleteToDo = () => {
        deleteHandle(todo.id)
    }
    const Done =() => {
        HandleDone(todo.id)
    }

  return (
    <div  className="task">
      <ul>
          <li>{todo.text}</li> 


          <button onClick={() =>deleteToDo()}>Delete</button>  


          <button  onClick={()=>Done()}>{todo.isDone ? 'yaaaay its done ' : 'Done'}  </button>


      </ul>
    </div>
  )
}

export default Todo
