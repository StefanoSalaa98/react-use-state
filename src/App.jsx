import { useState } from 'react'
import MyHeader from './assets/components/MyHeader'
import MyMain from './assets/components/MyMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
      <MyMain />
    </>
  )
}

export default App
