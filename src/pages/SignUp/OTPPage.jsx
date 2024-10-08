import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const OTPPage = () => {
    const axiosPublic = useAxiosPublic();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleOtpPaste = (event) => {
        const pastedData = event.clipboardData.getData('text');
        const otpArray = pastedData.split('').slice(0, 6);
        setOtp(otpArray);
    };

    const verifyOtp = async () => {
        const enteredOtp = otp.join("");
        try {
            const response = await axiosPublic.post("/auth/otp", {
                email: state?.email,
                otp: enteredOtp,
            });

            if (response.data.success) {
                toast.success("OTP verified successfully!");
                console.log("Navigating to login...");
                navigate("/login");
            } else {
                toast.error("Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            toast.error("An error occurred while verifying OTP.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 shadow-lg p-8 rounded-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">Verify OTP</h1>
                <p className="text-black dark:text-white text-center mb-4">Enter the OTP sent to your email/phone.</p>

                <div className="flex justify-center space-x-2 mb-6">
                    {otp.map((data, index) => (
                        <input
                            className="input w-12 h-12 text-center text-2xl text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="text"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                            onPaste={(e) => handleOtpPaste(e, index)}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={verifyOtp}
                    >
                        Verify OTP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPPage;
