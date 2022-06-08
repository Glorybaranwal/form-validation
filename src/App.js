import './App.css';
import Home from './Component/Home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/Register/register.js'
import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Component/header';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <Register/>
        {/* <main className="container">
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route path='/register' render={() => (
            <Register/>
          )} />
         
        </main> */}
      </Fragment>
    </div>
  );
}

export default App;
