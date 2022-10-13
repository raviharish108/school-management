import React from 'react';
import './App.css';
import { Routes, Route,Link } from "react-router-dom";
import { About } from './About';
import { Header } from './Header';
import { Photos } from './Photos';
import { Discover } from './Discover';
import { Students } from './Students';
import {Getstudentdetails} from './Getstudentdetails'
import {Admission_form} from './Admission_form'
import {Edit} from './Edit'
function App(){
    return(
      <div>
        <Head/>
        <div className='content'>
        <Routes>
           <Route path="/" element={<App1/>}/>
           <Route path="/admission" element={ <Admission_form/>}/>
           <Route path="/add_photos" element={ <Discover/>}/>
           <Route path="/allstudents" element={<Students/>}/>
           <Route path="/aboutstudents/:id" element={<Getstudentdetails />} />
           <Route path="/editstudent/:id" element={<Edit/>}/>
          </Routes> 
         </div>
      </div>
    )
  }
  function Head(){
    return(
   
      <ul class="sidenav">
           <li><Link to="/" className="link">Home</Link></li>
           <li><Link to="/admission" className="link">Admission</Link></li>
           <li><Link to="/allstudents" className="link">All student details</Link></li>
           <li><Link to="/add_photos" className="link">Add Photos</Link></li>
      </ul>
    )
  }
  function App1(){
    return(
      <div>
          <Header/>
          <About/>
          <Photos/>
          
      </div>
    )
  }
export default App;
