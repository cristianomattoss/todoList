import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    console.log(newTasks);
  }

  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <CreateTask createTask={createTask}/>
      <ListTask/>
    </div>
  )
}

export default App
