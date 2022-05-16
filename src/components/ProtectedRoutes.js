import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ( { isLoggedIn, children } ) => {
    if (isLoggedIn===false) {
        return <Navigate to='/signInUser'/>
    }
    return children;
    
};


export default ProtectedRoutes;


