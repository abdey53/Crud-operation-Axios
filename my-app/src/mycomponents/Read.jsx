import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

  const [data , setdata]=useState([]);
  const [tabledark , settabledark]=useState('');

     // data Get krne ke liye
  useEffect(()=>{
   const getdata=()=>{
            axios.get("https://658878e690fa4d3dabf9f71e.mockapi.io/myapi")
            .then((res)=>{
              console.log(res.data)
              setdata(res.data)
            })
          }
        getdata()
      },[])
        
        
      // data delete krne ke liye
      const handledelete=(id)=>{
          alert("Are you sure you want to Delete")
          axios.delete("https://658878e690fa4d3dabf9f71e.mockapi.io/myapi/" + id )
          .then(()=>{
            // getdata()
            window.location.reload();
          })
        }
    
//  Data update ke liye
const setToLocalStorage=(id , name , email)=>{
localStorage.setItem( "id" , id);
localStorage.setItem( "name" , name);
localStorage.setItem("email" , email);
}

  return (
    <div>
      <div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" onClick={()=>{
  if(tabledark === 'table-dark'){
    settabledark("")
  }
  else(settabledark('table-dark'))
  }} role="switch" id="flexSwitchCheckDefault"/>
</div>
<div className='d-flex justify-content-between'>
      <h1>Read</h1>
      <Link to="/" >
     <button className='bg-success border rounded w-600 text-white p-2'>Create +</button>
      </Link>
</div>
      <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Control</th>

    </tr>

  </thead>
  

    {
      
      data.map((eachdata)=>{
        return(
         
    <tbody>
    <tr key='id'>
      <th>{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <td>
        <Link to='/update'>
        <button className='bg-success text-white' onClick={()=>setToLocalStorage(eachdata.id , eachdata.name , eachdata.email)}>Edit</button>
        </Link>
        &nbsp; &nbsp;
        <button className='bg-danger text-white' onClick={()=>handledelete(eachdata.id)}>Delete</button>
      </td>
     
    </tr>
  </tbody>
        

  )
})

    }
   
</table>
    </div>
  )
}

export default Read
