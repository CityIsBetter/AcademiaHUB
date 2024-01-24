import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Rectangle, CartesianGrid, Tooltip } from 'recharts';
import './table.css';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'

const Table = ({rows, deleteRow, editRow}) => {

  const data = rows.map((row) => [{course: row.course ,attendance: Math.round((((((row.totalHours - row.bunkedHours) / row.totalHours).toFixed(4))*100) + Number.EPSILON) * 100) / 100}]).flat();

  return (
    <div className='table_container'>
      <h1>Bunk Manager</h1>
      <div className='graph'>
      <BarChart width={600} height={300} data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} className='graph'>
        <XAxis dataKey="course" stroke="#8884d8" />
        <YAxis  type='number' domain={[0, 100]}/>
        <CartesianGrid stroke="#333" strokeDasharray="10 10" />
        <Bar dataKey="attendance" fill="#8884d8" barSize={20} activeBar={<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
      </div>
      <div className="course">
        <div className='table_wrapper'>
          <table className='table'>
            <thead>
              <tr>
                <th>Course name</th>
                <th>Bunked Hours</th>
                <th>Total Hours</th>
                <th>Attendance %</th>
                <th>Safe Bunk</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return <tr key={index}>
                                <td>{row.course}</td>
                                <td>{row.bunkedHours}</td>
                                <td>{row.totalHours}</td>
                                <td>{Math.round((((((row.totalHours - row.bunkedHours) / row.totalHours).toFixed(4))*100) + Number.EPSILON) * 100) / 100}%</td>
                                {((row.totalHours - row.bunkedHours) / row.totalHours)*100 < 75 ? <td className='red'>{((75*row.totalHours) - 100 *(row.totalHours - row.bunkedHours)) / -(100-75)}</td> : <td className='green'>{Math.floor((100 * (row.totalHours - row.bunkedHours) - 75 * row.totalHours) / 75)}</td>}
                                <td className='actions'>
                                    <button type="button" className='edit_btn' onClick={() => editRow(index)}><FaEdit /></button>
                                    <button type='button' className='delete_btn' onClick={() => deleteRow(row.course)}><FaRegTrashAlt /></button>
                                </td>
                               </tr>
                               
                    })
                }
            </tbody>
          </table>
        </div> 
      </div>
    </div>
  )
}

export default Table