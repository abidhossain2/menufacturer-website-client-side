import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../../Loader/Loader';


const ProtectedAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children
};

export default ProtectedAuth;