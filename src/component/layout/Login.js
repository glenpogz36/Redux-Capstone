import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/createproject'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating N/A transparent">NN</NavLink></li>
            </ul>
        </div>
    )
}

export default Login