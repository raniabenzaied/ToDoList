import React from 'react'
import Todo from './Todo'
const ToDoList = ({todo , deleteHandle , HandleDone}) => {
    console.log('todo' , todo)
  return (
    <div className="tasks">
        {todo.map((e) =>  <Todo  todo = {e} deleteHandle={deleteHandle} HandleDone = {HandleDone}/>)}
    </div>
  )
}

export default ToDoList
