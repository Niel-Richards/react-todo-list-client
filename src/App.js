import Header from './components/Header';
import Middle from './components/Middle';
import TaskInput from './components/TaskInput';
import { useState, useEffect} from 'react';

function App() {
  // const todayIs = new Date().toString();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromDB = await fetchTasks();
      setTaskList(tasksFromDB);
    }    
    getTasks();
  }, []);
  
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  //Update List
  const addTask = async (task) => {
    const res = await fetch(
      `http://localhost:5000/tasks`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    );
    const data = await res.json();
    setTaskList([...taskList,data]);
  }; 

  //Toggle Complete
  const updateTask = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = [{...taskToUpdate, isComplete:!taskToUpdate.isComplete}];
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method:'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      }
    );
    //TODO if is error send error message
    setTaskList(taskList.map((task) => task.id === id? {...updatedTask[0]}:task));
  }

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE',});
    setTaskList(taskList.filter((task) => task.id !== id));
  }


  return (
    <div className="App">
      <Header />
      <TaskInput addTask={addTask}/>
      <Middle tasks={taskList} onToggle={updateTask} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
