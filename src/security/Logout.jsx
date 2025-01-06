import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    const token = localStorage.removeItem('token');
    return <Navigate to={'/Login'}/>;
    
 
}

export default Logout
