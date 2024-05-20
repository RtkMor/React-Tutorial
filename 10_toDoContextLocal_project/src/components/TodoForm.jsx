import React, { useState } from 'react'
import { useTodo } from '../contexts/index';

function TodoForm() {

  const [todo, setTodo] = useState("");
  const {todos} = useTodo();

  const { addTodo } = useTodo();

  const add = () => {

    if (!todo || todo.trim()==="") return;

    addTodo({id: todos.length + 1, todo: todo.trim(), completed: false});
    setTodo("");
  }

  return (
    <div className="input-group">
      <input
        value={todo}
        type="text" 
        className="form-control" 
        placeholder="Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
        onClick={add}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  )
}

export default TodoForm
