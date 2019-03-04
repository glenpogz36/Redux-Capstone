import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

const Navbar = () => {
    return (
        <nav className="nav-wrapper #263238 blue-grey darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Capstone</Link>
                <Login />
                <Logout />
            </div>
        </nav>
    )
}

export default Navbar