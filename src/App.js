import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SingUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
import MyAppointments from './Pages/Dashboard/MyAppiontment';
import MyHistory from './Pages/Dashboard/MyHistory';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/Users';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="appointment" element={
        <RequireAuth>
          <Appointment />
        </RequireAuth>
      } />
      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path="review" element={<MyReview></MyReview>}></Route>
        <Route path="history" element={<MyHistory></MyHistory>}></Route>
        <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
    <ToastContainer />
  </div>
  );
}

export default App;
