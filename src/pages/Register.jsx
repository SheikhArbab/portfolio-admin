import React from 'react' 
import * as Yup from 'yup'; 
import { useFormik } from "formik";
import { Link } from 'react-router-dom'

const Register = ({ setProgress }) => {



  React.useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      document.title = `Portfolio | Register Page`;
      setProgress(100)
    }, 500);
  }, [])



  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (formValues) => {
 
    },
  });


  return (
    <section className='w-screen h-screen overflow-x-hidden'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full   rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0  glass">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl  text-white">
              Create Your Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName} />

                {errors.fullName && touched.fullName ? <span className="text-red-800 text-xs ">{errors.fullName}</span> : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none "
                  placeholder="name@company.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />
                {errors.email && touched.email ? <span className="text-red-800 text-xs ">{errors.email}</span> : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primaryPink block w-full p-2.5  glass placeholder-gray-200  text-white   outline-none "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {errors.password && touched.password ? <span className="text-red-800 text-xs ">{errors.password}</span> : null}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <button
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"

                    >
                      Terms and Conditions
                    </button>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full focus:border-primaryPink focus:border text-white bg-primary-600 hover:bg-primary-700 duration-300 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-primaryBg bg-secBg"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={'/login'}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Register
