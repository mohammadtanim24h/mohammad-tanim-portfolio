import React from "react";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <h2 className="text-slate-600 font-bold text-4xl text-center">
                    Get in touch
                </h2>
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-center gap-5">
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input border border-[#E6ECF8] input-md w-80 focus:border-[#E6ECF8] rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input border border-[#E6ECF8] input-md w-80 focus:border-[#E6ECF8] rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <textarea
                            cols="83"
                            rows="6"
                            className="textarea w-80 md:w-auto border-[#E6ECF8] focus:border-[#E6ECF8] rounded-md"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
