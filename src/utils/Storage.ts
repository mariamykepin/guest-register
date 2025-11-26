import type { Guest } from "../types";

const KEY = "guests_v1";

export const getGuests = (): Guest[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Guest[]) : [];
  } catch {
    return [];
  }
};

export const saveGuests = (guests: Guest[]) => {
  localStorage.setItem(KEY, JSON.stringify(guests));
};

export const addGuest = (guest: Guest) => {
  const guests = getGuests();
  guests.push(guest);
  saveGuests(guests);
};
