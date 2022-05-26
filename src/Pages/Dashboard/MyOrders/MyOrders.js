import React, { useEffect, useState } from 'react';
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
        <div className='user-order-container'>
            {
                orders.map((order) => <MyOrderTable
                    key={order._id}
                    order={order}
                   
                ></MyOrderTable>)
            }
        </div>
    );
};

export default MyOrders;