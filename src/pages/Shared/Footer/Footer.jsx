import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1B0C4D] text-white py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
                {/* Logo and Contact */}
                <div className="flex flex-col mb-6 md:mb-0">
                    <div className="flex items-center">
                        <div className="text-purple-500 text-4xl font-bold mr-2">
                            <img src="CodeSandbox.png" alt="" />
                        </div>
                        <h1 className="text-3xl font-bold">CodeLearn</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-white">CONTACT</p>
                        <p className="text-[#FDDC02]">hollocode@gmail.com</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-between">
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-white hover:text-[#c9c23d]">Teachers</a>
                        <a href="#" className="text-white hover:text-[#c9c23d]">Courses</a>
                        <a href="#" className="text-white hover:text-[#c9c23d]">Scholarship</a>
                        <a href="#" className="text-white hover:text-[#c9c23d]">Pricing</a>
                    </div>
                    <p className="text-center text-sm text-gray-400">Copyright © codelearn 2021. All rights reserved.</p>
                </div>

                {/* Newsletter Subscription */}
                <div className="flex flex-col justify-center mt-8 md:mt-0">
                    <h2 className="text-lg font-semibold">Stay up to date</h2>
                    <p className="text-gray-400 text-sm w-[220px] mb-4">Stay Informed On How You Can Make a Difference</p>
                    <div className="">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 mb-2 rounded-full bg-[#2E2E2E] text-white border border-gray-600"
                        />

                    </div>
                    <button className="bg-[#FDDC02] text-black px-4 py-2 w-fit rounded-full">
                        Submit
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
