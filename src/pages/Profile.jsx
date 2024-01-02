import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Profile = ({ setProgress }) => {
  
  const user = JSON.parse(localStorage.user);

  const [loading, setLoading] = React.useState(false);
  const [updateError, setUpdateError] = React.useState(null);

  const fileRef = React.useRef(null);

  const setDocumentTitleAndProgress = () => {
    setProgress(20);
    setTimeout(() => {
      document.title = `Portfolio | Profile Page`;
      setProgress(100);
    }, 500);
  };

  React.useEffect(() => {
    setDocumentTitleAndProgress();
  }, []);

 
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      fullName: user.fullName || '',
      email: user.email || '',
      password: '',
      avatar: user.avatar || null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string(),
      email: Yup.string().email('Invalid email address'),
      password: Yup.string().min(4, 'Password must be at least 4 characters'),
      avatar: Yup.string(),
    }),
    onSubmit: async (formValues) => {
      try {
        setLoading(true);
        const { data } = await axios.put(`auth/update/${user._id}`, formValues);

        if (data && data.updatedUser) {
          localStorage.setItem('user', JSON.stringify(data.updatedUser));
          console.log('Profile updated successfully!');
        }
      } catch (error) {
        console.error('Update failed:', error);
        setUpdateError('Failed to update profile. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setFieldValue('avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className='w-screen h-fit py-6 flex items-center justify-center px-10'>
      <div className='w-full   rounded-lg shadow  border md:mt-0 md:max-w-[50%] xl:p-0  '>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <div className='w-full flex items-center justify-center flex-col'>
            <figure className='overflow-hidden md:w-64 rounded-full md:h-64 h-32 w-32  border-4 border-primaryPink' onClick={() => fileRef.current.click()}>
              <img   src={values.avatar || user.avatar} className='w-full h-full object-cover ' alt='avatar' />
            </figure>
            <h1 className='text-gray-50 capitalize font-bold md:text-6xl'>{user.fullName}</h1>
          </div>
          <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='fullName' className='block mb-2 text-sm font-medium text-white'>
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='Full Name'
                className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none '
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName ? (
                <span className='text-red-800 text-xs '>{errors.fullName}</span>
              ) : null}
            </div>

            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none '
                placeholder='name@company.com'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <span className='text-red-800 text-xs '>{errors.email}</span>
              ) : null}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none '
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <span className='text-red-800 text-xs '>{errors.password}</span>
              ) : null}
            </div>

            <div className='hidden'  >
              <label htmlFor='avatar' className='block mb-2 text-sm font-medium text-white'>
                Avatar
              </label>
              <input
                type='file'
                name='avatar'
                id='avatar'
                accept='image/*'
                onChange={handleFileChange}
                ref={fileRef}
                className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5 glass placeholder-gray-200 text-white outline-none'
              />
            </div>

            {updateError && <div className='text-red-800 text-xs'>{updateError}</div>}

            <button
              type='submit'
              className='w-full focus:border-primaryPink focus:border text-white bg-primary-600 hover:bg-primary-700 duration-300 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-primaryBg bg-secBg'
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
