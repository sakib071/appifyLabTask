import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setEmailError("");
    try {
      const { name, email, password, contactNo } = data;

      // console.log("User info: ", { name, email, password, contactNo });

      await createUser(email, password, name, contactNo);

      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data.message.includes("email already registered")
      ) {
        setEmailError(
          "This email is already registered. Please use a different email."
        );
      } else {
        console.error("Sign-up error:", error);
        toast.error("This email is already registered.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors px-4 md:px-0">
      <div className="w-full max-w-md p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-1 text-green-500 hover:cursor-pointer transition-all">
          <FaAngleLeft className="text-lg" />
          <Link to="/" className="hover:underline text-green-500">
            Back to Home
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
            />
            {errors.name && (
              <span className="text-red-600 mt-1 text-xs">Name is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
            />
            {errors.email && (
              <span className="text-red-600 mt-1 text-xs">Email is required</span>
            )}
            {/* Display email error message */}
            {emailError && (
              <span className="text-red-600 mt-1 text-xs">{emailError}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Contact No
              </span>
            </label>
            <input
              type="contactNo"
              {...register("contactNo", { required: true })}
              placeholder="contact no"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
            />
            {errors.contactNo && (
              <span className="text-red-600 mt-1 text-xs">Contact No is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Password
              </span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
                  },
                })}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 pr-12 transition-all"
                required
              />
              {errors.password && (
                <span className="text-red-600 mt-1 text-xs">
                  {errors.password.message}
                </span>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-600 dark:text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary w-full text-white border-0 bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
              type="submit"
              value="Sign up"
            />
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
