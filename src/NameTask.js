import React from 'react';
import './App.css';



function NameTask (props) {

    const left = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>)

    const right = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>)


  return (
    <div className="nameTask">
      {props.taski.name}
      <button onClick={() => props.onChangeStatus({id: props.taski.id, direction: 'left', index: props.index})}>{left}</button>
        <button onClick={() => props.onChangeStatus({id: props.taski.id, direction: 'right', index: props.index})}>{right}</button>
    </div>
  );
}

export default NameTask;
