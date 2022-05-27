import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import './ManageOrders.css'
import ManageOrderTable from './ManageOrderTable';

const ManageOrders = () => {
    const {data: allOrders, isLoading, refetch} = useQuery('allOrders', () => fetch('https://dry-wave-47967.herokuapp.com/allorders', {
        method: 'GET'
    }).then(res => res.json()))
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='all-order-container'>
            {
                allOrders.map(allorder => <ManageOrderTable
                key={allorder._id}
                allorder={allorder}
                refetch={refetch}
                ></ManageOrderTable>)
            }
        </div>
    );
};

export default ManageOrders;