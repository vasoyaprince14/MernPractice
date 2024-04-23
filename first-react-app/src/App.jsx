import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (

    <center className='todo-container'>
      <h1>Todo app</h1>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-6'>
            col-8
          </div>
          <div className='col-4'>
            col-8
          </div>
          <div className='col-2'>
            col-4 
          </div>
        </div>
      </div>
    </center>
    
  )
}

export default App
