import React from 'react';

const SectiionThree = () => {
    return (
        <div className="relative bg-[#2B0D57] text-white px-10 py-20 overflow-hidden">
            <div className="absolute inset-0 flex -top-28 justify-center items-center z-0">
                <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-b blur-3xl from-[#4b2e9b] to-[#9506FF] opacity-25"></div>
            </div>

            <div className='relative z-10 max-w-5xl flex flex-col justify-center items-center mx-auto text-center space-y-4'>
                <p className='text-5xl font-bold inter-600 '>Our Top Categories</p>
                <p className='text-base w-[500px] text-center'>
                    Take high quality online courses from the best online instructors
                    around the world & develop your skills.
                </p>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex gap-10 justify-center mt-20 px-10 text-white">
                <div className="text-center flex flex-col gap-2 items-center justify-center bg-[#FF8FDF] w-[200px] h-[186px] rounded-2xl">
                    <figure className="w-[70px] h-[70px] bg-[#ffffff6e] rounded-full flex justify-center items-center">
                        <img className="" src="/vector-design 1.png" alt="" />
                    </figure>
                    <div className="space-y-3">
                        <p className="text-xl inter-600 font-bold">React Coding</p>
                        <p className="text-sm inter-300 underline">View More</p>
                    </div>
                </div>

                <div className="text-center flex flex-col gap-2 items-center justify-center bg-[#FF8787] w-[200px] h-[186px] rounded-2xl">
                    <figure className="w-[70px] h-[70px] bg-[#ffffff6e] rounded-full flex justify-center items-center">
                        <img className="" src="/web-development 1.png" alt="" />
                    </figure>
                    <div className="space-y-3">
                        <p className="text-xl inter-600 font-bold">Laravel Coding</p>
                        <p className="text-sm inter-300 underline">View More</p>
                    </div>
                </div>

                <div className="text-center flex flex-col gap-2 items-center justify-center bg-[#49E1BB] w-[200px] h-[186px] rounded-2xl">
                    <figure className="w-[70px] h-[70px] bg-[#ffffff6e] rounded-full flex justify-center items-center">
                        <img className="" src="/money-growth 1.png" alt="" />
                    </figure>
                    <div className="space-y-3">
                        <p className="text-xl inter-600 font-bold">Vue Coding</p>
                        <p className="text-sm inter-300 underline">View More</p>
                    </div>
                </div>

                <div className="text-center flex flex-col gap-2 items-center justify-center bg-[#FF5BB4] w-[200px] h-[186px] rounded-2xl">
                    <figure className="w-[70px] h-[70px] bg-[#ffffff6e] rounded-full flex justify-center items-center">
                        <img className="" src="/paint-palette 1.png" alt="" />
                    </figure>
                    <div className="space-y-3">
                        <p className="text-xl inter-600 font-bold">Angular</p>
                        <p className="text-sm inter-300 underline">View More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectiionThree;
