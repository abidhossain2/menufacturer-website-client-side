import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AllUserTable = ({ singleUser, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { email, role, _id } = singleUser;
    const handleAdmin = () => {
        fetch(`http://localhost:5000/adminuser/${email}`, {
            method: 'PUT',
            headers: {
                auth: localStorage.getItem('Secret-Key')
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully created admin')
                    refetch();
                }
            })
    }
    const handleDelete = () => {
        fetch(`http://localhost:5000/adminuser/${_id}`, {
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
            <div className='user-table'>
                {role === 'admin' ? <p> <span className='fw-bold'>Admin:</span> {email}</p> : <p><span className='fw-bold'>User: </span>{email}</p>}
                <div className='user-table-btn'> {role !== 'admin' &&
                    <>
                        <button className='makeadmin-btn' onClick={handleAdmin}>Make Admin</button>
                        <button className='deleteuser-btn' onClick={handleShow}>Delete User</button>
                    </>
                }</div>

            </div>
        </>
    );
};

export default AllUserTable;