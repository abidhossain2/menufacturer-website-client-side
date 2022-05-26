import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiCarWheel } from 'react-icons/gi'
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Menubar.css'

const Menubar = () => {
    const navigate = useNavigate()
    let activeStyle = {
        color: 'orange'
    };
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        navigate('/')
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
                        {user && <NavLink className='menu-link display-name' to="" >{user?.displayName}</NavLink>}
                        <NavLink className='menu-link' to="/" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Home</NavLink>
                        <NavLink className='menu-link' to="/blogs" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Blogs</NavLink>
                        <NavLink className='menu-link' to="/myportfolio" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>My Portfolio</NavLink>
                        
                        {user && <NavLink className='menu-link' to="/dashboard" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Dashboard</NavLink>}
                        {!user && <NavLink className='menu-link' to="/signin" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Sign In</NavLink>}
                        {!user && <NavLink className='menu-link' to="/register" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Register</NavLink>}
                        {user && <NavLink className='menu-link' to="" onClick={logout}>Sign Out</NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;