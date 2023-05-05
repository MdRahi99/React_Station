import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DiReact } from "@react-icons/all-files/di/DiReact";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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

            {!user?.email ? (
              <div>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <Link
                  to="/dashboard"
                  className="text-md font-serif shadow-inner shadow-cyan-600 hover:bg-cyan-600 hover:text-white py-1 px-3"
                >
                  {user?.displayName}
                </Link>
                <button
                  className="text-md font-serif hover:bg-cyan-900 bg-cyan-600 text-white py-1 px-3"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </ul>
        </div>

        <NavLink
          to="/"
          className="text-xl flex gap-1 items-center font-extrabold font-serif uppercase"
        >
          React
          <DiReact className="text-cyan-700 text-5xl animate-pulse"></DiReact>
          Station
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-serif">
          <li>
            <Link
              className="hover:text-white hover:bg-cyan-600 py-1 px-3"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white hover:bg-cyan-600 py-1 px-3"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white hover:bg-cyan-600 py-1 px-3"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        {!user?.email ? (
          <ul className="menu menu-horizontal flex gap-2 items-center px-1 text-md font-bold font-serif">
            <li>
              <Link
                className="hover:bg-cyan-600 hover:text-white py-1 px-3 shadow shadow-cyan-600"
                to="/login"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-cyan-600 hover:text-white py-1 px-3 shadow shadow-cyan-600"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        ) : (
          <div className="flex gap-2 items-center">
            <Link
              to="/dashboard"
              className="flex gap-2 items-center text-md font-serif shadow-inner shadow-cyan-600 hover:bg-cyan-600 hover:text-white py-1 px-3"
            >
              <img className="h-6 rounded-full w-6" src={user?.photoURL} alt="" />
              <h4>{user?.displayName}</h4>
            </Link>
            <button
              className="text-md font-serif hover:bg-cyan-900 bg-cyan-600 text-white py-1 px-3"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
