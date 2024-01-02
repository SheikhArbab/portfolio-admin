import React from 'react'

export const menuToggle = React.createContext(null)

const MenuContext = ({children}) => {

const [toggle,setToggle ] = React.useState(false)

  return (
    <menuToggle.Provider value={{toggle,setToggle}}>
      {children}
    </menuToggle.Provider>
  )
}

export default MenuContext
