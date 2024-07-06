import { useState } from 'react'
import Navbar from "./components/Navbar";

function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
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

  return (
    <>
      < Navbar />
      <div className='container mx-auto my-4 rounded-xl p-4 bg-violet-400 min-h-[90vh] '>
        <div className='addTodo'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input onChange= type="text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
