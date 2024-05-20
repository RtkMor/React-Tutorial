import { useEffect, useState } from 'react'
import React from 'react'

import {useTodo} from '../contexts'

function TodoItem( {todo} ) {

  const {updateTodo, deleteTodo, toggleComplete} = useTodo();

  const [isEditable, setIsEditable] = useState(false)

  const [todoCompleted, setTodoCompleted] = useState(todo.completed)

  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
    setTodoCompleted(!todoCompleted)
    setIsEditable(false)
    setTodoMsg(todo.todo)
  }

  const editBtnClicked = () => {
    setIsEditable(true)
  }

  const deleteTodoBtn = () => {
    deleteTodo(todo.id)
  }

  return (
      <div className={`input-group mb-2`}>
        
        {/* Toggle Complete Button */}
        <div className={`input-group-text ${todoCompleted ? "bg-success" : ""}`}>
          <input 
          checked={todoCompleted}
          onChange={toggleCompleted}
          className="form-check-input mt-0" type="checkbox" />
        </div> 

        {/* Input Field Of Todo Message */}
        <input type="text"
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`form-control ${todoCompleted ? "text-decoration-line-through bg-success" : ""}`} value={todoMsg} readOnly={!isEditable} />

        {/* Edit Button */}
        {!todoCompleted && !isEditable && <button 
        onClick={editBtnClicked}
        className="btn btn-secondary"> Edit </button> }

        {/* Save Button */}
        {!todoCompleted && isEditable && <button 
        onClick={editTodo}
        className="btn btn-success"> Save </button> }

        {/* Delete Button */}
        {<button 
        onClick={deleteTodoBtn}
        className="btn btn-danger" type="button">Delete</button>}

      </div>
  )
}

export default TodoItem
