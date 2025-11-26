import type { Guest } from "../types";
import { saveGuests, getGuests } from "./storage";

export const seedDummyGuests = () => {
  const existing = getGuests();
  if (existing.length > 0) return; // biar ga double data kalau sudah ada

  const dummyGuests: Guest[] = [
    {
      id: "1",
      fullName: "Budi Santoso",
      organization: "PT Maju Jaya",
      phone: "081234567890",
      visitReason: "Meeting proyek",
      meetingWith: "Pak Andi",
      checkinTime: "2025-11-26T08:05:00",
      checkoutTime: null,
      photoUrl: null,
    },
    {
      id: "2",
      fullName: "Sinta Wijaya",
      organization: "Bank BCA",
      phone: "082233445566",
      visitReason: "Kerjasama bisnis",
      meetingWith: "Bu Rina",
      checkinTime: "2025-11-26T09:10:00",
      checkoutTime: null,
      photoUrl: null,
    },
    {
      id: "3",
      fullName: "Rudi Hartono",
      organization: "PT Global Media",
      phone: "085677889900",
      visitReason: "Pengiriman dokumen",
      meetingWith: "Front Office",
      checkinTime: "2025-11-25T14:20:00",
      checkoutTime: "2025-11-25T15:05:00",
      photoUrl: null,
    }
  ];

  saveGuests(dummyGuests);
};
