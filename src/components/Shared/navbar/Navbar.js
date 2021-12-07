import React from 'react';
import logo from "../../../images/doctor-14109.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <nav class="fixed-top navbar navbar-expand-lg navbar-dark px-5 mb-5" style={{backgroundColor: "#3A4256"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className="" src={logo} alt="" /><span class="title text-white fw-bold">  Doctors Getway </span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul></ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Link</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;