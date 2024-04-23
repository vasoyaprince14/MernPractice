import { useState } from 'react'
import './App.css'

function App() {
 const [title,setTitle]=useState("prince");
//  setTitle("my name is" + Math.random());
  function updateUI(){
    setTitle("my name is" + Math.random());
  }
  return (
    <>
    <button onClick={updateUI}>click me</button>
    <Header title={title}></Header>
    <Header title="harkirat"></Header>
  
    </>
  )
}
function Header({title}){

  return<>
  <div>{title}</div>
  </>
}

export default App
