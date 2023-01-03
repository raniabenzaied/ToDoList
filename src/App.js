import React, { useState } from 'react'
import ToDoList from './Components/ToDoList'
import AddToDo from './Components/AddToDo'
import './styles.css'




const App = () => {
const [todo,setTodo] = useState([
  {text : 'Read a book ' , id : 1 , isDone : false},
  {text : 'Morning Walk ' , id : 2 , isDone : false},
  {text : 'Finish the assignment ' , id : 3 , isDone : false},

])

const deleteHandle = (ID) => {
  setTodo( todo.filter ((e) => e.id !==ID))
}

//partie done
const HandleDone  = (ID) => {
  setTodo (todo.map ((el) => el.id === ID ? {...el,isDone : !el.isDone } : el ) )
}
  //partie add a new to do 
  const handleAdd = (newTodo) => {
    setTodo([...todo,newTodo])
  }



  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      
      <ToDoList  todo = {todo}  deleteHandle={deleteHandle}  HandleDone = {HandleDone} />
    
      <hr/>
      <p>Add a To Do</p>
      <div className="create-task">
      <AddToDo handleAdd = {handleAdd}/>
      </div>
    </div>
  )
}

export default App

