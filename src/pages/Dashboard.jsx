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
    <div>
     dashboard
    </div>
  )
}

export default Dashboard
