import Task from './Task';

const Middle = ({tasks, onToggle, onDelete}) => {

    return (
        <main className="Middle__wrapper">
            {tasks.length > 0 ? tasks.map((task) => <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>): <p className='px-1'>No tasks to display</p>}
        </main>
    );
}

export default Middle;