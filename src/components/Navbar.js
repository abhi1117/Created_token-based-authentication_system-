import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <Link aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-1" >
                            <Link  to="/about">About</Link>
                        </li>

                    </ul>
                    <form className="d-flex"> 
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Login as
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" to="/login">Admin</Link></li>
                        <li><Link className="dropdown-item" to="/Coordinator">Coordinator</Link></li>
                        <li><Link className="dropdown-item" to="/Faculty">Faculty</Link></li>
                        <li><Link className="dropdown-item" to="/login">Student</Link></li>
                    </ul>
                    </div>
                    
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
