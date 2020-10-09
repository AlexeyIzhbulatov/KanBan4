import React from 'react';
import './App.css';
import NameTask from "./NameTask";



function Board (props) {


  return (
    <div className="Board">
      {props.task.filter(el => el.status === props.status).map((el, index) => <NameTask taski={el}
                                                                                        onChangeStatus={props.onChangeStatus}
                                                                                        key={el.id}
                                                                                        index={index}
                                                                                        onCreateTask={props.onCreateTask}
                                                                                        // badgePriority={props.badgePriority}
      />)}
    </div>
  );
}

export default Board;
