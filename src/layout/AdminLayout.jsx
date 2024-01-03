import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const AdminLayout = ({role}) => {
    const currentUser = useSelector((state) => state.auth.user); 
    return  currentUser.role === role ?   <Outlet />  : <Navigate to={'/login'} />  }

export default AdminLayout
