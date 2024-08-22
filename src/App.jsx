import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import './App.css'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [count, setCount] = useState(0)
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  const togglefinished = ()=>{
    setshowfinished(!setshowfinished)
}

  // useEffect(() => {
  //   let todostring = localStorage.getItem("todos")
  //   if(todostring){ 
  //     let todos = JSON.parse(localstorage.getItem("todos"))
  //     settodos(todos)
  //   }
    
   
  // }, [])
  

  // const savetoLS = (params)=>{
    
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }



  const handleEdit = (e,id)=>{
   let t =  todos.filter(i=>i.id === id)
   settodo(t[0].todo) 
   console.log(`The id is ${id}`)
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index)
    let newtodos =todos.filter(item=>{
      return item.id!==id
    })
    settodos(newtodos) 
    savetoLS()
  }
  const handleDelete = (e, id)=>{
    // let id = e.target.name;
    console.log(`The id is ${id}`)
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index)
    let newtodos =todos.filter(item=>{
      return item.id!==id
    })
    settodos(newtodos)  //...use karne se update hota rahega
    savetoLS()
  }
  const handleAdd = ()=>{
    settodos([...todos,{id: uuidv4(), todo, isCompleted: false}])
    settodo("")
    console.log(todos)
    savetoLS()
  }
  const handleChange = (e)=>{
    settodo(e.target.value)
  }

  const handleCheckbox = (e)=>{
    console.log(e, e.target)
    let id = e.target.name;
    console.log(`the id is ${id}`)
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index)
    let newtodos =[...todos]  //...use karne se update hota rahega
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    settodos(newtodos)
    console.log(newtodos)
    savetoLS()
  }


  return (
    <>
    <Navbar />
    <div className="container mx-auto my-5 rounded-xl bg-blue-300 p-3 min-h-[80vh]">
      <div className="addTodo">
      <h2 className='text-lg font-bold my-3'>Add Todo</h2>
      <input onChange={handleChange} value={todo} type="text" className='w-80' />
      <button onClick={handleAdd} disabled = {todo.length<=3}className='bg-violet-600 py-1 px-3 rounded hover:bg-blue-700 mx-6 hover:font-bold text-white text-l disabled:bg-black transition-all'>Save</button>
      </div>
      <input type="checkbox" onChange={togglefinished} checked = {showfinished}  name="" id="" /> show finished
        <h2 className='text-lg font-bold my-3'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0&&<div>No todos rto display</div>}
          {todos.map(item=>{
            return  (showfinished || !item.isCompleted) &&   <div key={item.id} className="todo flex justify-between w-3/4 my-3">
            <input  onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />  
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-600 py-1 px-3 rounded hover:bg-blue-700 mx-1 hover:font-bold text-white text-l transition-all'>Edit</button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-600 py-1 px-3 rounded hover:bg-blue-700 mx-1 hover:font-bold text-white text-l transition-all'>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
