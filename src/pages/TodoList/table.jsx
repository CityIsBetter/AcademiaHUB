import React from 'react';
import './table.css';
import { FaRegTrashAlt } from 'react-icons/fa'

const Table = ({reminder, toggleComplete, deleteReminder}) => {

  return (
    <li className={reminder.completed ? 'completed_task' : 'tasks'}>
        <div className="row">
            <input onChange={() => toggleComplete(reminder)} type='checkbox' checked={reminder.completed ? 'checked' : ''} className='checkBox'/><span onClick={() => toggleComplete(reminder)} className='checkmark'></span>
            <div className='task_content'>
              <p onClick={() => toggleComplete(reminder)} className={ reminder.completed ? 'reminder_title_completed' : 'reminder_title' }>{reminder.task}</p>
              <p className={ reminder.completed ? 'completed task_date' : 'task_date' }>{reminder.date}</p>
            </div>
        </div>
        <button className='delete_reminder_btn' onClick={() => deleteReminder(reminder)}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Table