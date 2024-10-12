import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span
        className="absolute top-6 right-3 transform -translate-y-1/2 cursor-pointer"
        onClick={toggleShowPassword}
      >
        {isShowPassword ? (
          <FaRegEye size={24} className="text-white" />
        ) : (
          <FaRegEyeSlash size={24} className="text-white" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
