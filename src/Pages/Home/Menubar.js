import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiCarWheel } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    let activeStyle = {
        color: 'orange',
        borderBottom: '3px solid orange',
     
    };
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><span className='first-heading-name'>Delta</span> <br />
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center'>
                            <span className='second-heading-name'>Tw</span>
                            <span><GiCarWheel className='wheel'></GiCarWheel></span>
                        </div>
                        <span className='third-heading-name ms-2'>Wheeler Industry</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='menu-link' to="/" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Home</NavLink>
                        <NavLink className='menu-link' to="/blogs" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Blogs</NavLink>
                        
                        <NavLink className='menu-link' to="dashboard" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Dashboard</NavLink>
                        <NavLink className='menu-link' to="/signin" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Sign In</NavLink>
                        <NavLink className='menu-link' to="/register" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;