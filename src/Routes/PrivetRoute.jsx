import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({childern}) => {
    const {user,loading}= useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(!user){
      return  <Navigate to='/login' state={{from:location}} replace/>
    }
    return childern;
};

export default PrivetRoute;