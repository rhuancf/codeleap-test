import { useState } from 'react'
import Login from './pages/Login'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}
