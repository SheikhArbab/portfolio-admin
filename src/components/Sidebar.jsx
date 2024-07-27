import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaCode,
  FaInfoCircle,
  FaSignOutAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { MdWork, MdReviews } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useSignoutMutation } from "../redux/services/authApi";
import { currentUser } from "../redux/features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [signOut] = useSignoutMutation();
  const toggle = useSelector((state) => state.toggle.value);

  const handleLogOut = async () => {
    try {
      const { data } = await signOut();
      data.success && dispatch(currentUser({ user: null, token: null }));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={`
       group top-0 left-0 z-40 overflow-hidden w-full md:w-20 transition-all 
       md:hover:w-64 duration-300 glass absolute md:translate-x-0 h-full ${
         toggle && " -translate-x-full "
       }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={"/dashboard"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <FaChartPie className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Dashboard</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={"/about"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <FaInfoCircle className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">About</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={"/skills"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <FaCode className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Skills</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={"/users"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <FaUserSecret className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Users</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={"/projects"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <MdWork className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/testimonial"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <MdReviews className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Testimonial</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap"
              >
                <FaHandsHelping className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Contact</span>
              </NavLink>
            </li>
            <li onClick={handleLogOut}>
              <button className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-primaryBg group w-full h-10 overflow-md:hidden text-nowrap">
                <FaSignOutAlt className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                <span className="md:hidden group-hover:block">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
