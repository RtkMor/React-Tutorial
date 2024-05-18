import { useState } from 'react'
import './App.css'

function App(){

  const [counter, setCounter] = useState(10);

  const incrementValue = () => {
    setCounter(counter+1);
  }

  const decrementValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>React-Tutorial</h1>
    <p>Counter Value - {counter}</p>
    <button
    onClick={incrementValue}>
        Increment
    </button>
    <br />
    <br />
    <button
    onClick={decrementValue}>
      Decrement
    </button>
    </>
  )
}

export default App
