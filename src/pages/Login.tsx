import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("reception");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { username, role: "reception" };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] border border-white/30"
      >
        <h3 className="text-2xl text-white font-semibold mb-6 text-center">Welcome Back</h3>

        <label className="block text-white/90 text-sm mb-1">Username</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <label className="block text-white/90 text-sm mb-1">Password</label>
        <input
          type="password"
          defaultValue="password"
          className="w-full border border-white/30 bg-white/10 text-white placeholder-white/60 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button className="w-full py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
