import { useState } from 'react';
import './App.css';
import { callApiToRegisterUser } from './apiHandler';

function App() {
  const [name, setName] = useState("")
  const registerName = async ()=>{
    let response = await callApiToRegisterUser(name)
    if(!response)
      alert('Failed to create the Name')
    setName('')
    return
  }
  
  return (
    <div className="App">
      <input
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      >
      </input>
      <button onClick={registerName}>Register</button>
    </div>
  );
}

export default App;
