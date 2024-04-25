import {Suspense, lazy, useState } from 'react'
 
// import { lazy, useState, startTransition } from 'react';
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
const Landing = lazy(()=> import("./components/Landing"));
const Dashboard = lazy(()=> import("./components/Dashboard"));

function App() {
  // const [count, setCount] = useState(0)
// const navigate =useNavigate();
  return (
    <>
  
     <BrowserRouter>
     <Appbar/>
     <Routes>
      <Route path ="/dashboard" element ={<Suspense fallback={"loading"}><Dashboard/></Suspense>}/>
      <Route path ="/landing" element ={<Suspense fallback={"loading"}><Landing/></Suspense>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
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
    navigate('/landing');
    }}>
      landing
    </button>
    </>
  );
}
export default App
