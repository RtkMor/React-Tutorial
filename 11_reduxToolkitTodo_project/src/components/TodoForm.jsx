import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function TodoForm() {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if(input.trim() !== ""){
      dispatch(addTodo(input))
      setInput("")
    }
  }

  return (
    <div className="input-group">
      <input
        value={input}
        type="text" 
        className="form-control" 
        placeholder="Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={addTodoHandler}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  )
}

export default TodoForm
