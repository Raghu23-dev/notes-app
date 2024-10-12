import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter a valid password.");
      return;
    }

    // Clear error and proceed to login
    setError("");

    // Login API call here
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <form onSubmit={handleLogin}>
            <h4 className="text-3xl font-bold text-center mb-6 text-white">
              Login
            </h4>

            <input
              type="text"
              placeholder="Email"
              className="input-box w-full p-3 mb-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Error message display */}
            {error && <p className="text-red-500 text-xs pb-1 mb-4">{error}</p>}

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button
              type="submit"
              className="primary-btn w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4 text-gray-400">
              Don&apos;t have an account?{" "}
              <Link to="/signUp" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
