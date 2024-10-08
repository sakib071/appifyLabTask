import { IoPlayCircle } from "react-icons/io5";

const SectionTwo = () => {
    return (

        <div className="w-full mx-auto lg:px-52 py-20 space-y-10 bg-[#FAF6FF]">
            <div className="max-w-7xl w-full mx-auto py-20 bg-[#FAF6FF]">

                <div className="mb-20">
                    <p className="text-2xl inter-400 text-[#4B28B5] mb-4">Let's Learn together to</p>
                    <p className="text-5xl inter-600 font-bold text-black">Grow Your Skills</p>
                </div>

                <div className="flex gap-10 justify-between max-w-5xl mx-auto item-center mb-20">
                    <figure className="rounded-2xl overflow-clip">
                        <img className="w-[535px] h-[350px] object-cover" src="Rectangle 7.png" alt="" />
                    </figure>

                    <div className="px-5 lg:px-0 relative text-black">
                        <div className="grid grid-cols-1 gap-10">
                            <ol className="relative border-s border-[#4B44BB] ml-3  w-full">
                                <li className="mb-10 ms-6 ">
                                    <span className="absolute flex items-center justify-center w-8 h-8 p-5 bg-white text-2xl rounded-full -start-5">
                                        <p className="bg-[#4B44BB] text-white rounded-full w-8 h-8 text-base text-center absolute z-10 flex justify-center items-center">1</p>
                                    </span>
                                    <div className="items-center justify-between px-10 w-full">
                                        <div className="text-sm ">
                                            <p className=" text-xl font-bold mb-2">Describe Your Learning Skills</p>
                                            <p className="text-lg w-[350px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 p-5 bg-white text-2xl rounded-full -start-5">
                                        <p className="border border-[#4B44BB] text-[#4B44BB] font-bold rounded-full w-8 h-8 text-base text-center flex justify-center items-center absolute z-10">2</p>
                                    </span>
                                    <div className="items-center justify-between px-10 w-full">
                                        <div className="text-sm ">
                                            <p className=" text-xl font-semibold mb-2">Select course</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="ms-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 p-5 bg-white text-2xl rounded-full -start-5">
                                        <p className="border border-[#4B44BB] text-[#4B44BB] font-bold rounded-full w-8 h-8 text-base text-center flex justify-center items-center absolute z-10">3</p>
                                    </span>
                                    <div className="items-center justify-between px-10 w-full">
                                        <div className="text-sm ">
                                            <p className=" text-xl font-semibold mb-2">Keep track of your experts</p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <p className="font-semibold transition-all ease-in-out text-[#1B0C4D] border border-[#4B44BB] px-10 py-2 w-fit rounded-md">Get Started</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse gap-5 justify-between max-w-5xl mx-auto item-center mb-20">
                    <figure className="rounded-2xl overflow-clip">
                        <img className="w-[620px] h-[400px] object-cover" src="Rectangle 4423.png" alt="" />
                    </figure>

                    <div className="px-5 lg:px-0 relative text-black">
                        <div className="mb-10 w-[500px] space-y-3">
                            <p className="text-5xl inter-600 font-bold text-black">Welcome to Code Learning Centre</p>
                            <p className="text-base w-[420px] inter-200 font-bold text-black">Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            <ol className="relative border-s border-[#4B44BB] ml-3 w-full">
                                <li className="mb-10 ms-6 ">
                                    <span className="absolute flex items-center justify-center w-8 h-8 p-5 bg-[#FAF6FF] rounded-full -start-5">

                                        <p className="bg-[#4B44BB] text-white rounded-full w-8 h-8 text-center absolute z-10 flex justify-center items-center"><img className="w-[15px]" src="Vector.png" alt="" /></p>
                                    </span>

                                    <div className="items-center justify-between px-10 w-full">
                                        <div className="text-sm ">
                                            <p className=" text-xl font-bold mb-2">Safe & Secured</p>
                                            <p className="text-lg w-[350px]">Safe and Secured our services and every step of process.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="ms-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 p-5 bg-[#FAF6FF] text-2xl rounded-full -start-5">
                                        <p className="bg-[#4B44BB] text-white rounded-full w-8 h-8 text-center absolute z-10 flex justify-center items-center"><img className="w-[15px]" src="Subtract.png" alt="" /></p>
                                    </span>
                                    <div className="items-center justify-between px-10 w-full">
                                        <div className="text-sm ">
                                            <p className=" text-xl font-semibold mb-2">Highly Expert Instructors</p>
                                            {/* <p className="text-lg w-[350px]">Safe and Secured our services and every step of process.</p> */}
                                        </div>
                                    </div>
                                </li>

                            </ol>
                            <p className="mx-[78px] -mt-10 text-lg w-[350px]">Safe and Secured our services and every step of process.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default SectionTwo;