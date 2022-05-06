import {FaRegTrashAlt, FaRegSquare, FaRegCheckSquare } from 'react-icons/fa'
function Task({task, onToggle, onDelete}) {
    return (
        <div className="Task__wrapper">
            <div className="Task__tickBox center" onClick={() => onToggle(task.id)}>
                {task.isComplete ?<FaRegCheckSquare style={{ color: '#5cb85c', cursor: 'pointer', fontSize:'inherit'}}/>:<FaRegSquare style={{ color: '#1DA1F2', cursor: 'pointer', fontSize:'inherit'}}/>}
            </div>
            <p className={task.isComplete ? "Task__desc Task__desc--complete":"Task__desc"}>{task.description}</p>
            <p className="Task__date">{task.entryDate}</p>
            <div className="Task__delete center" onClick={()=>onDelete(task.id)}>
                <FaRegTrashAlt style={{ color: 'red', cursor: 'pointer', fontSize:'inherit'}}/>
            </div>
        </div>
    );
}

export default Task;