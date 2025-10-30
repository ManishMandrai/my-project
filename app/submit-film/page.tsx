"use client";

import React, { useState, useRef } from "react";
import { Cloud, Link as LinkIcon, Upload, Check } from "lucide-react";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  type: "Drive Upload" | "YouTube/Vimeo/Drive Link";
  videoUrl: string;
  driveId?: string;
  date: string;
};

const categories = ["Short Film", "Documentary", "Animation", "Student", "Experimental"];

export default function SubmitFilmPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const [useUpload, setUseUpload] = useState(true);
  const [link, setLink] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setCategory(categories[0]);
    setUseUpload(true);
    setLink("");
    setFilePreview(null);
    if (fileRef.current) fileRef.current.value = "";
    setTerms(false);
    setError(null);
  }

  function validateEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    // preview object URL for small video or poster; for presentation just show filename
    setFilePreview(f.name);
  }

  function generateDriveLink() {
    // simulate a drive file id and url (for demo only)
    const id = 'drive_' + Math.random().toString(36).slice(2, 9);
    return { id, url: `https://drive.google.com/file/d/${id}/view` };
  }

  const onSubmit = async (ev?: React.FormEvent) => {
    if (ev) ev.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!terms) {
      setError("Please accept the terms before submitting.");
      return;
    }

    if (useUpload) {
      // simulate upload
      setUploading(true);
      setProgress(4);
      const interval = setInterval(() => {
        setProgress((p) => {
          const next = p + Math.floor(Math.random() * 12 + 6);
          if (next >= 100) {
            clearInterval(interval);
            setProgress(100);
            setUploading(false);
            // create submission with drive link
            const { id, url } = generateDriveLink();
            const s: Submission = {
              id,
              name,
              email,
              phone,
              city,
              category,
              type: "Drive Upload",
              videoUrl: url,
              driveId: id,
              date: new Date().toLocaleString(),
            };
            setSubmissions((prev) => [s, ...prev]);
            resetForm();
          }
          return Math.min(next, 100);
        });
      }, 400);

      return;
    }

    // link flow: validate link and save
    if (!link.trim()) {
      setError("Please paste a video link or choose Upload.");
      return;
    }

    const s: Submission = {
      id: 'link_' + Math.random().toString(36).slice(2, 9),
      name,
      email,
      phone,
      city,
      category,
      type: "YouTube/Vimeo/Drive Link",
      videoUrl: link,
      date: new Date().toLocaleString(),
    };
    setSubmissions((prev) => [s, ...prev]);
    resetForm();
  };

  function exportCSV() {
    const header = [
      "S.No",
      "Name",
      "Email",
      "Phone",
      "City/District",
      "Category",
      "Type",
      "Video Link",
      "Drive ID",
      "Date Submitted",
    ];
    const rows = submissions.map((s, i) => [
      i + 1,
      s.name,
      s.email,
      s.phone || "",
      s.city || "",
      s.category,
      s.type,
      s.videoUrl,
      s.driveId || "",
      s.date,
    ]);
    const csv = [header, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `submissions_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-xl shadow-lg">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold">Submit Your Film</h1>
          <p className="text-sm text-zinc-400 mt-2">Easily upload your film or paste a watchable link. Jury will be able to access all submissions via a simple Google Sheet.</p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className="bg-black/50 border border-white/6 rounded-md p-3" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} />
              <input className="bg-black/50 border border-white/6 rounded-md p-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input className="bg-black/50 border border-white/6 rounded-md p-3" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
              <input className="bg-black/50 border border-white/6 rounded-md p-3" placeholder="City / District" value={city} onChange={(e)=>setCity(e.target.value)} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <label className="text-sm text-zinc-300 mr-3">Category</label>
              <select value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-black/50 border border-white/6 rounded-md p-2">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-4">
                <label className={`px-3 py-2 rounded-md cursor-pointer ${useUpload? 'bg-yellow-400 text-black font-semibold':'bg-white/3 text-white'}`} onClick={()=>setUseUpload(true)}>
                  <Upload className="inline-block mr-2" /> Upload Video
                </label>
                <label className={`px-3 py-2 rounded-md cursor-pointer ${!useUpload? 'bg-yellow-400 text-black font-semibold':'bg-white/3 text-white'}`} onClick={()=>setUseUpload(false)}>
                  <LinkIcon className="inline-block mr-2" /> Paste Link
                </label>
              </div>

              <div className="mt-4">
                {useUpload ? (
                  <div className="border border-dashed border-white/6 rounded-md p-4">
                    <input ref={fileRef} type="file" accept="video/*" onChange={onFileChange} className="block w-full text-sm" />
                    <div className="mt-3 text-sm text-zinc-400">Selected: <span className="text-white">{filePreview || 'No file chosen'}</span></div>
                    <div className="mt-3">
                      {uploading ? (
                        <div className="w-full bg-white/6 rounded-full overflow-hidden h-3">
                          <div className="h-3 bg-yellow-400" style={{ width: `${progress}%` }} />
                        </div>
                      ) : (
                        <div className="text-xs text-zinc-400">Max file size: 2GB. We recommend uploading compressed H.264 MP4.</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <input className="w-full bg-black/50 border border-white/6 rounded-md p-3" placeholder="YouTube / Vimeo / Google Drive link" value={link} onChange={(e)=>setLink(e.target.value)} />
                    <div className="text-xs text-zinc-400 mt-2">Example: https://youtu.be/abcd or https://drive.google.com/file/d/ID/view</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input id="terms" type="checkbox" checked={terms} onChange={(e)=>setTerms(e.target.checked)} />
              <label htmlFor="terms" className="text-sm text-zinc-400">I confirm I own the rights to this film and grant the festival permission to screen it.</label>
            </div>

            {error && <div className="text-sm text-red-400">{error}</div>}

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold" disabled={uploading}>
                {uploading ? 'Uploading...' : 'Submit'}
              </button>

              <button type="button" className="text-sm text-zinc-300 underline" onClick={resetForm}>Reset</button>

              {/* <div className="ml-auto">
                <button onClick={exportCSV} className="text-sm  text-zinc-300 hover:text-white">Export CSV</button>
              </div> */}
            </div>
          </form>
        </div>

        {/* Submissions preview (sheet-like) */}
        
      </div>
    </div>
  );
}
