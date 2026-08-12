import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./ListTask.css"
import { useEffect, useState } from "react";

const ListTask = ({tasks, toggleTask, removeTask}) => {
    const [searchValueInput, setSearchValue] = useState("");
    const [filterValueInput, setFilterValue] = useState("all");
    const [filterTasks, setFilterTasks] = useState(tasks);

    useEffect(() => {searchTask(searchValueInput, filterValueInput);}, [tasks]);
    
    const searchTask = (searchValue, filterValue) => {
        let filteredTasks;
        switch(filterValue){
            case "all":
                filteredTasks = tasks;
                break;
            case "done":
                filteredTasks = tasks.filter(task => task.completed == true)
                break;
            case "todo":
                filteredTasks = tasks.filter(task => task.completed == false)
                break;
        }

        if(searchValue.trim()) {
            filteredTasks = filterTasks.filter(task => task.text.toLowerCase().includes(searchValueInput.toLowerCase()))
        }
        setFilterTasks(filteredTasks)
        
    }

  return (
    <div id='container-list'>
        <div id="container-search">
            <div id="search-input-container">
                <label htmlFor="search">Pesquisar:</label>
                <input type="text" id='search' name='search'  value={searchValueInput} 
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchValue(value);
                        searchTask(value, filterValueInput); 
                    }}
                />
            </div>
            <div id='filter-select-container'>
                <label htmlFor="filter-select">Filtrar:</label>
                <select name="filter" id="filter-select" value={filterValueInput}
                    onChange={(e) => {
                        const value = e.target.value;
                        setFilterValue(value);
                        searchTask(searchValueInput, value); 
                    }}
                >
                    <option value="all">Todos</option>
                    <option value="done">Feitos</option>
                    <option value="todo">A fazer</option>
                </select>
            </div>
        </div>
        <div id='list-tasks'>
            {filterTasks.map((task, index) => (
                <div className="task" key={index}>
                    <input 
                        type="checkbox"
                        name="tasks" 
                        id={`task-${index}`} 
                        checked={task.completed} 
                        onChange={() => toggleTask(index)}
                    />
                    <p className={task.completed ? "completed" : ""}>{task.text}</p>
                    <div className="task-actions">
                        <button type="button" className="edit">
                            <FaEdit />
                        </button>
                        <button type="button" className="remove" onClick={() => removeTask(index)}>
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