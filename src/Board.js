import React from 'react';
import './App.css';
import NameTask from "./NameTask";



function Board (props) {


  return (
    <div className="Board">
      {props.task.filter(el => el.status === props.status).map(el => <NameTask taski={el} onChangeStatus={props.onChangeStatus}/>)}
    </div>
  );
}

export default Board;
