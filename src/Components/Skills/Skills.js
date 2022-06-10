import React from "react";
import html from "../../assets/images/Language-Logo/html-5.png";
import css from "../../assets/images/Language-Logo/css-3.png";
import js from "../../assets/images/Language-Logo/js.png";
import react from "../../assets/images/Language-Logo/physics.png";
import bootstrap from "../../assets/images/Language-Logo/bootstrap-icon-css.png";
import tailwind from "../../assets/images/Language-Logo/tailwindcss-icon.svg";
import mongodb from "../../assets/images/Language-Logo/mongodb.png";
import nodejs from "../../assets/images/Language-Logo/node.png";

const Skills = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mb-16">
            <h2 className="font-bold text-4xl text-slate-600 text-center mb-10">
                Skills
            </h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={html} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            HTML
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={css} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            CSS
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={js} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            JavaScript
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={react} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            React
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={bootstrap} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            Bootstrap
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 shadow-lg rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={tailwind} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            TailwindCSS
                        </div>
                    </div>
                    <div className="flex justify-between p-6 shadow-lg items-center rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={mongodb} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            MongoDB
                        </div>
                    </div>
                    <div className="flex justify-between p-6 shadow-lg items-center rounded w-full md:w-72 my-4 md:my-0">
                        <img className="w-16 mx-6" src={nodejs} alt="" />
                        <div className="font-bold text-slate-600 text-xl">
                            Node.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
