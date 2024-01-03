import React from 'react' 
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogoutLayout = () => { 
    const currentUser = useSelector(state => state.auth.token)
    return currentUser ?  <Navigate to="/about" replace /> : <Outlet /> 
  
}

export default LogoutLayout
