import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {

  // useEffect(()=>{
  //   fetch('https://sum-server.100xdevs.com/todos')
  //   .then(async(res)=>{
  //     const data=await res.json();
  //     setTodos(data.todos);
  //   })
  // },[])
  // useEffect(()=>{
  //   axios.get(`https://sum-server.100xdevs.com/todo?id=${3}`)
  //   .then((response)=>{
  //    console.log(response.data);
  //     setTodos(response.data.todo)
  //   })
  // },[])
  const [id,setId]= useState(1);
  function find(id){
    setId(id);
  }
  return (
    <>
    {/* {todos.map((todo)=>{
      return <Todo  key={todo.id} title={todo.title} description={todo.description}></Todo>
    })} */}
     {/* {todos.map((todo)=>{
      return <Todo  key={todo.id} title={todo.title} description={todo.description}></Todo>
    })} */}
    {/* <input type='number'></input>
    <button onClick={find}>find</button>
    <Todo key={todos.id} title={todos.title} description={todos.description}/> */}

     <button onClick={()=>{
      find(1);
     }}>1</button>
     <button onClick={()=>{
      find(2);
     }}>2</button>
     <button onClick={()=>{
      find(3);
     }}>3</button>
     <button onClick={()=>{
      find(4);
     }}>4</button>
     <button onClick={()=>{
      find(5);
     }}>5</button>
    <Todo id={id}></Todo>
    </>
  )
}
function Todo({props}){
    const [todos, setTodos] = useState({});
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${props.id}`)
    .then((response)=>{
     console.log(response.data);
      setTodos(response.data.todo);
    })
  },[id])
  return (
    <>

    <h1>{todos.title}</h1>
    <h5>{todos.description}</h5>
    </>
  )
}

export default App
