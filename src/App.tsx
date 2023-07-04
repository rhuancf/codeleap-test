import { useState } from 'react'
import { Router, Route } from "wouter";
import { Login } from '@/pages';
import { Main } from '@/pages';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route path="/" component={Login} />
      <Route path="/main/:username" component={Main} />
    </Router>
  )
}
