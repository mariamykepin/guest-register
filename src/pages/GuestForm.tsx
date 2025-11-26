import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { addGuest } from "../utils/storage";
import type { Guest } from "../types";

const GuestForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    phone: "",
    visitReason: "",
    meetingWith: "",
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) {
      alert("Nama dan nomor telepon wajib");
      return;
    }
    const g: Guest = {
      id: String(Date.now()),
      fullName: form.fullName,
      organization: form.organization,
      phone: form.phone,
      visitReason: form.visitReason,
      meetingWith: form.meetingWith,
      checkinTime: new Date().toISOString(),
      checkoutTime: null,
      photoUrl: photoPreview,
    };
    addGuest(g);
    alert("Registrasi berhasil!");
    navigate("/guest-list");
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="bg-white text-black p-6 rounded shadow max-w-2xl w-full">
        <h3 className="text-xl font-semibold mb-4">Form Registrasi Tamu</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Nama Lengkap *</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Instansi / Perusahaan</label>
              <input name="organization" value={form.organization} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">No. Telepon *</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" required />
            </div>
          </div>

          <div>
            <label className="block text-sm">Keperluan Kunjungan</label>
            <textarea name="visitReason" value={form.visitReason} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm">Bertemu Dengan</label>
            <input name="meetingWith" value={form.meetingWith} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm">Upload Foto / ID (opsional)</label>
            <input type="file" accept="image/*" onChange={handlePhoto} />
            {photoPreview && <img src={photoPreview} alt="preview" className="mt-2 w-32 h-32 object-cover rounded" />}
          </div>

          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Check In</button>
            <button type="button" onClick={() => navigate("/guest-list")} className="px-4 py-2 rounded border">Batal</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestForm;
