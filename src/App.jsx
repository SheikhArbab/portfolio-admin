import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'; 
import {RootLayout,PrivateLayout,LogOutLayout} from './layout/index'
import {Dashboard,NotFound,Profile,Login,Register} from './pages/index'
import { jwtDecode } from "jwt-decode"; 

const App = () => {
  
  axios.defaults.baseURL = 'http://localhost:4000/'
  axios.defaults.withCredentials = true

  const [progress, setProgress] = React.useState(0);

 
   

  const router = createBrowserRouter(createRoutesFromElements(

    //RootLayout
    <Route path='/' element={<RootLayout />}>
      <Route path="*" element={<NotFound setProgress={setProgress} />} />


      {/* LogoutRoutes */}
      <Route path='/' element={<LogOutLayout />}>
        <Route index element={<Register setProgress={setProgress} />} />
        <Route path="*" element={<NotFound setProgress={setProgress} />} />
        <Route path="/login" element={<Login setProgress={setProgress} />} />
      </Route>
      {/* LogoutRoutes */}


      {/* PrivateRoutes  */}
      <Route path='/' element={<PrivateLayout />}>

        <Route path='/dashboard/' element={<Dashboard setProgress={setProgress} />} />


        {/* Authorized */}
        {/* <Route path='/dashboard/' element={<Authorized role={'admin'} />}>  
        </Route> */}
        {/* Authorized  */}


        <Route path="*" element={<NotFound setProgress={setProgress} />} />
        <Route path='/Profile' element={<Profile setProgress={setProgress} />} /> 

      </Route>
      {/* PrivateRoutes  */}

    </Route>
    //  RootLayout
  )); 
 

  React.useEffect(() => {

    let intervalId;

    if (localStorage.token) {
      intervalId = setInterval(() => {
        const { exp } = jwtDecode(localStorage.token);
        if (exp < Date.now() / 1000) {
          alert("Your session has expired. Please log in again to continue using the app.");
          localStorage.setItem('user', null);
          localStorage.setItem('token', null); 
        }
      }, 3000) }  return () => clearInterval(intervalId) }, [localStorage.token]);

 

  return (
    <>
       <LoadingBar color='#b721d1' shadow={true}  progress={progress} onLoaderFinished={() => setProgress(0)} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
