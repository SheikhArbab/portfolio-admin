import React from 'react'

const Dashboard = ({setProgress}) => {

  React.useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      document.title = `Portfolio | Dashboard`;
      setProgress(100)
    }, 500);
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center text-white font-bold text-6xl'>
     dashboard
    </div>
  )
}

export default Dashboard
