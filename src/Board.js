import React from 'react';
import './App.css';
import NameTask from "./NameTask";



function Board (props) {


  return (
      <div className="Board">
          {
              props.task.filter(el => el.status === props.status).map(el => <NameTask task={el}
                                                                                      onChangeStatus={props.onChangeStatus}
                                                                                      key={el.id}
                                                                                      onChangePriority={props.onChangePriority}
                                                                                      onCreateText={props.onCreateText}
              />)
          }
      </div>
  );
}

export default Board;
