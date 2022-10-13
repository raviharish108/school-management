import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {URL} from "./url"
export function Students() {
  const [state, setstate] = useState([]);
  // let URL = "https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails";
// let URL="http://localhost:4000/alladmissions";
  let Data=(() => {
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>setstate(data))
})
  useEffect(()=>{
    Data();
  },[]);
  let dele=(id)=>{
    fetch(`${URL}/${id}`,{method:"DELETE"})
   .then(()=>Data());
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
          {state.map((st) => <Component1 value={st}  deletebutton={<button type="button" class="btn btn-danger" onClick={(()=>{dele(st.id)})}>Delete</button>}/>)}
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
      <td><button type="button" class="btn btn-info"  onClick={(()=>navigate(`/aboutstudents/${value.id}`))}>Info</button></td>
      <td>{deletebutton}</td>
      <td><button type="button" class="btn btn-warning" onClick={(()=>navigate(`/editstudent/${value.id}`))}>Edit</button></td>
    </tr>
  )
}


