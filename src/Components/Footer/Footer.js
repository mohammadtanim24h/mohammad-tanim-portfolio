import React from "react";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="flex justify-center items-center h-[150px] p-8 md:p-0">
            <div>
                <p className="font-bold">
                    Copyright &copy; {year} Mohammad Tanim. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
