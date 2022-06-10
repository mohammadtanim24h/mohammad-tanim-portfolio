import React from "react";
import html from "../../assets/images/Language-Logo/html-5.png";
import css from "../../assets/images/Language-Logo/css-3.png";
import js from "../../assets/images/Language-Logo/js.png";
import react from "../../assets/images/Language-Logo/physics.png";
import bootstrap from "../../assets/images/Language-Logo/bootstrap-icon-css.png";
import tailwind from "../../assets/images/Language-Logo/tailwindcss-icon.svg";
import mongodb from "../../assets/images/Language-Logo/mongodb.png";
import nodejs from "../../assets/images/Language-Logo/node.png";
import express from "../../assets/images/Language-Logo/express-js.png";
import github from "../../assets/images/Language-Logo/github.png";

const Skills = () => {
    return (
        <div className="h-[60vh]">
            <h2 className="font-bold text-5xl text-slate-600 text-center mb-10">
                My Skills
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={html} alt="" />
                    <div>HTML</div>
                </div>
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={css} alt="" />
                    <div>CSS</div>
                </div>
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={js} alt="" />
                    <div>JavaScript</div>
                </div>
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={react} alt="" />
                    <div>React</div>
                </div>
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={bootstrap} alt="" />
                    <div>Bootstrap</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                <div className="flex justify-between items-center p-6 shadow-lg rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={tailwind} alt="" />
                    <div>TailwindCSS</div>
                </div>
                <div className="flex justify-between p-6 shadow-lg items-center rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={mongodb} alt="" />
                    <div>MongoDB</div>
                </div>
                <div className="flex justify-between p-6 shadow-lg items-center rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={nodejs} alt="" />
                    <div>Node.js</div>
                </div>
                <div className="flex justify-between p-6 shadow-lg items-center rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={express} alt="" />
                    <div>Express.js</div>
                </div>
                <div className="flex justify-between p-6 shadow-lg items-center rounded w-80 my-4 md:my-0 mx-4">
                    <img className="w-16 mx-6" src={github} alt="" />
                    <div>GitHub</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
