import React from "react";

const Navbar = () => {
    return (
        <div className="header w-full sticky top-0 shadow bg-[#F0F8FF]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl hover:bg-[#F0F8FF]">
                        Mohammad Tanim
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        <li className="border-b-2 border-b-[#F0F8FF] hover:border-b-2 duration-400 rounded-none hover:border-b-primary">
                            <a className="hover:bg-[#F0F8FF]">Home</a>
                        </li>
                        <li className="border-b-2 border-b-[#F0F8FF] hover:border-b-2 duration-400 rounded-none hover:border-b-primary">
                            <a href="#about" className="hover:bg-[#F0F8FF]">About</a>
                        </li>
                        <li className="border-b-2 border-b-[#F0F8FF] hover:border-b-2 duration-400 rounded-none hover:border-b-primary">
                            <a href="#skills" className="hover:bg-[#F0F8FF]">Skills</a>
                        </li>
                        <li className="border-b-2 border-b-[#F0F8FF] hover:border-b-2 duration-400 rounded-none hover:border-b-primary">
                            <a href="#projects" className="hover:bg-[#F0F8FF]">Projects</a>
                        </li>
                        <li className="border-b-2 border-b-[#F0F8FF] hover:border-b-2 duration-400 rounded-none hover:border-b-primary">
                            <a className="hover:bg-[#F0F8FF]">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
