import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../../../providers/ThemeProvider";

const Navbar = () => {

    // const { theme, toggleTheme } = useContext(ThemeContext);

    const navOptions = <>
        <li>
            <NavLink
                to='/'
                className="text-[#EAE34A] inter-500">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/course'
                className="text-white inter-500">
                Course
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/about-us'
                className="text-white inter-500">
                About us
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/pricing'
                className="text-white inter-500">
                Pricing
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/contact'
                className="text-white inter-500">
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div className="flex justify-center inter-500 text-white">
            <div className="navbar bg-[#1B0C4D] max-w-full fixed w-full mx-auto lg:px-52 py-3 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost dark:text-white text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow dark:bg-gray-900 bg-white rounded w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="hidden lg:block uppercase lg:text-xl"><img src="CodeSandbox.png" className="w-fit h-12" alt="" /></a>
                        <p className="text-2xl ">CodeLearn</p>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 px-1 dark:text-white text-black">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="lg:flex gap-3 hidden">
                        <NavLink to='/login' className="font-semibold transition-all ease-in-out text-[#1B0C4D] hover:bg-[#c9c23d] bg-[#EAE34A] px-6 py-2 rounded-md">Login</NavLink>
                        <NavLink to='/signup' className="font-semibold transition-all ease-in-out text-white hover:bg-[#2b1d5c] bg-[#37266F] px-6 py-2 rounded-md">Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
