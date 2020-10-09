import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Board from "./Board";

const initialTask = [
  {id: uuidv4(), name: 'Task1', priority: 0, status: 'Todo'},
  {id: uuidv4(), name: 'Task2', priority: 1, status: 'Review'},
  {id: uuidv4(), name: 'Task3', priority: 2, status: 'Progress'},
  {id: uuidv4(), name: 'Task4', priority: 2, status: 'Done'},
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

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            To do
            <Board task={task} status='Todo' onChangeStatus={onChangeStatus}/>
          </div>
          <div className="col-sm">
            Review
            <Board task={task} status='Review' onChangeStatus={onChangeStatus}/>
          </div>
          <div className="col-sm">
            Progress
            <Board task={task} status='Progress' onChangeStatus={onChangeStatus}/>
          </div>
          <div className="col-sm">
            Done
            <Board task={task} status='Done' onChangeStatus={onChangeStatus}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
