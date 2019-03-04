import React from 'react'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'
import LogOut from './LogOut'

const Navbar = () => {
    return (
        <nav className="nav-wrapper #263238 blue-grey darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Capstone</Link>
                <LogIn />
                <LogOut />
            </div>
        </nav>
    )
}

export default Navbar