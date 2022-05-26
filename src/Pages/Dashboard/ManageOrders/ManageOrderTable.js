import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ManageOrderTable = ({ allorder, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, userName, userEmail, orderQuantity, phone, totalPrice, paid, _id } = allorder;
    const [ship, setShip] = useState('Pending...')
    const handleShip = () => {
        setShip('Successfully Shipped')
    }
    const handleDelete = () => {
        fetch(`http://localhost:5000/allorders/${_id}`, {
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
                {paid ? <button className='ship-btn' onClick={handleShip}>{ship}</button> : <>
                    <button className='unpaid-btn'>Unpaid</button>
                    <button className='cancel-order-btn' onClick={handleShow}>Cancel Order</button>
                </>}
            </div>
        </>
    );
};

export default ManageOrderTable;