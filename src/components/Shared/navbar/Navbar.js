import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../../images/doctor-14109.png";

import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark px-5 mb-5" style={{backgroundColor: "#3A4256"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className="" src={logo} alt="" /><span className="title text-white fw-bold">  Doctors Getway </span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul></ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/appointment"><a className="nav-link active" aria-current="page" href='//'>Appointment</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/signup"><a className="nav-link active" aria-current="page" href='//'>Sign Up</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login"><a className="nav-link active" aria-current="page" href='//'>login</a></Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;