import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthForm from './components/AuthForm';
import LogoHeader from './components/LogoHeader';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound"; // <-- Import NotFound

function App() {
  const [view, setView] = useState('landing'); // landing | signup | login

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <LogoHeader />
      <div className="flex flex-1">
        {/* Left static image */}
        <div className="w-1/2 flex justify-center items-center p-4">
          <img src="/images/crewsy_left_image.jpg" alt="illustration" className="w-full max-w-md" />
        </div>

        {/* Right dynamic panel */}
        <div
          className={`w-1/2 flex justify-center items-center p-4 transition-opacity duration-500 ${
            view === 'landing' ? '' : 'bg-[#f9fafb] bg-opacity-70 backdrop-blur-md'
          }`}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                view === 'landing' ? (
                  <LandingPage onStart={() => setView('signup')} />
                ) : (
                  <AuthForm mode={view} onSwitch={setView} />
                )
              }
            />
            <Route path="*" element={<NotFound />} /> {/* NotFound route */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
