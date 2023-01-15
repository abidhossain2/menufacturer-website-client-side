import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';

const ManageOrderTable = ({ allorder, refetch }) => {
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, userName, userEmail, orderQuantity, phone, totalPrice, paid, _id, shipped } = allorder;

    const handleDelete = () => {
        fetch(`https://products-my73.onrender.com/allorders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Deleted')
                refetch();
                setShow(false)
            })
    }
    if(load){
        setLoad(true)
        return <Loader></Loader>
    }
    const handleShip = () => {
        fetch(`https://products-my73.onrender.com/allorders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Successfully Shipped')
                refetch();
            }
        })
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div className='modal-txt'>Are you sure to delete?</div>
                <div className='modal-body'>
                    <button className='modal-btn-success' onClick={() => handleDelete(_id)}>
                        Yes
                    </button>
                    <button className='modal-btn-false' onClick={handleClose}>
                        No
                    </button>
                </div>
            </Modal>
            <div className='all-order'>
                <p className='product-name'>Name: {userName}</p>
                <p className='product-name'>Email:{userEmail}</p>
                <p className='product-name'>Phone: {phone}</p>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-order'>Order Quantity: {orderQuantity} pieces</p>
                <p className='product-price'>Price: {totalPrice} tk</p>
                {(paid && !shipped) && <button className='ship-btn' onClick={handleShip}>Pending.....</button> }
                {(shipped && paid ) && <button className='ship-btn'>Successfully Shipped</button>}
               {(!paid) && <button className='unpaid-btn'>Unpaid</button>}
                    {(!paid) && <button className='cancel-order-btn' onClick={handleShow}>Cancel Order</button>}
            </div>
        </>
    );
};

export default ManageOrderTable;