export interface Guest {
  id: string | number;
  fullName: string;
  organization?: string;
  phone?: string;
  visitReason?: string;
  meetingWith?: string;
  checkinTime: string; // ISO
  checkoutTime?: string | null; // ISO or null
  photoUrl?: string | null;
}