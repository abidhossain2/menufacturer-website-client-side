import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiCartwheel } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    let activeStyle = {
        color: 'orange',
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><span className='first-heading-name'>Delta</span> <br />
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center'>
                            <span className='second-heading-name'>Tw</span>
                            <span><GiCartwheel className='wheel'></GiCartwheel></span>
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
                        <NavLink className='menu-link' to="/signin" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Sign In</NavLink>
                        <NavLink className='menu-link' to="dashboard" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Dashboard</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;