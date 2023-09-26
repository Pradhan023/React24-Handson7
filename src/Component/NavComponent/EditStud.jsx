import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {editStudent} from '../ReduxComp/Slice/Slice'
import './Newpage.css'

const EditStud = () => {
    const index = useLocation().state.index;
    const data = useSelector((state) => state.Stud_Data);
    const Nav = useNavigate();
    const dispatch =useDispatch();

    const [info ,setinfo] = useState({
        name : data[index].name,
        age : data[index].age,
        course : data[index].course ,
        batch : data[index].batch
    })
    
    const Handlechange = (e)=>{
        setinfo({...info , [e.target.name] : e.target.value})
    }

    const Handleclick = () =>{
        dispatch(editStudent({info,index}));
        Nav('/student');
    }

  return (
    <>
    <form>
        <label>Name: </label>
        <input type='text' name='name' placeholder={data[index].name}  onChange={Handlechange} />
        <label>Age: </label>
        <input type='number' name='age' placeholder={data[index].age} onChange={Handlechange} /><br/><br/>
        <label>Course: </label>
        <input type='text' name='course' placeholder={data[index].course} onChange={Handlechange} />
        <label>Batch: </label>
        <input type='text' name='batch' placeholder={data[index].batch} onChange={Handlechange} />
    </form>
    <div className='newbtn'>
        <button onClick={Handleclick} >Submit</button>
        <button onClick={()=>Nav('/student')}>Cancel</button>
    </div>
    </>
  )
}

export default EditStud