import { useState } from 'react'
import Accordian from './components/accordian'
import './App.css'
import RandomColor from './components/randomClr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* accordian */}
      {/* <Accordian /> */}
      {/* random color generator */}
      <RandomColor />
    </>
  )
}

export default App
