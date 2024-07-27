import React from "react";
import { logo } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleButton } from "./../redux/features/toggleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.value);

  const currentUser = useSelector((state) => state.auth.user);

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center glass">
      <Link to={"/"} className="text-3xl font-bold leading-none">
        <img width={"50px"} src={logo} alt="arbab" />
      </Link>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <NavLink
            to={"/dashboard"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Dashboard
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={'/about'}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav">
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to={"/skills"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Skills
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to={"/users"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Users
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to={"/projects"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/testimonial"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="text-sm text-gray-400 hover:text-primaryPink duration-300 nav"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <span className="flex gap-2">
        <Link to={"/profile"}>
          <img
            className="  object-cover w-9 h-9  inline-block lg:ml-auto lg:mr-3 border border-primaryPink border-3 bg-gray-50  text-sm text-gray-900 font-bold  rounded-full transition duration-200"
            src={currentUser.avatar}
          />
        </Link>
        <label id="" className="hamburger md:hidden cursor-pointer">
          <input
            id=""
            onClick={() => dispatch(toggleButton())}
            type="checkbox"
            className="hidden"
            defaultChecked={!toggle}
          />
          <svg viewBox="0 0 32 32" className="h-8">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </span>
    </nav>
  );
};

export default Navbar;
