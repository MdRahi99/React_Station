import React from "react";
import { Link, NavLink } from "react-router-dom";
import { DiReact } from "@react-icons/all-files/di/DiReact";

const Header = () => {
  return (
    <div className="navbar shadow shadow-cyan-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>

        <NavLink
          to="/"
          className="text-xl flex gap-1 items-center font-extrabold font-serif uppercase"
        >
          React<DiReact className="text-cyan-700 text-5xl animate-pulse"></DiReact>Station
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-serif">
          <li>
            <Link className="hover:text-white hover:bg-cyan-600 py-1 px-3" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-white hover:bg-cyan-600 py-1 px-3" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-white hover:bg-cyan-600 py-1 px-3" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-extrabold font-serif">
          <li>
            <Link className="hover:bg-cyan-600 hover:text-white py-1 px-3" to="/login">Log In</Link>
          </li>
          <li>
            <Link className="hover:bg-cyan-600 hover:text-white py-1 px-3" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
