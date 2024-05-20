import React from 'react'

function TodoItem({ todo, isEditable, text, onEdit, onSave, onTextChange, resetValue, onDelete }) {

  return (

    <div className={`input-group mt-2 ${todo.complete ? "bg-success" : ""}`}>
      {/* Toggle Complete Button */}
      <div className={`input-group-text ${todo.complete ? "bg-success" : ""}`}>
        <input 
          checked={todo.complete}
          onChange={resetValue}
          className="form-check-input mt-0" 
          type="checkbox" 
        />
      </div>

      {/* Input Field Of Todo Message */}
      <input 
        type="text"
        value={text}
        readOnly={!isEditable}
        onChange={(e) => onTextChange(e.target.value)}
        className={`form-control ${todo.complete ? "text-decoration-line-through bg-success" : ""}`}
      />

      {/* Edit Button */}
      {!todo.complete && !isEditable && (
        <button onClick={onEdit} className="btn btn-secondary">Edit</button>
      )}

      {/* Save Button */}
      {!todo.complete && isEditable && (
        <button onClick={onSave} className="btn btn-success">Save</button>
      )}

      {/* Delete Button */}
      <button onClick={onDelete} className="btn btn-danger" type="button">Delete</button>

    </div>
  )
}

export default TodoItem
