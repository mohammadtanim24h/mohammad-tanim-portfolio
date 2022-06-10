import React from "react";
import profilePic from "../../assets/images/profile-transparent.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="max-w-7xl mx-auto md:mt-12 h-[90vh] p-12">
                <div className="flex flex-col h-3/4 md:flex-row justify-around items-center">
                    <div className="text-center md:text-left h-[85vh] md:h-auto flex justify-center items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl">
                                Hi! I am{" "}
                                <span className="font-bold text-primary">
                                    Tanim
                                </span>
                            </h2>
                            <h3 className="text-3xl md:text-4xl mt-3">
                                Front-End Web Developer
                            </h3>
                            <p className="md:w-3/4 text-lg font-semibold mt-6 ml-1">
                                A developer who loves to create robust, scalable
                                , and user-friendly websites. Expert in
                                Front-End Development. Fascinated about newer
                                technologies.{" "}
                            </p>
                            <a
                                href="https://drive.google.com/file/d/15u9YkGgdG83qdLcaC1sZL51yh2mCnmZe/view?usp=sharing"
                                className="btn rounded-none resume-btn mt-8 font-bold"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                        <img
                            className="rounded-full object-cover shadow-lg"
                            src={profilePic}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
