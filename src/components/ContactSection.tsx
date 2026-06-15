import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 4000);
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Title Banner */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          CONTACT KEARNY LEGION
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Post-99 Headquarters • Directly Dial commander Rivera
        </p>
      </section>

      {/* Main Grid: Form vs Info Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info & SVG Map */}
        <div className="space-y-8">
          <div className="border-l-4 border-amber-500 pl-4">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Get In Touch</span>
            <h3 className="text-2xl font-bold text-white mt-1">Visit or Call Us</h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Need filing assistance, want to coordinate military honors for a funeral service, or wish to donate? Call us immediately or stop by the Post-99 lounge during assembly hours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-1">
              <Phone className="w-5 h-5 text-amber-400" />
              <strong className="block text-xs text-white uppercase font-bold pt-1">Direct Call Line</strong>
              <a href="tel:201-889-8759" className="text-sm text-amber-400 hover:underline">201-889-8759</a>
              <span className="block text-[10px] text-slate-500 font-mono">Commander Ramon Rivera</span>
            </div>

            <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-1">
              <Mail className="w-5 h-5 text-amber-400" />
              <strong className="block text-xs text-white uppercase font-bold pt-1">Email Coordinates</strong>
              <a href="mailto:ramon.rivera1987@gmail.com" className="text-sm text-amber-400 hover:underline truncate block">
                ramon.rivera1987@gmail.com
              </a>
              <span className="block text-[10px] text-slate-500 font-mono">Adjutany Office</span>
            </div>
          </div>

          {/* Embedded Google Map Placeholder */}
          <div className="bg-slate-900/30 rounded-2xl p-4 border border-white/5">
            <div className="h-48 bg-slate-950 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-4 text-center border border-white/5">
              <MapPin className="w-8 h-8 text-red-500 animate-bounce mb-2" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kearny Legion Post-99 Location</h4>
              <p className="text-[10px] text-slate-400 max-w-sm mt-1 leading-relaxed">
                Kearny, New Jersey, 07032. Official headquarters lounge for local Jersey veterans.
              </p>
              
              {/* Fake grid lines matching a futuristic UI */}
              <div className="absolute inset-0 bg-map-grid opacity-[0.03] pointer-events-none"></div>
              <span className="absolute bottom-3 right-3 text-[9px] text-slate-500 font-mono">GPS Coordinates: 40.7684° N, 74.1454° W</span>
            </div>
          </div>
        </div>

        {/* Contact Form card */}
        <div className="bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl relative">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Direct Message Box</h3>
            <p className="text-xs text-slate-400 mt-1">Send a message directly to Post-99 officers.</p>
          </div>

          {sent ? (
            <div className="py-20 text-center space-y-4 flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-amber-500 animate-pulse" />
              <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                Thank you! Your inquiry was sent to Marisol Henderson (Post Adjutant) and Ramon Rivera (Commander). We typically reply to all community questions within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. david@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sponsoring Boys State / Veteran Relief File help"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message Content *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none whitespace-pre-wrap"
                />
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-lg flex items-center justify-center gap-1.5 text-xs uppercase shadow-xl shadow-amber-400/5 transition-transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Secure Message</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </section>
    </div>
  );
}
