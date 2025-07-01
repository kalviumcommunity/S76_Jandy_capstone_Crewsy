// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-400 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="mb-8 text-lg text-indigo-100 text-center max-w-md">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-100 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
