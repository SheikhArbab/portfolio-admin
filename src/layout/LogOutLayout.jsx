import React from 'react' 
import { Navigate, Outlet } from 'react-router-dom';

const LogoutLayout = () => { 

    return localStorage.token ?  <Navigate to="/dashboard" replace /> : <Outlet /> 
  
}

export default LogoutLayout
