import {TodoForm, TodoList} from './components'

function App() {

  return (
    <div className='container-fluid mt-5'>

        <div className='col-lg-8 col-md-10 col-sm-12 mx-auto mb-3'>
          <TodoForm />
        </div>

        <div className='col-lg-8 col-md-10 col-sm-12 mx-auto'>
          <TodoList />
        </div>
        
    </div>
  )
}

export default App
