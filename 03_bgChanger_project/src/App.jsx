import { useState } from "react"

function App() {

  const [color, setcolor] = useState('#212121');

  return (
    <div id="body" className="vw-100 vh-100" style={{background: color}}>

      <div className="d-grid gap-2 d-md-flex justify-content-md-center px-2 pt-2">
        <button
        onClick={() => setcolor("blue")} 
        className="btn btn-primary" id="primary">Primary</button>
        <button
        onClick={() => setcolor("grey")} 
        className="btn btn-secondary" id="secondary">Secondary</button>
        <button
        onClick={() => setcolor("green")} 
        className="btn btn-success" id="success">Success</button>
        <button
        onClick={() => setcolor("red")} 
        className="btn btn-danger" id="danger">Danger</button>
        <button
        onClick={() => setcolor("orange")} 
        className="btn btn-warning" id="warning">Warning</button>
        <button
        onClick={() => setcolor("cyan")} 
        className="btn btn-info" id="info">Info</button>
        <button
        onClick={() => setcolor("black")} 
        className="btn btn- text-white" id="black">Custom</button>
      </div>

    </div>
  )
}

export default App
