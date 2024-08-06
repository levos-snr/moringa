import React from 'react';
import { FaHome, FaSun, FaMoon, FaSearch, FaBell, FaTasks, FaList } from 'react-icons/fa';

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Dropdown menu for small screens */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#tasks">Tasks</a></li>
            <li><a href="#todos">Todos</a></li>
          </ul>
        </div>

        {/* Regular menu for large screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a href="#home" className="btn btn-ghost"><FaHome className='h-6 w-6' /> Home</a>
          <a href="#tasks" className="btn btn-ghost"><FaTasks className='h-6 w-6' /> Tasks</a>
          <a href="#todos" className="btn btn-ghost"><FaList className='h-6 w-6' /> Todos</a>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">My Todo App</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FaSearch className="h-5 w-5" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell className="h-5 w-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <button onClick={handleThemeToggle} className="btn btn-ghost btn-circle">
          {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
