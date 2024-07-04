import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="p-10 bg-veryDarkBlue text-white">

            <div className="mb-10 mt-14">
                <img className="filter invert brightness-0 h-16 lg:h-10" src="logo.svg" alt="logo" />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-x-32">
                <div>
                    <div className="flex flex-row mb-5">
                        <img src="icon-phone.svg" alt="icon phone" />
                        <p className="ml-5 text-lg lg:text-sm">Phone: +1-543-123-4567</p>
                    </div>

                    <div className="flex flex-row">
                        <img src="icon-email.svg" alt="icon email" />
                        <p className="ml-5 text-lg lg:text-sm">example@fylo.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-start mt-16 text-2xl lg:text-sm lg:mt-0">
                    <h3 className="mb-5">About Us</h3>
                    <h3 className="mb-5">Jobs</h3>
                    <h3 className="mb-5">Press</h3>
                    <h3>Blog</h3>
                </div>

                <div className="flex flex-col items-start mt-16 text-2xl lg:text-sm lg:mt-0">
                    <h3 className="mb-5">Contact Us</h3>
                    <h3 className="mb-5">Terms</h3>
                    <h3 className="mb-5">Privacy</h3>
                </div>

                <div className="flex flex-row justify-center gap-4 mt-32 lg:mt-0">
                    <a href="https://facebook.com" className="flex text-white justify-center items-center rounded-full border
                     border-white h-12 w-12 lg:h-10 lg:w-10">
                        <FaFacebookF className="h-6" />
                    </a>

                    <a href="https://instagram.com" className="flex text-white justify-center items-center rounded-full border
                     border-white h-12 w-12 lg:h-10 lg:w-10">
                        <FaInstagram className="h-6" />
                    </a>

                    <a href="https://twitter.com" className="flex text-white justify-center items-center rounded-full border
                     border-white h-12 w-12 lg:h-10 lg:w-10">
                        <FaTwitter className="h-6" />
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Footer;
