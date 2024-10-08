import { FaCircleCheck } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const BannerBG = () => {


    return (

        <section id="bannerBG" className="relative bg-gradient-to-r from-[#181030] from-60% via-[#241846] via-70% to-[#7607cc] to-100% inter-500 text-white" >
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="w-full mx-auto space-y-10">
                    <div className='flex items-center gap-2 text-white hover:bg-[#2b1d5c] bg-[#37266F] w-fit px-6 py-2 rounded-md'>
                        <FaCircleCheck className='text-green-500' />
                        <span className="">Verified by Coursera</span>
                    </div>
                    <h3 className="text-7xl leading-snug font-semibold">Learn Code <br /> From top <span className='border-b-4 border-[#EAE34A] text-[#EAE34A] pb-1'>Coder</span></h3>
                    <p className='text-xl w-[574px] inter-200'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>

                    <div className='flex items-center gap-3'>
                        <div className="font-semibold transition-all ease-in-out text-[#1B0C4D] hover:bg-[#c9c23d] bg-[#EAE34A] px-6 py-3 rounded-md">Get Started</div>

                        <div className='flex items-center gap-3 hover:bg-[#2b1d5c] bg-[#37266F] px-5 py-3 rounded-md'>
                            <IoPlayCircle className='text-2xl' />
                            <div className="font-semibold transition-all ease-in-out text-white ">How it works</div>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                            <span className='flex gap-2 items-center'>
                                <FaStar className='text-[#F7B933]' />
                                <FaStar className='text-[#F7B933]' />
                                <FaStar className='text-[#F7B933]' />
                                <FaStar className='text-[#F7B933]' />
                                <FaStar className='text-[#F7B933]' />
                            </span>
                            <span className="">Based on 10,000+ reviews on</span>
                        </div>
                        <img src="/Company logo.png" alt="" />
                    </div>

                </div>

                <div className='flex gap-5'>
                    <div className='relative overflow-clip h-[459px] w-[160px] rounded-full bg-gradient-to-b from-[#98FDE3] to-[#3E3761]'>
                        <div className='text-center absolute flex flex-col mx-auto justify-center items-center w-full text-[#1B0C4D] top-20'>
                            <p className='text-xl font-bold'>Zillion Moniel</p>
                            <p className='text-[16px]'>Data Engineer</p>
                        </div>
                        <img className='absolute bottom-0' src="/image 1201.png" alt="" />
                    </div>

                    <div className='relative top-28 overflow-clip h-[459px] w-[160px] rounded-full bg-gradient-to-b from-[#DCB1FF] to-[#3E3761]'>
                        <div className='text-center absolute flex flex-col mx-auto justify-center items-center w-full text-[#1B0C4D] top-20'>
                            <p className='text-xl font-bold'>Lissa Kie</p>
                            <p className='text-[16px]'>React Engineer</p>
                        </div>
                        <img className='absolute bottom-0' src="/image 1198.png" alt="" />
                    </div>

                    <div className='relative overflow-clip h-[459px] w-[160px] rounded-full bg-gradient-to-b from-[#85acff] to-[#3E3761]'>
                        <div className='text-center absolute flex flex-col mx-auto justify-center items-center w-full text-[#1B0C4D] top-20'>
                            <p className='text-xl font-bold'>Killan James</p>
                            <p className='text-[16px]'>Laravel Engineer</p>
                        </div>
                        <img className='absolute bottom-0' src="/portrait-handsome-young-man-with-crossed-arms-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BannerBG;