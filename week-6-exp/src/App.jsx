import { useState ,useEffect} from 'react'
import './App.css'
let id =4;
function App() {

//   const [todos,setTodos]=useState([{
//     id:1,
//     title:"gym",
//     description:"go to gym"
//   },
// {
//   id:2,
//   title:"food",
//   description:"eat food by today"
// },
// {
//   id:3,
//   title:"bgmi",
//   description:"complete rank push"
// }])
 const [todos,setTodos]=useState([]);
 const [counter,setCounter]=useState(0);
 useEffect(()=>{
  setInterval(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
  .then(async(res)=>{
    const data=await res.json();
   setTodos(data.todos);
  });
  },10000)
},[])
// console.log(todos);
 function addTodo(){
  
  setTodos([...todos,{
    id:id++,
    title:Math.random() +` for ${id} this is title`,
    description:Math.random ()+`this is descp`

  }])
}
  return (
    <>
    <button onClick={addTodo}>  Add a todo</button>
    {todos.map((todo)=>{
      return <Todo  key={todo.id} title={todo.title} description={todo.description}></Todo>
    })}
  
    </>
  )
}

function Todo({title,description}){

  return<>
  <h1>{title}</h1>
  <h5>{description}</h5>
  </>
}

export default App
