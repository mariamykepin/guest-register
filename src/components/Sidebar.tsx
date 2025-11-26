import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 border-b">
        <h1 className="text-lg font-bold">Guest Register</h1>
        <p className="text-sm text-gray-500">Reception Dashboard</p>
      </div>

      <nav className="p-4 space-y-1">
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/guest-form" className={linkClass}>Registrasi Tamu</NavLink>
        <NavLink to="/guest-list" className={linkClass}>Daftar Tamu</NavLink>
      </nav>

      <div className="p-4 mt-auto">
        <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded">Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;