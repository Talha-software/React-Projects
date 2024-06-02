import { useState } from 'react'
import Accordian from './components/accordian'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* accordian */}
      <Accordian />
    </>
  )
}

export default App
