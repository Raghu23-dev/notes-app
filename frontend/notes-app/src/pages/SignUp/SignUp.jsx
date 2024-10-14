import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");

    //SignUp API Call
    
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <form onSubmit={handleSignUp}>
            <h4 className="text-3xl font-bold text-center mb-6 text-white">
              SignUp
            </h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box w-full p-3 mb-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box w-full p-3 mb-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <p className="text-red-500 text-xs pb-1 mb-4">{error}</p>}
            <button
              type="submit"
              className="primary-btn w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Create Account
            </button>
            <p className="text-sm text-center mt-4 text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
