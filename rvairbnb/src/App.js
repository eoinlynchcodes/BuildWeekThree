import React from "react";
import { NavLink, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
    </div>

  );
}

export default App;
