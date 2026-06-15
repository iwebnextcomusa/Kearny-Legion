import React from "react";
import { Mail, Phone, Landmark, ShieldAlert, Heart, Calendar } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-500/20 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                🇺🇸
              </div>
              <h2 className="text-white text-lg font-bold tracking-wider">
                KEARNY AMERICAN LEGION
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              Chartered by Congress in 1919, Kearny American Legion Post serves as a local beacon of patriotism, supporting active military, disabled veterans, military spouses, and youth academic scholarships in Hudson County.
            </p>
            <div className="flex gap-4 text-xs text-amber-400">
              <span className="bg-white/5 py-1 px-2.5 rounded border border-white/10">Post-99 NJ</span>
              <span className="bg-white/5 py-1 px-2.5 rounded border border-white/10">Hudson County</span>
              <span className="bg-white/5 py-1 px-2.5 rounded border border-white/10">501(c)(19) Non-Profit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-red-500 pl-2">
              Explore Post
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActiveTab("about")} className="hover:text-amber-400 transition-colors">
                  Our Mission & Officers
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("programs")} className="hover:text-amber-400 transition-colors">
                  Programs & VA Help
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("events")} className="hover:text-amber-400 transition-colors">
                  Upcoming Call to Service
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("membership")} className="hover:text-amber-400 transition-colors">
                  How to Join / Eligibility
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("news")} className="hover:text-amber-400 transition-colors">
                  Community News Briefs
                </button>
              </li>
            </ul>
          </div>

          {/* Help Line & Details */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-red-500 pl-2">
              Helpline & Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:201-889-8759" className="hover:text-amber-400">201-889-8759</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:ramon.rivera1987@gmail.com" className="hover:text-white truncate">
                  ramon.rivera1987@gmail.com
                </a>
              </li>
              <li className="text-xs leading-relaxed text-amber-500 bg-red-950/20 border border-red-500/20 p-2.5 rounded">
                <strong className="block text-red-400 mb-0.5">Veterans Crisis Line:</strong>
                Need instantaneous psychiatric counsel? Call 988 and Dial 1. Available 24/7.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} KearnyLegion.org. All Rights Reserved. Patriotic Veterans organization serving Hudson County, New Jersey.
          </div>
          <div className="text-center font-sans tracking-wide">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">iWebNext</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
