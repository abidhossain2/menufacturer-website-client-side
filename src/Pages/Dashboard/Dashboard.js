import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import './Dashboard.css'

const Dashboard = () => {
    
    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div className='nested-link-container'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink to='/dashboard' className='nested-link'>My Orders</NavLink>
                                <NavLink to='addreview' className='nested-link' >Add Review</NavLink>
                                <NavLink to='myprofile' className='nested-link' >My Profile</NavLink>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;