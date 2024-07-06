import { useState,useEffect } from 'react'
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setfinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(params))
  }

  const tooglefinished = (e) => {
    setfinished(!showfinished)
  }


  const handledAdd = () => {
    setTodos([...Todos, { id: uuidv4(), todo, iscompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.taregt.value)
  }

  return (
    <>
      < Navbar />
      <div className='container mx-auto my-4 rounded-xl p-4 bg-violet-400 min-h-[90vh] '>
        <div className='addTodo'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
