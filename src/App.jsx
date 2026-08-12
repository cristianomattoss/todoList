import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'
import EditTask from './components/EditTask'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [editText, setText] = useState("");
  const [editIndex, setIndex] = useState(null);

  const createTask = (task) => {
    const newTask = {
        text: task,
        completed: false
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks];

    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
}

const removeTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1)
  setTasks(newTasks)
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

const chooseEditTask = (textEdit, indexEdit) => {
  setText(textEdit);
  setIndex(indexEdit);
}

const editTask = (newText) => {
    const editTasks = tasks.map((task, index) => {
        if (index === editIndex) {
            return {
                ...task,
                text: newText.trim()
            };
        }

        return task;
    });

    setTasks(editTasks);
    localStorage.setItem("tasks", JSON.stringify(editTasks));
    setText("");
    setIndex(null);
}

const cancelEditTask = () => {
  setText("");
  setIndex(null);
}

return (
  <div className="container">
    <h1>Minha lista de tarefas</h1>
    {!editText && editIndex == null ? (
      <>
      <CreateTask createTask={createTask} />
      <ListTask tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} chooseEditTask={chooseEditTask}/>
      </>
    ) : (
      <EditTask 
        editText={editText}
        editTask={editTask}
        cancelEditTask={cancelEditTask}/>
    )} 
  </div>
)
}

export default App
