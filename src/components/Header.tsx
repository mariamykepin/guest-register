import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">Reception Dashboard</h2>
      </div>
      <div className="text-sm text-gray-500">
        {new Date().toLocaleString()}
      </div>
    </header>
  );
};

export default Header;
