import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import Signup from './pages/Signup/signup';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUser = (userData) => {
      setCurrentUser(userData);
  };
  return (
    <>
      <Routes>

      <Route path='/' element={<Login updateUser={updateUser} />} />
      <Route path='/home' element={currentUser ? <Home /> : <Navigate to="/" />} />
      
        <Route path='/signup' element={<Signup />} />
        <Route path='/register' element={currentUser ? <Register /> : <Navigate to="/" />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
