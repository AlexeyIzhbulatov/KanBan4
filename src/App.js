import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Board from "./Board";
import CreateTask from "./CreateTask";

const initialTask = [
  {id: uuidv4(), name: 'Task1', priority: 'Low', status: 'Todo'},
  {id: uuidv4(), name: 'Task2', priority: 'Medium', status: 'Review'},
  {id: uuidv4(), name: 'Task3', priority: 'High', status: 'Progress'},
  {id: uuidv4(), name: 'Task4', priority: 'High', status: 'Done'},
]

function App() {
  const [task, setTask] = useState(initialTask)

  const onChangeStatus = ({id, direction, index}) => {
    console.log(id,direction)
    const statuses = ['Todo', 'Review', 'Progress', 'Done']
    const updateChangeStatus = task.map(el => {
      if(el.id === id) {
        if(direction === 'left') {
          el.status = statuses[statuses.indexOf(el.status) - 1]
        }
        if(direction === 'right') {
          el.status = statuses[statuses.indexOf(el.status) + 1]
        }
      }return el
    })
    setTask(updateChangeStatus)
    console.log(updateChangeStatus)
  }

  const onCreateTask = (tasks) => {
    console.log(tasks)
    const updateOnCreateTask = [...task]
    updateOnCreateTask.push({id: uuidv4(), name: tasks, priority: 0, status: 'Todo'})
    setTask(updateOnCreateTask)
  }

  const badgePriority = ({id, badge}) => {
    console.log(id,badge)
    const badgeColor = [0, 1, 2]
    const updateBadgePriority = task.map(el => {
 if(el.id === id) {
   if(badge === 'badge'){
     el.priority = badgeColor[badgeColor.indexOf(el.priority) + 1]
   }
 } return el
    })
    setTask(updateBadgePriority)
  }

  return (
    <div className="App">
      <CreateTask onCreateTask={onCreateTask}/>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            To do
            <Board task={task} status='Todo' onChangeStatus={onChangeStatus} badgePriority={badgePriority}/>
          </div>
          <div className="col-sm">
            Review
            <Board task={task} status='Review' onChangeStatus={onChangeStatus} badgePriority={badgePriority}/>
          </div>
          <div className="col-sm">
            Progress
            <Board task={task} status='Progress' onChangeStatus={onChangeStatus} badgePriority={badgePriority}/>
          </div>
          <div className="col-sm">
            Done
            <Board task={task} status='Done' onChangeStatus={onChangeStatus} badgePriority={badgePriority}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
