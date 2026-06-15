import React from "react";
import { LEADER_OFFICERS } from "../data";
import { Landmark, ShieldCheck, HeartPulse, ShieldAlert, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Banner Header */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          ABOUT OUR POST & CONSTITUENCY
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Kearny American Legion Post-99 Jersey • Founded 1919
        </p>
      </section>

      {/* History and Goals */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">A Centurial Promise</span>
              <h3 className="text-2xl font-bold text-white mt-1">Origin of the American Legion</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The American Legion was chartered by Congress in 1919 as a patriotic veterans organization. Focusing on service to veterans, servicemembers, and communities, the Legion evolved from a group of war-weary veterans of World War I into one of the most influential nonprofit organizations in the United States.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Over the decades, members of the Legion spearheaded the development of the U.S. Veterans Administration and successfully drafted the original federal G.I. Bill of Rights, which paid for college degrees for millions of returning war veterans.
            </p>
            <div className="bg-slate-900/60 p-5 rounded-lg border border-white/5 space-y-2">
              <strong className="text-sm font-bold text-amber-400 block">Our Credo is Americanism:</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe in promoting unwavering allegiance to the United States Constitution, respecting military flags, conducting classroom educational workshops for children, and teaching local kids about the sacrifices that secure democracy.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">Kearny Legion Mission</span>
              <h3 className="text-2xl font-bold text-white mt-1">Our Local Post Mission</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Under Kearny Post-99, we translate these national objectives into direct neighborhood acts of solidarity. We coordinate benefits navigation with county VA counselors, provide financial relief checks for disabled veterans, clean local military war monuments, and sponsor outstanding high-school boys to camp delegates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/30 rounded-xl border border-white/5 flex gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Honor Integrity</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Assisting disabled veterans file claims with complete transparency.</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900/30 rounded-xl border border-white/5 flex gap-2">
                <HeartPulse className="w-5 h-5 text-red-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Veteran Welfare</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Emergency support grants for housing, mental aid, and medical transport.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-900/20 py-16 border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Command Circle</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Our Leadership & Officers</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
              Meet the dedicated military veterans driving our local Post-99 operations and assisting comrades on in Kearny.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADER_OFFICERS.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all flex flex-col items-center text-center shadow-lg group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 text-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform mb-4 shadow-inner">
                  {leader.image}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{leader.name}</h4>
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block mt-1">
                    {leader.role}
                  </span>
                  <span className="text-[9px] text-slate-400 block font-mono mt-0.5">
                    {leader.serviceBranch}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
