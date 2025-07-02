// src/pages/Dashboard.jsx
import React from 'react';
import { FaLightbulb, FaCode, FaPaintBrush } from "react-icons/fa";

const rooms = [
  {
    name: 'Room Alpha',
    description: 'Project planning and brainstorming.',
    icon: <FaLightbulb size={32} />,
    color: 'bg-green-400'
  },
  {
    name: 'Room Beta',
    description: 'Development and code reviews.',
    icon: <FaCode size={32} />,
    color: 'bg-yellow-400'
  },
  {
    name: 'Room Gamma',
    description: 'Design and UI/UX discussions.',
    icon: <FaPaintBrush size={32} />,
    color: 'bg-indigo-400'
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb]">
      <div className="flex flex-col items-center w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-800">
          🚀 Crewsy Dashboard
        </h1>
        <p className="mb-8 text-lg text-gray-600 text-center">
          Welcome! Select a room to start collaborating with your team.
        </p>
        <div className="relative flex flex-col items-center w-full">
          {rooms.map((room, idx) => (
            <div key={room.name} className="flex flex-col items-center w-full">
              {/* Connector line except for last card */}
              {idx !== 0 && (
                <div className="w-1 h-8 bg-gray-300"></div>
              )}
              <div className={`flex items-center w-full rounded-2xl shadow-lg p-6 mb-2 ${room.color} bg-opacity-90`}>
                <div className="mr-4 text-white">{room.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">{room.name}</h2>
                  <p className="text-white mb-2">{room.description}</p>
                  <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition">
                    Enter Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-10 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white font-semibold shadow transition"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

