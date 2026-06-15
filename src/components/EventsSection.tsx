import React, { useState } from "react";
import { UPCOMING_EVENTS } from "../data";
import { EventItem } from "../types";
import { Calendar, MapPin, Clock, Search, X, CheckCircle, Ticket, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function EventsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Registration Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [militaryAffiliation, setMilitaryAffiliation] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const filteredEvents = UPCOMING_EVENTS.filter((evt) => {
    const matchesSearch = evt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          evt.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || evt.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    if (selectedEvent) {
      setRegisteredEvents((prev) => [...prev, selectedEvent.id]);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        setSelectedEvent(null);
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setMilitaryAffiliation("");
      }, 3000);
    }
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Title Banner */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          POST EVENTS & CALENDAR
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Veterans Meetings • Public Barbeques • Welfare Workshops
        </p>
      </section>

      {/* Main Filter Control & Schedule Panel */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="bg-slate-900/60 rounded-2xl p-6 border border-white/5 mb-8 flex flex-col md:flex-row justify-between gap-4">
          
          {/* Calendar Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search post activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Category Filter Select */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-slate-950 border border-white/10 text-xs sm:text-sm text-slate-300 rounded-lg py-2.5 px-3.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="all">All Categories</option>
              <option value="community">Community Initiatives</option>
              <option value="veteran">Veteran Support</option>
              <option value="youth">Youth Education</option>
              <option value="fundraiser">Fundraising Dinners</option>
            </select>
          </div>
        </div>

        {/* Events List Grid */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/10 border border-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">No events matched your search filter parameters.</p>
            </div>
          ) : (
            filteredEvents.map((evt) => {
              const isRegistered = registeredEvents.includes(evt.id);
              return (
                <div 
                  key={evt.id}
                  className="bg-slate-900/30 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 hover:bg-slate-900/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap gap-2.5 items-center">
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                        {evt.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>{evt.date}</span>
                        <Clock className="w-3.5 h-3.5 text-blue-500 ml-2" />
                        <span>{evt.time}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{evt.title}</h3>
                    
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {evt.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-semibold">
                      <MapPin className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  {/* Register Call to action button */}
                  <div className="shrink-0">
                    {isRegistered ? (
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-xs font-bold text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>Seat Registered</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setSelectedEvent(evt)}
                        className="bg-gradient-to-r from-red-650 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-xs font-bold px-5 py-3 rounded-lg border border-red-500/20 flex items-center gap-1.5 shadow"
                      >
                        <Ticket className="w-4 h-4" />
                        <span>RSVP / Register Free</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Registration Event RSVP Modal overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-slate-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl relative p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-md p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500 block mb-1">
                  RSVP Seat Reservation
                </span>
                <h4 className="text-lg font-bold text-white pr-6 leading-tight">
                  {selectedEvent.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  ⏱️ {selectedEvent.date} @ {selectedEvent.time}
                </p>
              </div>

              {successMessage ? (
                <div className="py-10 text-center space-y-3 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-slate-950 flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <h5 className="text-base font-bold text-white">Registration Complete!</h5>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    We have successfully registered your name on the Post RSVP log. An educational reminder email has been sent. See you soon at Kearny!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe, Vet"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 201-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {/* Military details */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Military Branch Affiliation?
                    </label>
                    <select
                      value={militaryAffiliation}
                      onChange={(e) => setMilitaryAffiliation(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="">Choose affiliation...</option>
                      <option value="army">U.S. Army (Retired or Active)</option>
                      <option value="navy">U.S. Navy (Retired or Active)</option>
                      <option value="airforce">U.S. Air Force (Retired or Active)</option>
                      <option value="marines">U.S. Marine Corps (Retired or Active)</option>
                      <option value="coastguard">U.S. Coast Guard</option>
                      <option value="civilian">Civilian supporter / Spouse</option>
                    </select>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-4 border-t border-white/5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="flex-1 bg-slate-900 hover:bg-slate-850 text-xs text-white font-medium py-2.5 rounded-lg border border-white/5"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-amber-500 hover:bg-amber-400 text-xs text-slate-950 font-bold py-2.5 rounded-lg shadow-lg shadow-amber-400/5"
                    >
                      Confirm Registration
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
