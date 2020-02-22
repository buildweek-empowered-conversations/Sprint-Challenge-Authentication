import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";

import './App.css';
import axios from 'axios'
import Register from './components/Register'
import Login from './components/Login';
import Jokes from './components/Jokes'

function App() {

   
  return (
    <div className="App">
      <div className ='title'>
      <h1>Dad Jokes API</h1>

      </div>
   

  <Router>
  <Route exact path="/register" component={Register} />
  <Route exact path="/login" component={Login} />
  <PrivateRoute path="/jokes" component={Jokes} />



  </Router>
    </div>
  );
}

export default App;
