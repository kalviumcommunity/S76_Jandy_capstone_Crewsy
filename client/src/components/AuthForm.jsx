import React from 'react';
// import LeftImage from '../assets/crewsy_left_image.jpg';


const AuthForm = ({ mode, onSwitch }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-[450px] h-[440px]">
      <h2 className="text-xl font-bold mb-6">
        {mode === 'signup' ? 'Getting Started' : 'Welcome Again'}
      </h2>
      {mode === 'signup' && (
        <>
          <input type="text" placeholder="First Name" className="w-full p-2 mb-4 border rounded" />
          <input type="text" placeholder="Last Name" className="w-full p-2 mb-4 border rounded"/>
        </>
      )}
      <input type="email" placeholder="e - Mail" className="w-full p-2 mb-4 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
      
      <div className="flex space-x-2">
        {mode === 'signup' ? (
          <>
            <button className="bg-indigo-600 text-white w-1/2 py-2 rounded">Sign up</button>
            <button className="bg-gray-200 w-1/2 py-2 rounded" onClick={() => onSwitch('login')}>
              Log in
            </button>
          </>
        ) : (
          <>
            <button className="bg-indigo-600 text-white w-1/2 py-2 rounded">Log in</button>
            <button className="bg-gray-200 w-1/2 py-2 rounded" onClick={() => onSwitch('signup')}>
              Sign up
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">OR</div>
      <div className="flex justify-between mt-4 ">
        <button className="border  flex items-center gap-2 rounded">
          <img src="https://img.icons8.com/color/16/google-logo.png" alt="google" />
          Continue with Google
        </button>
        <button className="border  flex items-center gap-2 rounded">
          <img src="https://img.icons8.com/ios-glyphs/16/github.png" alt="github" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
