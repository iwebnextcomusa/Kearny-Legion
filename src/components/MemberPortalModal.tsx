import React, { useState } from "react";
import { X, UserCheck, ShieldAlert, Heart, Calendar, Award, CheckCircle, Save, LogOut } from "lucide-react";
import { motion } from "motion/react";

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  portalUser: { name: string; isLoggedIn: boolean } | null;
  setPortalUser: (user: { name: string; isLoggedIn: boolean } | null) => void;
}

export default function MemberPortalModal({
  isOpen,
  onClose,
  portalUser,
  setPortalUser,
}: MemberPortalModalProps) {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [errorMess, setErrorMess] = useState<string | null>(null);

  // Profile forms editable fields
  const [phone, setPhone] = useState("201-555-5201");
  const [address, setAddress] = useState("120 Elm St, Kearny NJ");
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber) {
      setErrorMess("Please supply both credentials.");
      return;
    }

    // Standard credential checking simulation for clean UX
    if (!email.includes("@")) {
      setErrorMess("Please supply a valid email address.");
      return;
    }

    setPortalUser({
      name: email.split("@")[0].toUpperCase(),
      isLoggedIn: true
    });
    setErrorMess(null);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  const handleLogout = () => {
    setPortalUser(null);
    setEmail("");
    setCardNumber("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-lg bg-slate-950 border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl relative p-6 font-sans text-slate-200"
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGGED IN VIEW */}
        {portalUser?.isLoggedIn ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 border border-amber-400/30 flex items-center justify-center text-lg">
                🎖️
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 block">
                  Legionnaire Portal
                </span>
                <h4 className="text-lg font-bold text-white">Comrade {portalUser.name}</h4>
              </div>
            </div>

            {/* Simulated Membership stats card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                <span className="text-[9px] text-slate-400 font-mono block uppercase">Member Standing</span>
                <span className="text-sm font-bold text-green-400 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Active / Paid (2026)</span>
                </span>
                <p className="text-[10px] text-slate-500 leading-tight">Dues valid until Jan 1, 2027.</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                <span className="text-[9px] text-slate-400 font-mono block uppercase">Volunteer Hours</span>
                <span className="text-sm font-bold text-white flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>54 Service Hours</span>
                </span>
                <p className="text-[10px] text-slate-500 leading-tight">Ranked Silver on Hudson Command.</p>
              </div>
            </div>

            {/* Profile editing options */}
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-red-500 pl-2">
                My Contact Registration Records
              </h5>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">
                    Phone Coordinates
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">
                    Post Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex-1 bg-red-950/25 hover:bg-red-950/40 border border-red-500/20 text-xs text-red-400 font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 text-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? "Saving Records..." : "Save Coordinates"}</span>
                </button>
              </div>

              {saveSuccess && (
                <p className="text-center text-xs text-green-400">
                  ✓ Profile coordinates persisted successfully on server db!
                </p>
              )}
            </form>

            {/* Exclusive local announcements */}
            <div className="p-4 bg-slate-900/20 border border-amber-500/10 rounded-xl space-y-1.5 text-xs text-slate-300">
              <strong className="text-white block font-bold text-amber-500 uppercase font-mono tracking-wider text-[10px]">
                Post-99 Confidential Member Bulletin
              </strong>
              <p className="leading-relaxed">• Next executive protocol committee meets on June 28 at 6:30 PM.</p>
              <p className="leading-relaxed">• Annual flag retirement fire ceremony draft outlines are downloadable in files section.</p>
            </div>
          </div>
        ) : (
          /* LOGIN FORM GATED VIEW */
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg">
                🔐
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Post Companion Portal</h4>
                <p className="text-xs text-slate-400 mt-1">Access veteran hours, bulletins and post calendars.</p>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Member Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com (e.g. veteran@gmail.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Legionnaire ID Card Number *
                </label>
                <input
                  type="password"
                  required
                  placeholder="e.g. 104-988-VET"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {errorMess && (
                <div className="flex items-center gap-1.5 text-xs text-red-400 bg-red-950/20 border border-red-500/20 p-2.5 rounded-lg">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMess}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-1 text-xs uppercase shadow-md transition-all"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Secure Sign In</span>
                </button>
              </div>

              <div className="bg-slate-900/20 border border-white/5 p-3 rounded-lg text-[10px] text-slate-500 leading-relaxed text-center">
                Portal credentials are restricted strictly to active registered comrades of Kearny Legion Jersey. Inquire registration details on post.
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
