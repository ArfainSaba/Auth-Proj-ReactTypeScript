import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import userService from '../services/user.service';
import "./Validation.css"
import { Verify } from './Verify';
import { Login } from '../dto/login';
import {v4 as uuidv4} from 'uuid';
import { Registration } from './Registration';


function Validation() {
  const [creds, setCreds] = useState<Login>({ Username: "", DeviceId: "" });
  
  const handleOnChange = (event: any) => { 
    setCreds({Username: event.target.value, DeviceId:uuidv4() });
  }

  const navigate = useNavigate();
  const HandleClick = async () => {
    userService.userValidation(creds);
  }

  const handleSubmit = (event:any) => { 
    navigate('/Verify',{ state: { Username: creds.Username, DeviceId: creds.DeviceId } });
  }

    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
          <div className="content">
           <h1 className="headtext">Enter your email to proceed:</h1>
           <hr />
          <div className="justify">
          <div className="box"> 
          <input type="email" id="email" placeholder="Enter Your Email" className="b1" onChange={handleOnChange} required value={creds.Username} />
          <button type="submit" className="b2" onClick={HandleClick}>Send Code</button>
          </div>
          </div>
          </div>
          </form>
          <Routes>
          <Route path="/Verify" element={<Verify/>} />
        </Routes>
        </div>
    );
  }

  export {Validation};