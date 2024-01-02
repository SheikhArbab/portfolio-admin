import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuContext } from './context/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuContext> 
      <App /> 
    </MenuContext>
  </React.StrictMode>,
)
