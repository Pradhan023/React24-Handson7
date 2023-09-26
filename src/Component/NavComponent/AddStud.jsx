import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../ReduxComp/Slice/Slice'
import './Newpage.css'

const AddStud = () => {
  const dispatch = useDispatch();
  const Nav = useNavigate()
  const [newinfo,setnewinfo] = useState({
    name: '',
    age: '',
    course: '',
    batch: ''
  })

  const Handlechange = (e)=>{
    setnewinfo({...newinfo , [e.target.name] : [e.target.value]})
  } 

  const Handleclick = ()=>{
    dispatch(addStudent(newinfo))
    Nav('/student');
  } 
  return (
    <>
    <form>
        <label>Name: </label>
        <input type='text' name='name' placeholder="Enter Your Name" onChange={Handlechange} />
        <label>Age: </label>
        <input type='number' name='age' placeholder="Enter Your Age" onChange={Handlechange} /><br/><br/>
        <label>Course: </label>
        <input type='text' name='course' placeholder="Enter Your Course" onChange={Handlechange} />
        <label>Batch: </label>
        <input type='text' name='batch' placeholder="Enter Your Batch" onChange={Handlechange} />
    </form>
    <div className='newbtn'>
        <button onClick={Handleclick} >Submit</button>
        <button onClick={()=> Nav('/student')}>Cancel</button>
    </div>
    </>
  )
}

export default AddStud