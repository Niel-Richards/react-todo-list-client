import {FaRegTrashAlt, FaRegSquare, FaRegCheckSquare } from 'react-icons/fa'
function Task({task, onToggle, onDelete}) {
    return (
        <div className="Task__wrapper">
            <div className="Task__tickBox" onClick={() => onToggle(task.id)}>
                {task.isComplete ?<FaRegCheckSquare style={{ color: '#5cb85c', cursor: 'pointer'}}/>:<FaRegSquare style={{ color: '#1DA1F2', cursor: 'pointer'}}/>}
            </div>
            <p className={task.isComplete ? "Task__desc Task__desc--complete":"Task__desc"}>{task.description}</p>
            <p className="Task__date">{task.entryDate}</p>
            <div className="Task__delete" onClick={()=>onDelete(task.id)}>
                <FaRegTrashAlt style={{ color: 'red', cursor: 'pointer'}}/>
            </div>
        </div>
    );
}

export default Task;