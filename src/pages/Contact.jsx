import React from 'react'

const Contact = ({setProgress}) => {

    React.useEffect(() => {
        setProgress(20)
        setTimeout(() => {
          document.title = `Portfolio | Contact Page`;
          setProgress(100)
        }, 500);
      }, [])

   
  return (
    <div className='w-screen h-screen flex items-center justify-center text-white font-bold text-6xl'>
      Contact
    </div>
  )
}
export default Contact
