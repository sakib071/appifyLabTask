import React from 'react';

const PopularCourses = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Popular Courses</h2>
                    <a href="#" className="text-blue-600 hover:underline">View All</a>
                </div>

                {/* Courses List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Course Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="course-image1.jpg" // Replace with your image
                            alt="Course 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="text-sm text-blue-500 font-semibold">Design</span>
                            <h3 className="text-lg font-semibold mt-2">The 6 Steps to Building a powerful Personal brand</h3>
                            <div className="flex items-center mt-4 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 18a8 8 0 1116 0H2z" />
                                    </svg>
                                </span>
                                2 Lessons
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 3a7 7 0 00-7 7v4a3 3 0 001 2.236V17a1 1 0 001 1h12a1 1 0 001-1v-1.764A3 3 0 0017 14v-4a7 7 0 00-7-7zM8 17v-3h4v3H8z" />
                                    </svg>
                                </span>
                                30 Students enrolled
                            </div>
                            <button className="mt-4 px-4 py-2 w-full text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                View Course
                            </button>
                        </div>
                    </div>

                    {/* Course Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="course-image2.jpg" // Replace with your image
                            alt="Course 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="text-sm text-blue-500 font-semibold">Design</span>
                            <h3 className="text-lg font-semibold mt-2">The 6 Steps to Building a powerful Personal brand</h3>
                            <div className="flex items-center mt-4 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 18a8 8 0 1116 0H2z" />
                                    </svg>
                                </span>
                                2 Lessons
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 3a7 7 0 00-7 7v4a3 3 0 001 2.236V17a1 1 0 001 1h12a1 1 0 001-1v-1.764A3 3 0 0017 14v-4a7 7 0 00-7-7zM8 17v-3h4v3H8z" />
                                    </svg>
                                </span>
                                30 Students enrolled
                            </div>
                            <button className="mt-4 px-4 py-2 w-full text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                View Course
                            </button>
                        </div>
                    </div>

                    {/* Course Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="course-image3.jpg" // Replace with your image
                            alt="Course 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="text-sm text-blue-500 font-semibold">Design</span>
                            <h3 className="text-lg font-semibold mt-2">The 6 Steps to Building a powerful Personal brand</h3>
                            <div className="flex items-center mt-4 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 18a8 8 0 1116 0H2z" />
                                    </svg>
                                </span>
                                2 Lessons
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 3a7 7 0 00-7 7v4a3 3 0 001 2.236V17a1 1 0 001 1h12a1 1 0 001-1v-1.764A3 3 0 0017 14v-4a7 7 0 00-7-7zM8 17v-3h4v3H8z" />
                                    </svg>
                                </span>
                                30 Students enrolled
                            </div>
                            <button className="mt-4 px-4 py-2 w-full text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                View Course
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2 text-sm text-gray-500">
                    <button className="px-3 py-1 bg-gray-200 rounded-full">1</button>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full">14</span>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">15</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">16</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">17</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">18</button>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
