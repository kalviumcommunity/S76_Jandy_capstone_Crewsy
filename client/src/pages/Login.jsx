// src/pages/Login.jsx
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-6">Login to Crewsy</h2>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 mb-4"
      >
        Continue with Google
      </button>

      <button
        onClick={handleGithubLogin}
        className="px-6 py-2 bg-gray-800 rounded hover:bg-gray-900"
      >
        Continue with GitHub
      </button>
    </div>
  );
}
