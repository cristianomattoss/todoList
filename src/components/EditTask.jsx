import { FaCheck, FaTimes } from "react-icons/fa";
import "./EditTask.css";
import { useState } from "react";

const EditTask = ({editText, editTask, cancelEditTask}) => {
    const [valueInputEditTask, setInput] = useState(editText);

    const handleInput = (e) => {setInput(e.target.value)}

  return (
    <div id="container-edit-task">
            <label htmlFor="edit-task">Edite sua tarefa:</label>

            <div id="edit-task-input-container">
                <input type="text" id="edit-task" name="edit-task" onChange={handleInput} value={valueInputEditTask}/>
                <button type="button" id="save-edit" title="Salvar" onClick={() => editTask(valueInputEditTask)}>
                    <FaCheck/>
                </button>
            </div>
            <button type="button" id="cancel-edit" title="Cancelar" onClick={cancelEditTask}>Cancelar</button>
        </div>
  )
}

export default EditTask