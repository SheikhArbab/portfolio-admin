import React from 'react'

const NotFound = ({ setProgress }) => {

  React.useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      document.title = `Portfolio | 404 Page Not Found !`;
      setProgress(100)
    }, 500);
  }, [])

  return (
    <div>
      not Found 404 !
    </div>
  )
}

export default NotFound
