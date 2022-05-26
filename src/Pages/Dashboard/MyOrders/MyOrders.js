import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrderTable from './MyOrderTable';


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const userEmail = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${userEmail}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    }, [userEmail])

   
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Address</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Payment</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => <MyOrderTable
                    key={order._id}
                    order={order}
                    index={index}
                    ></MyOrderTable>)
                }
                
            </tbody>
        </Table>
    );
};

export default MyOrders;