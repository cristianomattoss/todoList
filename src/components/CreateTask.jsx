import { FaPlus } from "react-icons/fa";
import "./CreateTask.css";
import { useState } from "react";

const CreateTask = ({createTask}) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  const handleCreateTask = () => {
    if (!task.trim()) return;

    createTask(task);
    setTask("");
  }

  return (
    <div id="container-create-task">
        <label htmlFor="task">Insira uma nova tarefa:</label>
        <div id="task-input-container">
            <input type="text" name="task" id="task" value={task} onChange={handleTaskChange}/>
            <button id="add-task" onClick={handleCreateTask}>
                <FaPlus/>
            </button>
        </div>
        
    </div>
  )
}

export default CreateTask