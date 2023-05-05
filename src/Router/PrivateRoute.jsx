import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/Shared/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    };
    return children;
};

export default PrivateRoute;