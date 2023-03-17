import React, { useState } from "react";
import "./Registration.css";


function Registration() {
  const[fname, setFname] = useState('');
  const[lname, setLname] = useState('');
  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[phno, setPhno] = useState('');
  const handleOnChange = (event: any) => {
    
    setFname(event.target.value);
    setLname(event.target.value);
    setEmail(event.target.value);
    setUsername(event.target.value);
    setPhno(event.target.value);

  }
  const handleClick= async()=>{
      const response = await fetch("https://anisoft.us/gapshup/api/user/chatuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'FirstName': fname,    'LastName': lname,    'Email': email,    'DeviceId': "123",    'DisplayName': username,    'PhoneNumber': phno })
      });
      const json = await response.json()
        console.log(json);
        if (json.success){
        }
        else{
            alert("Invalid credentials");
        }
        
  }
    return (
        <form action="" method="post">
        <div className="container">
            <div className="content">
            <h1 className="headtext">Register</h1>
            <hr />
            <div className="justify">
            <div className="box">
                <div className="box-1">
                    <input className="b1" type="text" name="f-name" id="f-name" placeholder="Enter your first-name" required onChange={handleOnChange}value={fname}/>
                    <input className="b1" type="text" name="l-name" id="l-name" placeholder="Enter your last-name" onChange={handleOnChange} required value={lname}/>
                </div>
                <input className="b1" type="email" name="email" id="email" placeholder="Enter your email"onChange={handleOnChange} required value={email}/>
                <input className="b1" type="text" name="user-name" id="user" placeholder="Enter a username" onChange={handleOnChange} required value={username}/>
                <input className="b1" type="tel" name="phn" id="phn-num" placeholder="Enter Phone number" onChange={handleOnChange} required value={phno}/>
                <button className="b2" type="submit">Submit</button>
                </div>
            </div>
            </div>
        </div>
        </form>
    );
  }

  export {Registration};