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
     return (
        <>
            <div className='nested-link-container'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link to='/' className='ms-auto home-link'>Go to Home Page</Link>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                               
                                {admin ? <NavLink to='/dashboard' className='nested-link'>Add Product</NavLink> : <NavLink to='/dashboard' className='nested-link'>My Orders</NavLink>}
                                {admin ? <NavLink to='manageproducts' className='nested-link' >Manage Products</NavLink> : <NavLink to='addreview' className='nested-link' >Add Review</NavLink>}
                                {admin && <NavLink to='addreview' className='nested-link' >Make Admin</NavLink>}
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