import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, LogoutBtn } from '../index.js'


function Header() {

    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    // const navItems = [
    //     {
    //         name: "Home",
    //         slug: "/",
    //         active: true
    //     },
    //     {
    //         name: "Login",
    //         slug: "/login",
    //         active: !authStatus
    //     },
    //     {
    //         name: "Signup",
    //         slug: "/signup",
    //         active: !authStatus
    //     },
    //     {
    //         name: "All Posts",
    //         slug: "/all-posts",
    //         active: authStatus
    //     },
    //     {
    //         name: "Add Post",
    //         slug: "/add-post",
    //         active: authStatus
    //     }
    // ]

    return (

        
            <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-md">

                    <Link to="/">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61PACBk46hL.png" alt="logo" width="50" height="50" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarHeader">

                        <ul className="navbar-nav mb-2 mb-sm-0">
                            <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>
                            {authStatus && <li className="nav-item">
                            <NavLink className="nav-link" to='/all-posts'>All  Posts</NavLink>
                            </li> &&
                            <li className="nav-item">
                            <NavLink className="nav-link" to='/add-post'>Add Post</NavLink>
                            </li>}
                        </ul>

                        {!authStatus && <div className="d-flex ms-auto">
                            <button className='btn btn-primary me-1' onClick={() => navigate("/login")}>Log in</button>
                            <button className='btn btn-danger ms-1' onClick={() => navigate("/signup")}>Sign up</button>
                        </div>}

                        {authStatus && <div className="d-flex ms-auto">
                            <LogoutBtn />
                        </div>}

                    </div>

                </div>
            </nav>
        
    )
}

export default Header
