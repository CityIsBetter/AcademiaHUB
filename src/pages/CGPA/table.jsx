import React, { useState } from 'react'
import './table.css'

var grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "P":4,
    "F":0,
    "Ab":0,
    "I":0
};

const Table = ({rows}) => {

    const [gpa, setGpa] = useState('');

    const calculate = () => {
        var grade_list = document.getElementsByClassName("grade-option");
        var credit_list = document.getElementsByClassName("credit");
        var points = 0;
        var sum_credits = 0;
        for(var i=0; i<credit_list.length; i++)
            {
                if(credit_list[i].value==="")
                    {
                        var credit = 0;
                    }
                else
                {
                    var credit = Number(credit_list[i].value);
                }
                sum_credits+=credit;
                var gradept = grade_points[grade_list[i].value];
                points+=credit*gradept;
            }
        var gpa = (points/sum_credits).toFixed(2);
        setGpa(gpa);
    }
  return (
    <div>
        {gpa && <div className="result_container" onClick={(e) => {
                    if(e.target.className === "result_container") setGpa('');
                }}>
            <div className="result">
                <p>Your GPA: {gpa}</p>
                <button className='ok_btn' onClick={() => setGpa('')}>Ok</button>
            </div>
        </div>}
        <div className="table_wrapper">
            <table className='cgpa_table'>
            <thead>
                <tr>
                <th>No</th>
                <th>Credits</th>
                <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return <tr key={index}>
                            <td>{row}</td>
                            <td><input type='number' className='credit'></input></td>
                            <td>
                            <select className="grade-option">
                                <option>O</option>
                                <option>A+</option>
                                <option>A</option>
                                <option>B+</option>
                                <option>B</option>
                                <option>C</option>
                                <option>P</option>
                                <option>F</option>
                                <option>Ab</option>
                                <option>I</option>
                            </select>
                        </td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
        <button onClick={calculate} className='cal_btn'>Calculate</button>
    </div>
  )
}

export default Table