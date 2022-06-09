import './App.css';
import Home from './Component/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/register.js'
import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Component/header';
import Login from './Component/login'


function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;