import React from "react";
import { NavLink, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>

      <Route exact path='/' component={App}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
    </div>

  );
}

export default App;
