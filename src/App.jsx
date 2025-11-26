import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Billing from './Billing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Billing />
    </>
  )
}

export default App
