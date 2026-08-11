import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'

function App() {
  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <CreateTask/>
    </div>
  )
}

export default App
