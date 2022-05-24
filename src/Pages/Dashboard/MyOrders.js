import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const paybtn = {
        border: "none",background:"orange",borderRadius: "10px", padding: "2px 21px",fontFamily: 'Milonga',color: "white",fontSize: "16px"
    }
    const cancelbtn = {
        border: "none",background:"#ff2600",borderRadius: "10px", padding: "2px 21px",fontFamily: 'Milonga',color: "white",fontSize: "16px"
    }
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const userEmail = user?.email;
        fetch(`http://localhost:5000/orders?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
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
                    <th>Cancel Order</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => 
                    <tr>
                        <td>{index+ 1}</td>
                        <td>{order?.userName}</td>
                        <td>{order?.userEmail}</td>
                        <td>{order?.phone}</td>
                        <td>{order?.address}</td>
                        <td>{order?.name}</td>
                        <td>{order?.orderQuantity} Pieces</td>
                        <td>{order?.totalPrice} Taka</td>
                        <td><button style={paybtn}>Pay</button></td>
                        <td><button style={cancelbtn}>Cancel Order</button></td>
                    </tr>)
                }
                
            </tbody>
        </Table>
    );
};

export default MyOrders;