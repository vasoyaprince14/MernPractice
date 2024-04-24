import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [awns,setAwns]=useState(0);
  let sum=0;
  return (
    <>
      <input type='number' placeholder='enter value' onChange={(e)=>{
        // setAwns(e.target.value);
        let sum=0;
        for(let i=0;i<=e.target.value;i++){
          sum+=i;
        }
        setAwns(sum);

      }}/>
      <div>{awns}</div>
      <button onClick={()=>{
        setCount(count+1);
      }}>count = { count}</button>
    </>
  )
}

export default App
