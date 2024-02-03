import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';

const Update = () => {
  
  const history = useNavigate();
const [id , setid]=useState("");
const [name , setname]=useState("");
const [email , setemail]=useState("");

useEffect(()=>{
  setid(localStorage.getItem("id"))
  setname(localStorage.getItem("name"))
  setemail(localStorage.getItem("email"))
},[])

const handlesubmit=(e)=>{
  e.preventDefault();
axios.put( 'https://658878e690fa4d3dabf9f71e.mockapi.io/myapi/' + id ,
{name: name , email: email}
)
.then(()=>{
history('/read')
})

}

  return (
    <div>
      <h1>Update</h1>
<form>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="name" className="form-control" value={name}  onChange={(e)=>setname(e.target.value)}  />
</div>
<div className="mb-3">
<label  >email</label>
<input  type='email' className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />
</div>

<button type="submit" className="btn btn-primary" onClick={handlesubmit}  >Update </button>
&nbsp;
<Link to='/read'>
<button type="submit" className="btn btn-secondary"  >Back </button>
</Link>
</form>
    </div>
  )
}
 
export default Update
