import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={()=>{
      window.location.href='/dashboard'
    }}>
      dashboard
    </button>
     <button onClick={()=>{
      window.location.href='/Landing'
    }}>
      landing
    </button>
     <BrowserRouter>
     <Routes>
      <Route path ="/dashboard" element ={<Dashboard/>}/>
      <Route path ="/Landing" element ={<Landing/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
