import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onStart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  if (isLoggedIn) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p className="mb-4">You are logged in 🎉</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/crewsy_logo.jpg"
        alt="Crewsy Logo"
        className="w-16 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">Crewsy</h1>
      <p className="text-sm text-gray-600 mb-4 tracking-widest">
        Where Projects Meet Productive Collaboration
      </p>
      <button
        className="bg-indigo-600 text-white px-6 py-2 rounded"
        onClick={onStart}
      >
        Start Now
      </button>
    </div>
  );
};

export default LandingPage;
