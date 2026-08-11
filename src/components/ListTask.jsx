import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./ListTask.css"

const ListTask = ({tasks}) => {
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
            {tasks.map((task, index) => (
                <div className="task" key={index}>
                    <input type="checkbox" name="tasks" id={`task-${index}`}/>
                    <p>{task}</p>
                    <div className="task-actions">
                        <button type="button" className="edit">
                            <FaEdit />
                        </button>
                        <button type="button" className="remove">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListTask