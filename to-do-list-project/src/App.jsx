import { useState } from 'react'
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < Navbar/>
      <div className='container mx-auto my-4  '></div>
    </>
  )
}

export default App
