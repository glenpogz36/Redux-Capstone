import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const LogIn = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/createProject'>New Project</NavLink></li>
                <li><button className="btn btn-danger" onClick={props.signOut}>Log Out</button></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LogIn)