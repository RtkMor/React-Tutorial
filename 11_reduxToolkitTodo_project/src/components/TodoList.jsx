import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo, completeTodo } from '../features/todo/todoSlice'
import TodoItem from './TodoItem'

function TodoList() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editableTodo, setEditableTodo] = useState(false)
  const [text, setText] = useState('')

  const handleEdit = (id, currentText) => {
    setEditableTodo(id)
    setText(currentText)
  }

  const handleSave = (todo) => {
    dispatch(updateTodo({...todo, text}))
    setEditableTodo(false)
  }

  const resetValue = (id, val) => {
    setEditableTodo(false)
    setText(val)
    dispatch(completeTodo(id))
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          isEditable={editableTodo === todo.id}
          text={editableTodo === todo.id ? text : todo.text}
          onEdit={() => handleEdit(todo.id, todo.text)}
          onSave={() => handleSave(todo)}
          onTextChange={setText}
          resetValue={() => resetValue(todo.id, todo.text)}
          onDelete={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </div>
  )
}

export default TodoList
