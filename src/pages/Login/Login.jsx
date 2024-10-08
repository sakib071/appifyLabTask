import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const from = location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = (password) => {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasNonalphas = /\W/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        } else if (!(hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas)) {
            return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        return "";
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        setLoading(true);
        setError("");
        setPasswordError("");

        try {
            await signIn(email, password);
            toast.success('Login successful!');
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 500);

        } catch (err) {
            setError("Invalid email or password. Please try again.");
            toast.error("Login failed. Please check your credentials.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors px-4 md:px-0">
            <div className="card w-full max-w-md p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className='flex items-center gap-1 text-green-500 hover:cursor-pointer transition-all'>
                    <FaAngleLeft className="text-lg" />
                    <Link to="/" className='hover:underline text-green-500'>Back to Home</Link>
                </div>
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login to Your Account</h1>
                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete='email'
                            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
                        </label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 pr-12 transition-all"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 text-gray-600 dark:text-gray-400"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <div className="form-control mt-1 h-10">
                        {/* Show password policy error message */}
                        {passwordError && (
                            <p className="text-red-600 text-sm">
                                {passwordError}
                            </p>
                        )}

                        {/* Show general error message */}
                        {error && (
                            <p className="text-red-600 text-sm">
                                {error}
                            </p>
                        )}
                    </div>


                    <div className="form-control mt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-primary w-full text-white border-0 bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1`}
                        >
                            {loading ? "Logging in..." : "Login"}
                            {/* Login */}
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="text-green-500 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
};

export default Login;
