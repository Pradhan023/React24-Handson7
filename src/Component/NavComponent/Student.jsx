import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const Student = () => {
  const data = useSelector((state) => state.Stud_Data)
  const Nav = useNavigate();
  return (
    <>
    <h1 style={{margin:'1rem 0 0 5rem' , fontSize:'2.5rem' ,color:'lightblue'}}>Student Page</h1>
    <div className='Addbtn'>
      <button onClick={() => Nav('/add')} >Add New Student</button>
    </div>
    {
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Change</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index) => {
              return(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td><Link to='/edit' state={{index}} className='link'>Edit</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    }
    </>
  )
}

export default Student

