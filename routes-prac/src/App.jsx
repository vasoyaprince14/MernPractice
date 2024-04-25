// import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  // const [count, setCount] = useState(0)
// const navigate =useNavigate();
  return (
    <>
  
     <BrowserRouter>
     <Appbar/>
     <Routes>
      <Route path ="/dashboard" element ={<Dashboard/>}/>
      <Route path ="/Landing" element ={<Landing/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
function Appbar(){
  const navigate =useNavigate();
  return (
    <>
    <button onClick={()=>{
      navigate('/dashboard');
    }}>
      dashboard
    </button>
     <button onClick={()=>{
    navigate('/Landing');
    }}>
      landing
    </button>
    </>
  );
}
export default App
