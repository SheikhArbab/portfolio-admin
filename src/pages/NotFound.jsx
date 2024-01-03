import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = ({ setProgress }) => {

  React.useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      document.title = `Portfolio | 404 Page Not Found !`;
      setProgress(100)
    }, 500);
  }, [])

  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
  
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
      />
  
  
      <div className="container h-full mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
     
        <div className="w-full font-mono flex flex-col items-center relative z-10">
  

          <h1 className="font-bold md:text-5xl text-center text-white leading-tight mt-4">
          You are alone here 
          </h1>
        
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
           404  
          </p>
       <Link to={'/'}>
       <button className='bg-secBg hover:bg-primaryBg text-white active:scale-95 rounded-md px-4 py-2 duration-300 animate-pulse'>Go Back !</button>
       </Link>
        </div> 
      </div>
    </div>

  )
}

export default NotFound
