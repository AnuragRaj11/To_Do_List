import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const tooglefinished = (e) => {
    setshowfinished(!showfinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodos(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodo("newTodos")
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodo("newTodos")
    saveToLS()
  }

  const handledAdd = () => {
    setTodos([...Todos, { id: uuidv4(), todo, iscompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.taregt.value)
  }

  const handleCheckbox = (e) => {
    let id = e.taregt.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
    saveToLS();
  }

  return (
    <>
      < Navbar />
      <div className='mx-4 md:container md:mx-auto my-4 rounded-xl p-4 bg-violet-400 min-h-[90vh] md:w-[90%] '>
        <h1 className='font-bold text-center text-2xl'>A Task - Manage your todos at one place</h1>
        <div className='addTodo my-5 flex flex-col gap-4'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='flex'>

            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-4 py-1' />
            <button onClick={handledAdd} disabled={todo.length <= 3} className='bg-violet-600 mx-4 rounded-ful hover:bg-red-400 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
          </div>
        </div>
        <input className='my-4' id='show' onChange={tooglefinished} type="checkbox" checked={showfinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className='todos'>
          {todos.length === 0 && <div className='m-4'>No Todos ro display </div>}
          {todos.map(item => {


            return (showfinished || !item.iscompleted) && <div key={item.id} className={"todo flex my-3 justify-between"}>
              <div className='flex gap-4'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.iscompleted} id="" />
                <div className={item.iscompleted ? "line-through" : ""}></div>
              </div>
              <div className='buttons flx h-full'>
                <button onChange={(e) => handleEdit(e, item.id)} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text=sm font-bold text-white rounded-md mx-1'><FaEdit /> </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>   </div>
          })}
        </div>
      </div >
    </>
  )
}

export default App
