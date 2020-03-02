import React from 'react';
import Login from './Login';
import Register from './Register';
import { NavLink } from 'react-router-dom';

export default function HomePage(){

    return(
        <div>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
        </div>
    )

}

    