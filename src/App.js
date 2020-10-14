import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Board from "./Board";
import CreateTask from "./CreateTask"

const initialTask = [
    {id:  uuidv4(), title: 'Task1', priority: 0, status: 'Todo', text: 'Hello World!'},
    {id:  uuidv4(), title: 'Task2', priority: 1, status: 'Review', text: 'Hello World!'},
    {id:  uuidv4(), title: 'Task3', priority: 1, status: 'Progress', text: 'Hello World!'},
    {id:  uuidv4(), title: 'Task4', priority: 1, status: 'Done', text: 'Hello World!'},
]

function App() {

const [task, setTask] = useState(initialTask)

    const onChangeStatus = ({id,direction}) => {
    console.log(id, direction)
        const statuses = ['Todo', 'Review', 'Progress', 'Done']
        const updateChangeStatus = task.map(el => {
            if(el.id === id) {
                if(direction === 'left') {
                    el.status = statuses[statuses.indexOf(el.status) - 1]
                }
                if(direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1]
                }
            } return el;
        })
        setTask(updateChangeStatus)
    }

    const  onChangePriority = ({id}) => {
    console.log(id)
        const prioritys = [0, 1, 2]
       const updateChangePriority = task.map(el => {
           if(el.id === id) {
               el.priority = prioritys[prioritys.indexOf(el.priority) + 1]
           } return el;
       })
        setTask(updateChangePriority)
    }

    const onCreateText = (taski, nameTitle) => {
    console.log(taski)
        const updateOnCreateText = [...task]
        updateOnCreateText.push({id: uuidv4(), title: nameTitle, priority: 2, status: 'Todo', text: taski})
        setTask(updateOnCreateText)
    }




    return (
        <div className="App">
            <div className="container">
                <CreateTask onCreateText={onCreateText}/>
                <div className="row">
                    <div className="col-sm">
                        Todo
                        <Board task={task} status='Todo' onChangeStatus={onChangeStatus} onChangePriority={onChangePriority} />
                    </div>
                    <div className="col-sm">
                        Review
                        <Board task={task} status='Review' onChangeStatus={onChangeStatus} onChangePriority={onChangePriority}/>
                    </div>
                    <div className="col-sm">
                        Progress
                        <Board task={task} status='Progress' onChangeStatus={onChangeStatus} onChangePriority={onChangePriority}/>
                    </div>
                    <div className="col-sm">
                        Done
                        <Board task={task} status='Done' onChangeStatus={onChangeStatus} onChangePriority={onChangePriority}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


