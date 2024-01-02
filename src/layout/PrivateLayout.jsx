import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from '../components/index';

const PrivateLayout = () => {

  return (
    localStorage.token ?

      <>

        <Navbar />
        <div className='flex relative'>
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </>

      : <Navigate to="/login" replace />
  )
}

export default PrivateLayout
