import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import SingUp from './Pages/Login/SingUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SingUp />}></Route>
      </Routes>
    </div >
  );
}

export default App;
