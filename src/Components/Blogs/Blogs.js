import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={() => navigate("/")}
                className="btn btn-primary rounded-none rounded-br-sm text-white fixed top-0 left-0"
            >
                Back to home
            </button>
            <div className="h-screen">
                <div className="flex justify-center items-center h-3/4">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary">
                        Coming soon
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Blogs;
