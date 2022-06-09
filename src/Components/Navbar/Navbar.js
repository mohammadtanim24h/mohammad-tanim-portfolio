import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hover:bg-base-100">Mohammad Tanim</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li className="border-b-2 border-b-white hover:border-b-2 duration-400 rounded-none hover:border-b-green-500">
                        <a className="hover:bg-base-100">Home</a>
                    </li>
                    <li className="border-b-2 border-b-white hover:border-b-2 duration-400 rounded-none hover:border-b-green-500">
                        <a className="hover:bg-base-100">About</a>
                    </li>
                    <li className="border-b-2 border-b-white hover:border-b-2 duration-400 rounded-none hover:border-b-green-500">
                        <a className="hover:bg-base-100">Projects</a>
                    </li>
                    <li className="border-b-2 border-b-white hover:border-b-2 duration-400 rounded-none hover:border-b-green-500">
                        <a className="hover:bg-base-100">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;