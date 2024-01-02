import React from 'react'
import { NavLink} from 'react-router-dom';
import { FaChartPie, FaCode,FaInfoCircle,FaSignOutAlt,FaHandsHelping  } from "react-icons/fa"; 
import { FaUserSecret } from "react-icons/fa6";
import { MdWork,MdReviews  } from "react-icons/md";

const Sidebar = () => {
  return (
 
      <aside
        id="default-sidebar"
        className="top-0 left-0 z-40 w-64 glass absolute   transition-transform -translate-x-full lg:translate-x-0 h-full"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
               to={"/dashboard"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                <FaChartPie
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/about"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                <FaInfoCircle
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/skills"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                <FaCode
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/users"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                <FaUserSecret
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/projects"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                < MdWork
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/testimonial"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                < MdReviews 
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Testimonial</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               to={"/testimonial"}
                className="flex items-center p-2   rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                < FaHandsHelping 
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Contact</span>
              </NavLink>
            </li>
            <li>
              <button 
                className="flex items-center p-2 w-full  rounded-lg text-white dark:hover:bg-primaryBg group"
              >
                < FaSignOutAlt 
                  className="w-5 h-5 text-gray-300   transition duration-75 group-hover:text-white"
                /> 
                <span className="ms-3">Log Out</span>
              </button>
            </li>
          
          </ul>
        </div>
      </aside> 

  )
}

export default Sidebar
