import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './MyOrderTable.css'

const MyOrderTable = ({ order, index }) => {
    const { userName, userEmail, phone, address, name, orderQuantity, totalPrice, _id } = order;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
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

    const handlePayment = () => {
        navigate(`orders/${_id}`)
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
            <tr>
                <td>{index + 1}</td>
                <td>{userName}</td>
                <td>{userEmail}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>{name}</td>
                <td>{orderQuantity} Pieces</td>
                <td>{totalPrice} Taka</td>
                <td><button className='paybtn' onClick={handlePayment}>Pay</button></td>
                <td>
                    <button className='cancelbtn' onClick={handleShow}>Cancel Order</button>
                </td>
            </tr>
        </>
    );
};

export default MyOrderTable;