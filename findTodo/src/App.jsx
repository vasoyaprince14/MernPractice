import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [todos, setTodos] = useState([]);
  // useEffect(()=>{
  //   fetch('https://sum-server.100xdevs.com/todos')
  //   .then(async(res)=>{
  //     const data=await res.json();
  //     setTodos(data.todos);
  //   })
  // },[])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((response)=>{
     console.log(response.data);
      setTodos(response.data.todos)
    })
  },[])

  return (
    <>
    {/* {todos.map((todo)=>{
      return <Todo  key={todo.id} title={todo.title} description={todo.description}></Todo>
    })} */}
     {todos.map((todo)=>{
      return <Todo  key={todo.id} title={todo.title} description={todo.description}></Todo>
    })}
    </>
  )
}
function Todo({title,description}){
  return (
    <>
    <h1>{title}</h1>
    <h5>{description}</h5>
    </>
  )
}

export default App
