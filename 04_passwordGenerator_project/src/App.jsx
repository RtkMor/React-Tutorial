import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-_=+`~:;<,>.?/{[]}";

    const strLength = str.length;

    for(let i=0 ; i<length ; i++){

      const index = Math.floor(Math.random() * strLength);
      pass += str[index];

    }

    setPassword(pass);

  };

  useEffect(() => passwordGenerator(), [length, numberAllowed, charAllowed]);


  // useRef -> to show the user that the password got copied
  const passwordCopied = useRef(null);

  function copyPassword(){
    passwordCopied.current?.select();
    window.navigator.clipboard.writeText(password);
  }


  return (

    <div className='container-sm bg-secondary p-3 mt-5 rounded-5'>
        
        <div className="input-group">
          <input type="text"
          value={password}
          ref={passwordCopied}
          readOnly
          className='form-control'/>
          <button 
          onClick={copyPassword}
          className='input-group-text btn btn-primary' 
          id="copy">copy</button>
        </div>

        {/* Flex Container */}

        <div className="d-flex flex-row mt-3">

          {/* RANGE */}
          <div className='col-5 text-center'>
            <input className="form-range"
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            type="range"
            min={6}
            max={100}
            id="range"/>
            <label for="range">Length - {length}</label>
          </div>


          {/* Numbers Allowed */}
          <div className="form-check col-3 form-check-inline ms-auto">
            <input className="form-check-input"
            onClick={() => setNumberAllowed(prevValue => !prevValue)}
            type="checkbox"
            id="numbers"/>
            <label className="form-check-label"for="numbers">Numbers Allowed</label>
          </div>


          {/* Characters Allowed */}
          <div className="form-check col-3 form-check-inline">
            <input className="form-check-input"
            onClick={() => setCharAllowed(prevValue => !prevValue)}
            type="checkbox"
            id="characters"/>
            <label className="form-check-label" for="characters">Characters Allowed</label>
          </div>

        </div>

    </div>

  )
}

export default App