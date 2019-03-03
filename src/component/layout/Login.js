import React from 'react';
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Test</NavLink></li>
        </ul>
    )
}
export default Login