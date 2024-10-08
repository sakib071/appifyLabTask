import React from 'react';

const Testimonials = () => {
    return (
        <div className="bg-white py-20 px-10 text-black">
            <div className="text-center inter-500 mb-12">
                <h2 className="text-5xl w-[500px] mx-auto font-bold">What Customers are Saying About us</h2>
                <p className="text-gray-600 mt-4">
                    Our commitment to quality, sustainability, and customer satisfaction remains unwavering.
                </p>
            </div>

            <div className="relative flex items-center justify-center">
                <div className="absolute left-0">
                    <button className="rounded-full border border-gray-300 p-2 text-indigo-600 hover:bg-indigo-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex gap-8 overflow-hidden p-10">
                    <div className="w-80 p-6 bg-white border rounded-xl">
                        <div className="flex flex-col items-left gap-4 mb-4">
                            <img
                                src="https://i.pravatar.cc/100?img=1"
                                alt="Joe Root"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Joe Root</h3>
                                <p className="text-sm text-gray-500">Marketing Specialist</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.885 5.833h6.146c.969 0 1.371 1.24.588 1.81l-4.97 3.602 1.885 5.833c.3.921-.755 1.688-1.541 1.11L10 16.348l-4.97 3.602c-.787.577-1.842-.189-1.541-1.11l1.885-5.833L1.404 10.57c-.783-.57-.381-1.81.588-1.81h6.146L9.049 2.927z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm">“The ease of use, quality of coffee, and the outstanding customer support make Corfeel choice for all things coffee.”</p>
                    </div>

                    <div className="w-80 p-6 bg-white border rounded-xl shadow-xl shadow-gray-200">
                        <div className="flex flex-col items-left gap-4 mb-4">
                            <img
                                src="https://i.pravatar.cc/100?img=2"
                                alt="David Malan"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">David Malan</h3>
                                <p className="text-sm text-gray-500">Sales Manager</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.885 5.833h6.146c.969 0 1.371 1.24.588 1.81l-4.97 3.602 1.885 5.833c.3.921-.755 1.688-1.541 1.11L10 16.348l-4.97 3.602c-.787.577-1.842-.189-1.541-1.11l1.885-5.833L1.404 10.57c-.783-.57-.381-1.81.588-1.81h6.146L9.049 2.927z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600">“The Corfeel team has exceeded our providing top-notch service and delicious coffee, making them part of our daily routine.”</p>
                    </div>

                    <div className="w-80 p-6 bg-white border rounded-xl">
                        <div className="flex flex-col items-left gap-4 mb-4">
                            <img
                                src="https://i.pravatar.cc/100?img=3"
                                alt="Harry Book"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Harry Book</h3>
                                <p className="text-sm text-gray-500">Investment Planner</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.885 5.833h6.146c.969 0 1.371 1.24.588 1.81l-4.97 3.602 1.885 5.833c.3.921-.755 1.688-1.541 1.11L10 16.348l-4.97 3.602c-.787.577-1.842-.189-1.541-1.11l1.885-5.833L1.404 10.57c-.783-.57-.381-1.81.588-1.81h6.146L9.049 2.927z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600">“The positive feedback we've on the quality of coffee variety of options available is a testament to Corfeel's excellence.”</p>
                    </div>
                </div>

                <div className="absolute right-0">
                    <button className="rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <div className="h-3 w-3 bg-indigo-600 rounded-full mx-1"></div>
                <div className="h-3 w-3 bg-gray-300 rounded-full mx-1"></div>
                <div className="h-3 w-3 bg-gray-300 rounded-full mx-1"></div>
            </div>
        </div>
    );
};

export default Testimonials;
