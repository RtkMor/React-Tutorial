import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-md">

            <img src="https://images-na.ssl-images-amazon.com/images/I/61PACBk46hL.png" alt="logo" width="50" height="50" />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarHeader">

                <ul className="navbar-nav mb-2 mb-sm-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to=''>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/github'>Github</NavLink>
                    </li>
                </ul>

                <div className="d-flex ms-auto">
                    <button className='btn btn-light me-1'>Log in</button>
                    <button className='btn btn-danger ms-1'>Get Started</button>
                </div>

            </div>

        </div>
    </nav>
  )
}

export default Header
