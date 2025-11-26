import React from "react";
import { getGuests } from "../utils/storage";

const Dashboard: React.FC = () => {
  const [totalToday, setTotalToday] = React.useState(0);
  const [currentIn, setCurrentIn] = React.useState(0);

  React.useEffect(() => {
    const guests = getGuests();
    const today = new Date().toISOString().slice(0, 10);

    setTotalToday(guests.filter(g => g.checkinTime.slice(0,10) === today).length);
    setCurrentIn(guests.filter(g => !g.checkoutTime).length);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Tamu hari ini</div>
          <div className="text-2xl font-bold">{totalToday}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Sedang berada di lokasi</div>
          <div className="text-2xl font-bold">{currentIn}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
