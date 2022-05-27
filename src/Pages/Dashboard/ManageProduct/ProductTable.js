import React, { useState } from 'react';
import { RiDeleteBin4Fill } from 'react-icons/ri'
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ProductTable = ({ product, refetch }) => {
    const { img, name, minimumOrder, availableQuantity, price, _id } = product;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        fetch(`https://dry-wave-47967.herokuapp.com/bikeParts/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Deleted')
                setShow(false)
                refetch();
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
            <div className='d-flex align-items-center all-product-container'>
                <img className='product-image' src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p className='product-order'>Minimum Order: {minimumOrder} pieces</p>
                <p className='product-quantity'>Available Quantity: {availableQuantity} pieces</p>
                <p className='product-price'>Price: {price} tk/piece</p>
                <button className='delete-btn' onClick={handleShow}><RiDeleteBin4Fill></RiDeleteBin4Fill></button>
            </div>
        </>
    );
};

export default ProductTable;