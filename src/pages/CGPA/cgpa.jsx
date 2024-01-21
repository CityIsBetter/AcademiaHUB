import React, { useState } from 'react';
import './cgpa.css';
import Table from './table';

const Cgpa = () => {

  const [rows, setRows] = useState([1,2,3,4,5]);

  const handleSubmit = () => {
    setRows([...rows, rows.length+1])
  }
  return (
    <>
    <div className="cgpa_wrapper">
      <div className='cgpa_container'>
        <h1>CGPA Calculator</h1>
        <Table rows={rows}/>
        <button onClick={handleSubmit} className='add_btn'>Add course</button>
      </div>
    </div>
    </>
  )
}

export default Cgpa