import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink, Link } from 'react-router-dom';
import logo from "../../../images/doctor-14109.png";

import "./Navbar.css";
const Navigationbar = () => {
    return (
        <div>
            <Navbar variant="light" className="sticky-top" expand="lg" style={{backgroundColor:"darkcyan"}}>
            <Container>
            <Navbar.Brand><Nav.Link as={NavLink} to="/home" href="#"><img className="w-10" src={logo} alt="" /><span className="title text-black fs-2 fw-bold">Doctors Gateway</span> </Nav.Link></Navbar.Brand>


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

   
            <Nav className="ms-auto text-center">
            <Nav.Link style={{color:'#000', fontWeight:'600'}}  as={Link} to="/">Home</Nav.Link>

            <Nav.Link style={{color:'#000', fontWeight:'600'}}  as ={NavLink} to="/appointment" >Appointment</Nav.Link>
            <Nav.Link style={{color:'#000', fontWeight:'600'}}  as ={NavLink} to="/login" >Login</Nav.Link>
            {/* {
                user?.email && 
                <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/mainboard" ><Button style={{borderRadius:"50px"}} className="btn btn-success"  >Dashboard</Button></Nav.Link>
            }
            {
                user?.email ? 
                <Nav.Link><Button className="btn btn-danger" style={{ fontWeight:'600', borderRadius:"50px"}} onClick={logOut}   >LogOut </Button></Nav.Link>
                :
                <Button style={{fontWeight:'600'}} className="btn btn-white" as ={NavLink} to="/login">Login</Button>
            }
            {
                user?.email && <Nav.Link style={{fontWeight:'600' , borderRadius:"50px"}}  as ={NavLink} to="/mainboard" >{user.displayName}</Nav.Link>
            } */}
                    </Nav>

        </Navbar.Collapse>
        </Container>
        </Navbar>

        </div>
    );
};

export default Navigationbar;