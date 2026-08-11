import { FaPlus } from "react-icons/fa";

const CreateTask = () => {
  return (
    <div id="form-create-task">
        <label htmlFor="task">Insira uma nova tarefa:</label>
        <input type="text" name="task" id="task"/>
        <button id="create-task">
            <FaPlus/>
        </button>
    </div>
  )
}

export default CreateTask