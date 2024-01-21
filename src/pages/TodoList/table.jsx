import React, { useState } from 'react';
import './table.css';
import { FaRegTrashAlt } from 'react-icons/fa'

const Table = ({reminder, toggleComplete, deleteReminder}) => {

  return (
    <li className={reminder.completed ? 'completed_task' : 'tasks'}>
        <div className="row">
            <input onChange={() => toggleComplete(reminder)} type='checkbox' checked={reminder.completed ? 'checked' : ''} className='checkBox'/>
            <p onClick={() => toggleComplete(reminder)} className={ reminder.completed ? 'reminder_title_completed' : 'reminder_title' }>{reminder.task}</p>
        </div>
        <button className='delete_reminder_btn' onClick={() => deleteReminder(reminder)}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Table