import React from "react";
import about from "../../assets/images/about.png";

const About = () => {
    return (
        <div id="about" className="max-w-7xl min-h-min md:h-[60vh] mx-auto mb-16">
            <div>
                <h2 className="text-slate-600 font-bold text-4xl text-center mb-8">
                    About me
                </h2>
                <div
                    style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                    className="flex flex-col-reverse md:flex-row justify-between mt-4 py-4 px-6 rounded-xl"
                >
                    <div className="flex-1 flex justify-center items-center">
                        <p className="text-base font-semibold">
                            I am Tanim, a 19-year-old young guy from Bangladesh.
                            Currently, I am studying B.B.A (Accounting) here. I
                            started learning web development when everyone was
                            confined in their home during the outbreak of Covid
                            19. But, I could not go far all by myself. At the
                            end of 2021, I started learning Front-End
                            development in a professional course. I learned my
                            above-mentioned skills there, and I am still
                            learning. I am really into web development now. I
                            love building beautiful websites. Also, I am very
                            enthusiastic about the latest technologies and what
                            they have to offer. I love trying out new things in
                            my projects to make my projects better.{" "}
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img className="w-80 md:w-3/5" src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
