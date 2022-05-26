import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader'
import AllUserTable from './AllUserTable';
import './AllUser.css'

const AllUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method:'GET',
        headers: {
            auth: localStorage.getItem('Secret-Key')
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            {
                users.map(singleUser => <AllUserTable
                key={singleUser._id}
                singleUser={singleUser}
                refetch={refetch}
                ></AllUserTable>)
            }
        </div>
    );
};

export default AllUser;