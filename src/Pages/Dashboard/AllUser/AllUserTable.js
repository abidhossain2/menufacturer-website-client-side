import React from 'react';
import { toast} from 'react-toastify';

const AllUserTable = ({ singleUser, refetch }) => {
    const { email, role } = singleUser;
    const handleAdmin = () => {
        fetch(`http://localhost:5000/adminuser/${email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Successfully created admin')
                refetch();
            }
        })
    }
    return (
        <div className='user-table'>
            {role === 'admin' ? <p> <span className='fw-bold'>Admin:</span> {email}</p> : <p><span className='fw-bold'>User: </span>{email}</p>}
            <div className='user-table-btn'> {role !== 'admin' &&
                <>
                    <button className='makeadmin-btn' onClick={handleAdmin}>Make Admin</button>
                    <button className='deleteuser-btn'>Delete User</button>
                </>
            }</div>

        </div>
    );
};

export default AllUserTable;