import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./ListTask.css"

const ListTask = () => {
  return (
    <div id='container-list'>
        <div id="container-search">
            <div id="search-input-container">
                <label htmlFor="search">Pesquisar:</label>
                <input type="text" id='search' name='search'/>
            </div>
            <div id='filter-select-container'>
                <label htmlFor="filter-select">Filtrar:</label>
                <select name="filter" id="filter-select">
                    <option value="all">Todos</option>
                    <option value="done">Feitos</option>
                    <option value="todo">A fazer</option>
                </select>
            </div>
        </div>
        <div id='list-tasks'>
            <div className="task">
                <input type="checkbox" name="check" id="check1"/>
                <p>Tarefa1</p>
                <div className="task-actions">
                    <button type="button" className="edit">
                        <FaEdit />
                    </button>
                    <button type="button" className="remove">
                        <FaTrash />
                    </button>
                </div>
            </div>
            <div className="task">
                <input type="checkbox" name="check" id="check2"/>
                <p>Tarefa2</p>
                <div className="task-actions">
                    <button type="button" className="edit">
                        <FaEdit />
                    </button>
                    <button type="button" className="remove">
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListTask