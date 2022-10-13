import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {URL} from "./url"
export function Getstudentdetails() {
  const navigate = useNavigate();
  const {id}=useParams();
  const [std, setstd] = useState({});
  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setstd(data));
  }, []);
  return (
    <div>
      <h1>name:{std.name}</h1>
      <h1>email:{std.email}</h1>
      <h1>id:{std.id}</h1>
      <button onClick={(()=>navigate(-1))}>back</button>
    </div>
  );
}
