import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Validation } from './components/Validation';
import { Registration } from './components/Registration';
import './App.css';
import { Verify } from './components/Verify';
import { Dashboard } from './components/Dashboard';
import { Content } from './components/Content';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/Registration" element={<Registration/>}/>
        <Route path="/" element={<Validation/>}/>
          <Route path="/Verify/*" element={<Verify/>}/>
          {/* <Route path="/"/> */}
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Content" element={<Content/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
