import React from 'react'

const Projects = ({setProgress}) => {

    const setDocumentTitleAndProgress = () => {
        setProgress(20);
        setTimeout(() => {
          document.title = `Portfolio | Project Page`;
          setProgress(100);
        }, 500);
      };
    
      React.useEffect(() => {
        setDocumentTitleAndProgress();
      }, []);
    

  return (
    <div className='h-screen w-screen flex items-center justify-center text-3xl font-bold text-white'>
      Projects
    </div>
  )
}

export default Projects
