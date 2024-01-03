import React from 'react'

const About = ({setProgress}) => {

    React.useEffect(() => {
        setProgress(20)
        setTimeout(() => {
          document.title = `Portfolio | About Page`;
          setProgress(100)
        }, 500);
      }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center text-white text-6xl font-bold'>
      about
    </div>
  )
}

export default About
