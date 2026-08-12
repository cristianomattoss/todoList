import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTask = {
        text: task,
        completed: false
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks];

    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
}

const removeTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1)
  setTasks(newTasks)
}

  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <CreateTask createTask={createTask} />
      <ListTask tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </div>
  )
}

export default App
