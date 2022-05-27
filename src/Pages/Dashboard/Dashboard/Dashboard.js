import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../CustomHook/useAdmin';
import auth from '../../../firebase.init';
import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    let activeStyle = {
        color: 'orange'
    };

    return (
        <>
            <div className='nested-link-container  sticky-top'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Link to='/' className='ms-auto home-link'>Go to Home Page</Link>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='links'/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">

                                {admin ? <NavLink to='/dashboard' className='nested-link' >Add Product</NavLink> : <NavLink to='/dashboard' className='nested-link'>My Orders</NavLink>}
                                {admin ? <NavLink to='manageproducts' className='nested-link' style={({ isActive }) => isActive ? activeStyle : undefined}>Manage Products</NavLink> : <NavLink to='addreview' className='nested-link' style={({ isActive }) => isActive ? activeStyle : undefined}>Add Review</NavLink>}
                                {admin && <NavLink to='manageorders' className='nested-link' style={({ isActive }) => isActive ? activeStyle : undefined}>Manage Orders</NavLink>}
                                {admin && <NavLink to='users' className='nested-link' style={({ isActive }) => isActive ? activeStyle : undefined}>Make Admin</NavLink>}
                                <NavLink to='myprofile' className='nested-link' style={({ isActive }) => isActive ? activeStyle : undefined}>My Profile</NavLink>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    );
};

export default Dashboard;