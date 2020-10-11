import React from 'react';
import './App.css';
import Modal from "./Modal";



function NameTask (props) {

    const {taski} = props

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

    const dash = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>)

    const badgeColor = ["badge badge-success", "badge badge-warning", "badge badge-danger"]

    const levelPriority = ['Low', 'Medium', 'High']


  return (
    <div className="nameTask">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.taski.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" className="btn btn-light" onClick={() => props.onChangeStatus({id: props.taski.id, direction: 'left', index: props.index})}>{left}</button>
                <span>{dash}<span className={badgeColor[taski.priority]} onClick={() => props.onChangeStatus({id: props.taski.id, badge: 'badge'})}>{levelPriority[taski.priority]}</span>{dash}</span>
                <button type="button" className="btn btn-light" onClick={() => props.onChangeStatus({id: props.taski.id, direction: 'right', index: props.index})}>{right}</button>
                <Modal/>
            </div>
        </div>
    </div>
  );
}

export default NameTask;