import React, { useState, useEffect } from "react";
import { getGuests, saveGuests } from "../utils/storage";

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState(getGuests());

  const handleCheckout = (id: string) => {
    const updated = guests.map(g =>
      g.id === id ? { ...g, checkoutTime: new Date().toISOString() } : g
    );
    saveGuests(updated);
    setGuests(updated);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Daftar Tamu</h3>

      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Instansi</th>
            <th className="p-2 border">Check In</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {guests.map(g => (
            <tr key={g.id}>
              <td className="p-2 border">{g.fullName}</td>
              <td className="p-2 border">{g.organization}</td>
              <td className="p-2 border">
                {new Date(g.checkinTime).toLocaleString("id-ID")}
              </td>
              <td className="p-2 border">
                {g.checkoutTime ? (
                  <span className="text-green-600 font-semibold">Selesai</span>
                ) : (
                  <span className="text-yellow-600 font-semibold">Di Lokasi</span>
                )}
              </td>
              <td className="p-2 border">
                {g.checkoutTime ? (
                  <button
                    disabled
                    className="px-3 py-1 bg-gray-300 text-gray-600 rounded cursor-not-allowed"
                  >
                    Done
                  </button>
                ) : (
                  <button
                    onClick={() => handleCheckout(g.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Checkout
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
