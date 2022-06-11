import React from "react";
import facebook from '../../assets/images/Social/icons8-facebook-48.png';
import linkedin from '../../assets/images/Social/icons8-linkedin-48.png';
import github from '../../assets/images/Social/icons8-github-48.png';
import email from '../../assets/images/Social/icons8-email-open-48.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="flex justify-center items-center h-[200px] p-8 md:p-0">
            <div>
                <div className="mb-5 flex justify-center">
                    <a href="https://www.facebook.com/mohammad.tanim.1212" rel="noreferrer" target="_blank">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-tanim-62834b240/" rel="noreferrer" target="_blank">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/mohammadtanim24h" rel="noreferrer" target="_blank">
                        <img src={github} alt="" />
                    </a>
                    <a href="mailto:mohammad.tanim24h@gmail.com" rel="noreferrer" target="_blank">
                        <img src={email} alt="" />
                    </a>
                </div>
                <p className="font-bold">
                    Copyright &copy; {year} Mohammad Tanim. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
