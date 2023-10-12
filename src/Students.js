import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {URL} from "./url"
export function Students() {
  const [state, setstate] = useState([]);
  const[loading,setloading]=useState(false)
  const getstudents = async () => {
    try {
      const res = await axios.get(`${URL}/api/student/getall` );
      setstate(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getstudents();
  }, []);
  

    const dele=async(id)=>{
      try{
      await setloading(true)
      await axios.delete(`${URL}/api/student/del/${id}`);
      await alert("deleted successfully");
      await getstudents();
     await setloading(false);
      }catch(err){
        console.log(err);
        await alert(err.message);
        await setloading(false);
      }
    }

 
if(loading){
  return(
    <div>
      loading...
    </div>
  )
}
  return (
    <div className='table'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">About</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {state.map((st) => <Component1 value={st}  deletebutton={<button type="button" class="btn btn-danger" onClick={(()=>{dele(st._id)})}>Delete</button>}/>)}
        </tbody>
      </table>
    </div>
  );
}

function Component1({value,deletebutton}){
  const navigate=useNavigate();
  return(
      <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.email}</td>
      <td><button type="button" class="btn btn-info"  onClick={(()=>navigate(`/aboutstudents/${value._id}`))}>Info</button></td>
      <td>{deletebutton}</td>
      <td><button type="button" class="btn btn-warning" onClick={(()=>navigate(`/editstudent/${value._id}`))}>Edit</button></td>
    </tr>
  )
}


