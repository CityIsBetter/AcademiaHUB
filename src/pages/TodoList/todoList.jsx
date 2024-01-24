import React, { useState, useEffect } from 'react';
import './TodoList.css';
import Table from './table';

import db from '../../component/googleSignIn/config.js';
import { setDoc, collection, doc, getDocs, deleteDoc } from "firebase/firestore";

const TodoList = () => {

  const userEmail = localStorage.getItem("email-unihub");
  const [change, setChange] = useState(false);
  const [rows, setRows] = useState([]);
  const [activeCount, setActiveCount] = useState('')

  const getData = async () => {
    var count = 0;
    console.log("no. of getData calls");
    const docRef = collection(db, "reminders",userEmail, "tasks");
    const dataDB = await getDocs(docRef);
    const allData = dataDB.docs.map(val => ({task:val.id, ...val.data()}));
    setRows(allData);
    for (let i = 0; i<allData.length; i++){
      if (allData[i].completed == false){
        count = count + 1
      }
    }
    setActiveCount(count);
  };

  useEffect(() => {
    getData();
    console.log("useEffect");
  },[change]);

  const handleSubmit = async () => {
    const task = document.getElementsByClassName('todo_input')[0].value;
    const date = (new Date()).toLocaleDateString('en-GB').replace("/", "-").replace("/", "-");
    await setDoc(doc(db,"reminders", userEmail, "tasks", task), {
      date: date,
      completed: false
    });
    setChange(!change);
    document.getElementsByClassName('todo_input')[0].value = '';
  };

  const handleChange = async (reminder) => {
    await setDoc(doc(db,"reminders", userEmail, "tasks", reminder.task), {
      date: reminder.date,
      completed: !reminder.completed
    });
    setChange(!change);
  }

  const handleDeleteRow = async (reminder) => {
    await deleteDoc(doc(db, "reminders", userEmail, "tasks", reminder.task));
    setChange(!change);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className={activeCount <= 7 ? "reminder_wrapper vh" : "reminder_wrapper"}>    
      <div className='reminder_container'>
        <h1>Reminders</h1>
        <form className='reminder_form'>
          <input type='text' placeholder='Create new reminder' className='todo_input' onKeyDown={handleKeyDown}/>
          <button type='button' className='submit_reminder_btn' onClick={() => handleSubmit()}>+</button>
        </form>
        <ul className='reminder_list'>
          {rows.map((task, index) => (
            <Table key={index} reminder={task} toggleComplete={handleChange} deleteReminder={handleDeleteRow} />
          ))}
        </ul>
        <p className='reminder_count'>You have {activeCount} reminders active</p>
      </div>
    </div>
  )
}

export default TodoList