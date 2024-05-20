import { useEffect, useState } from 'react'

import { TodoContext, TodoProvider, useTodo } from './contexts'

import { TodoForm, TodoItem } from './components'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [...prev, todo]
    )
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map(prevItem => prevItem.id === id ? todo : prevItem))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(eachItem => eachItem.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevItem => prevItem.id === id ? {...prevItem, completed: !prevItem.completed} : prevItem))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length > 0){
      setTodos(todos)
    }
    console.log(todos);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div className='container-fluid mt-5'>

        <div className='col-lg-8 col-md-10 col-sm-12 mx-auto mb-3'>
          <TodoForm />
        </div>

        <div className='col-lg-8 col-md-10 col-sm-12 mx-auto'>
          {todos.map(prevItem => 
              <div key={prevItem.id}>
              <TodoItem todo={prevItem} />
              </div>)}
        </div>
        
      </div>

    </TodoProvider>
  )
}

export default App
