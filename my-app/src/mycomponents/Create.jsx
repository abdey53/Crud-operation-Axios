import React, { useState } from 'react'
import axios from "axios";
import { useNavigate ,Link} from 'react-router-dom';


const Create = () => {
const[name , setname]=useState()
const[email , setemail]=useState()

const history = useNavigate()
const headers = {"Access-control-Allow-Origin": "*" };

const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post(
    'https://658878e690fa4d3dabf9f71e.mockapi.io/myapi', 
    {name : name , email: email},
    headers,
  )
  .then(()=>{
    
    history('/read')
  })
}
  return (
    <div>
      <div className='d-flex justify-content-between  '>
      <h1>Create</h1>
      <Link to='/read'>
      <button className='bg-primary border rounded mt-3 p-2 text-white'>Show Data</button>
      </Link>
      </div>

      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="name" className="form-control"  onChange={(e)=>setname(e.target.value) }  />
  </div>
  <div className="mb-3">
    <label  >email</label>
    <input  type='email' className="form-control" onChange={(e)=>setemail(e.target.value)} />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}  >Submit </button>
</form>
    </div>
  )
}

export default Create
