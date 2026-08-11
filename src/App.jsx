import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'

function App() {
  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <CreateTask/>
      <ListTask/>
    </div>
  )
}

export default App
