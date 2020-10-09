import React, {useState} from 'react';
import './App.css';



function CreateTask (props) {

  const [tasks, setTasks] = useState('')

  const addTask = () => {
    props.onCreateTask(tasks)
    setTasks('')
  }

  return (
    <div className="createTask">
      <input type="text" value={tasks} onChange={e => setTasks(e.target.value)}/>
      <button onClick={addTask} disabled={tasks.trim() === ''}>Add</button>
    </div>
  );
}

export default CreateTask;
