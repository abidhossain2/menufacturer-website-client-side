import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './MyOrderTable.css'

const MyOrderTable = ({ order }) => {
    const { userName, userEmail, phone, address, name, orderQuantity, totalPrice, _id, paid,paymentId } = order;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        fetch(`https://blooming-falls-70895.herokuapp.com/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
                toast.success('Successfully Deleted')
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
            <div className='order-card'>
                <p>Name: {userName}</p>
                <p>Email: {userEmail}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <p>Product Name: {name}</p>
                <p>Quantity: {orderQuantity} Pieces</p>
                <p>Total Price: {totalPrice} Taka</p>
                <button className='border-0 bg-transparent'>{
                    !paid ? <Link className='paybtn' to={`payment/${_id}`}>Pay</Link> : <button className='paid-btn'>Paid</button>
                }</button>
                <button className='border-0 bg-transparent'>
                    {!paid ? <button className='cancelbtn' onClick={handleShow}>Cancel Order</button> : <p className='paymentid-txt'>TransactionID: <span className='fw-bold'>{paymentId.paymentId}</span></p>}
                </button>
            </div>
        </>
    );
};

export default MyOrderTable;