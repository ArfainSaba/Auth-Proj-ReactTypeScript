import React, { useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import "./Verify.css";
import { Registration } from './Registration';
import { Login } from '../dto/login';
import userService from '../services/user.service';
import { Content } from './Content';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';



function Verify(props: any) {

  const location = useLocation();
 
  const [creds, setCreds] = useState<Login>({ Username: '', DeviceId: '', Code: '' });
  
  const handleOnChange = (event: any) => {
     setCreds({Username: location.state?.Username , DeviceId:location.state?.DeviceId, Code: event.target.value });   
  }

  const navigate = useNavigate();
  const HandleClick = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleclick triggered")
    
    const response = await userService.userVerify(creds);
    if (response.action === "New User")
    {
      navigate('/Registration');
      }
      else if(response.action==='Failed'){
        navigate('/Content');
      }

    if (response.action === "Verified")
    {
      console.log("verified");
      navigate('/Dashboard');
    }
    // if(response.ok){
    //   navigate('/Content');
    // }
    
  }
  

  const handleSubmit = async () => {
    const response = await userService.userVerify(creds);
    console.log(response);
    
    
    // if(response.ok){
    //   navigate('/Dashboard',{ state: { Username: creds.Username, DeviceId: creds.DeviceId } });
    // }
   
      if (response.action === "Verified")
    {
      console.log(response);
      navigate('/Navbar',{ state: { Username: creds.Username, DeviceId: creds.DeviceId } });
    }
    else{
      navigate('/Registration')
    }

  }

    return (
      <div className="container">
      <form onSubmit={HandleClick}>
        
          <div className="content">
           <h1 className="headtext">Enter the code you recieved on {location.state?.Username}</h1>
           <hr />
          <div className="justify">
          <div className="box">
          <input className="b1" type="number" name="code" id="code" placeholder="Enter code" onChange={handleOnChange} required value={creds.Code}/> 
          <button className="b2" type="submit"  >Submit</button>
          </div>
          </div>
          </div>
        
        </form>
        <Routes>
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Content" element={<Content/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
      </Routes>
      </div>
    );
  }

  export {Verify};