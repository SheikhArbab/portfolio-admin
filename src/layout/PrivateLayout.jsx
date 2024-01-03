import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from '../components/index';
import { useSelector } from 'react-redux';

const PrivateLayout = () => {
  const currentUser = useSelector((state) => state.auth.token);
  return (
    currentUser ?
    <>
      <Navbar />
      <div className='flex relative'>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </> : <Navigate to={'/login'} />
  )
}

export default PrivateLayout
