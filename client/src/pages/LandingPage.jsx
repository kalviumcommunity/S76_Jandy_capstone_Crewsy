import React from 'react';
// import LeftImage from '../assets/crewsy_left_image.jpg';

const LandingPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/crewsy_logo.jpg" // replace with your actual logo
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



