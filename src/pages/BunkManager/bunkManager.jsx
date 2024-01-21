import {React, useState, useEffect} from 'react'

import './bunkManager.css'
import Modal from './Modal.jsx'
import Table from './table.jsx'

import db from '../../component/googleSignIn/config.js';
import { setDoc, collection, doc, getDocs, deleteDoc } from "firebase/firestore";

const BunkManager = () => {
  
  const userEmail = localStorage.getItem("email-unihub");
  const [change, setChange] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const getData = async () => {
    console.log("no. of getData calls");
    const docRef = collection(db, "bunkManager",`${userEmail}`,"course");
    const dataDB = await getDocs(docRef);
    const allData = dataDB.docs.map(val => ({course:val.id, ...val.data(),}));
    setRows(allData);
  };

  useEffect(() => {
    getData();
    console.log("useEffect");
  },[change]);

  const handleSubmit = async (newRow) => {
    await setDoc(doc(db,"bunkManager", userEmail, "course",newRow.course), {
      bunkedHours: newRow.bunkedHours,
      totalHours: newRow.totalHours
    });
    setChange(!change);
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);
    setChange(!change);

    setModalOpen(true);
  };

  const handleDeleteRow = async (course) => {
    await deleteDoc(doc(db, "bunkManager", userEmail, "course",course));
    setChange(!change);
  };

  return (
    <>
    <div className="bunkManager">
      <div className='bunkManager_container'>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button className='submit_btn' onClick={() => setModalOpen(true)}>Add Course</button>
        {modalOpen && <Modal closeModal={() => {setModalOpen(false); setRowToEdit(null);}} onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]}/>}
      </div>
    </div>
    </>
  )
}

export default BunkManager