import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import {useState} from 'react'
import {URL} from "./url"
import axios from 'axios';
export  function Edit(){
  const[std,setstd]=useState(null)
  const {id}=useParams();
  let result=async()=>{
    try{
    const response=await axios.get(`${URL}/api/student/onestd/${id}`)
    setstd(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    result();
  })
  return(
    std ? <Editform student={std}/> : "loading..."   
  )
}


 function Editform({student}){
  const {id}=useParams();
  const formik = useFormik({
    initialValues: {
      name:student.name,
      email:student.email,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('specify student name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('specify your email id'),
    }),
    onSubmit: values => {
      updateStudent(id,values);
     
    },
  });
  const navigate=useNavigate();
 const updateStudent = async (Id,newpayload) => {
  try{
   await 
  await axios.put(`${URL}/api/student/update/${Id}`,newpayload);
  await  navigate("/allstudents");
 }catch(err){
    console.log(err);
  }
  }
  return (
    <form onSubmit={formik.handleSubmit} className="admission_form">
       <TextField
           error={formik.touched.name && formik.errors.name}
           helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
          id="outlined-error"
          label="Name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="textfield"
        />
        <br/>
      {/* {formik.touched.name && formik.errors.name ? (
        <div className='textfield'>{formik.errors.name}</div>
      ) : null} */}
{/* 
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null} */}
      <TextField
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
          type="email"
          id="outlined-error"
          label="email_address"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="textfield"
        />
        {/* {formik.touched.email && formik.errors.email ? (
        <div className='textfield'>{formik.errors.email}</div>
      ) : null} */}
      <br/>
      <button type="submit" >save</button>
    </form>
  );
};
 