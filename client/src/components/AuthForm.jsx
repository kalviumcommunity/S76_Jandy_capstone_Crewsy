import React, { useState } from "react";
import API_URL from "../config";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSwitch }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = mode === "signup" ? "/users" : "/auth";
    const payload =
      mode === "signup"
        ? formData
        : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(`${API_URL}/api${endpoint}`, { // <-- Fix here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      if (mode === "login") {
        localStorage.setItem("token", data.data); // store JWT token
        alert("Login successful");
        navigate("/dashboard"); // navigate to protected page
      } else {
        alert("Signup successful, please log in.");
        onSwitch("login"); // switch to login form
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-[450px] h-[460px]"
    >
      <h2 className="text-xl font-bold mb-6">
        {mode === "signup" ? "Getting Started" : "Welcome Again"}
      </h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {mode === "signup" && (
        <>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 mb-4 border rounded"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 mb-4 border rounded"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </>
      )}
      <input
        type="email"
        name="email"
        placeholder="e - Mail"
        className="w-full p-2 mb-4 border rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-indigo-600 text-white w-1/2 py-2 rounded"
        >
          {mode === "signup" ? "Sign up" : "Log in"}
        </button>
        <button
          type="button"
          className="bg-gray-200 w-1/2 py-2 rounded"
          onClick={() => onSwitch(mode === "signup" ? "login" : "signup")}
        >
          {mode === "signup" ? "Log in" : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
