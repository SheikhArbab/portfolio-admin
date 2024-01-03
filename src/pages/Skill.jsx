import React from 'react'

const Skill = ({setProgress}) => {

    React.useEffect(() => {
        setProgress(20)
        setTimeout(() => {
          document.title = `Portfolio | Skill Page`;
          setProgress(100)
        }, 500);
      }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center text-white font-bold text-6xl'>
      skill
    </div>
  )
}

export default Skill
