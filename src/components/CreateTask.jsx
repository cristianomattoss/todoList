import { FaPlus } from "react-icons/fa";
import "./CreateTask.css";

const CreateTask = () => {
  return (
    <div id="container-create-task">
        <label htmlFor="task">Insira uma nova tarefa:</label>
        <div id="task-input-container">
            <input type="text" name="task" id="task"/>
            <button id="add-task">
                <FaPlus/>
            </button>
        </div>
        
    </div>
  )
}

export default CreateTask