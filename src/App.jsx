import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { RootLayout, PrivateLayout, AdminLayout, LogOutLayout } from './layout/index'
import { Dashboard, NotFound, Profile, Login, Register, Projects, Users, About, Skill, Testimonial, Contact } from './pages/index'
import { jwtDecode } from "jwt-decode";
import { currentUser } from './redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = React.useState(0);

  const router = createBrowserRouter(createRoutesFromElements(

    //RootLayout
    <Route path='/' element={<RootLayout setProgress={setProgress} />}>
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

        <Route path='/projects' element={<Projects setProgress={setProgress} />} />
        <Route path="*" element={<NotFound setProgress={setProgress} />} />
        <Route path='/Profile' element={<Profile setProgress={setProgress} />} />
        <Route path='/about' element={<About setProgress={setProgress} />} />
        <Route path='/skills' element={<Skill setProgress={setProgress} />} />
        <Route path='/testimonial' element={<Testimonial setProgress={setProgress} />} />
        <Route path='/contact' element={<Contact setProgress={setProgress} />} />

        {/* Admin */}
        <Route path='/' element={<AdminLayout role={'admin'} />}>
          <Route path='/dashboard/' element={<Dashboard setProgress={setProgress} />} />
          <Route path='/users' element={<Users setProgress={setProgress} />} />
        </Route>
        {/* Admin  */}

      </Route>
      {/* PrivateRoutes  */}

    </Route>
    //  RootLayout
  ));


  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let intervalId;

    if (token) {
      intervalId = setInterval(() => {
        const { exp } = jwtDecode(token);
        if (exp < Date.now() / 1000) {
          alert("Your session has expired. Please log in again to continue using the app.");
          dispatch(currentUser({ user: null, token: null }));
        }
      }, 3000)
    } return () => clearInterval(intervalId)
  }, [token, dispatch]);



  return (
    <>
      <LoadingBar
        color='var(--pink)'
        shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)} />
      <RouterProvider
        router={router} />
    </>
  );
};

export default App;
