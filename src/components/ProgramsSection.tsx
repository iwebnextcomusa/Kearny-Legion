import React from "react";
import { ShieldAlert, Heart, GraduationCap, MapPin, Scale, Flag, HelpCircle, PhoneCall } from "lucide-react";

export default function ProgramsSection() {
  const programsList = [
    {
      title: "Veterans Claims Assistance",
      icon: <Scale className="w-6 h-6 text-amber-400" />,
      desc: "Our fully trained Service Officers offer free advice and paperwork filing assistance to ensure Kearny veterans receive active federal disability compensation, VA health care, and military pensions."
    },
    {
      title: "Community Outreach",
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      desc: "From food drives to organizing annual Memorial Day parades at the Kearny Town Hall, we mobilize physical support for civilian families and coordinate local flag retirements."
    },
    {
      title: "Youth & Boys State",
      icon: <GraduationCap className="w-6 h-6 text-red-400" />,
      desc: "Sponsoring local Kearny high school junior delegates to go to the prestigious Jersey Boys State Leadership camp. We also fund active local Boy Scout standard troop certifications."
    },
    {
      title: "Academic Scholarships",
      icon: <Flag className="w-6 h-6 text-yellow-500" />,
      desc: "Annual cash essays! Sponsoring essays regarding patriotic Americanism for local school students. Encouraging civil history education in Hudson County."
    },
    {
      title: "Military Family Crisis Fund",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      desc: "Confidential financial assistance checks when a locally based active servicemember or retired veteran suffers sudden layoff, eviction alerts, or severe medical debts."
    },
    {
      title: "Americanism & Civics",
      icon: <ShieldAlert className="w-6 h-6 text-teal-400" />,
      desc: "Free lectures and flag protocol booklets for local schools. Raising constitutional awareness and maintaining military memorial plaques around New Jersey."
    }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Page Title header */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          OUR CORNERSTONE PROGRAMS
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Advocacy • Civics • Educational Mentoring • Emergency Relief
        </p>
      </section>

      {/* Program Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((p, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-amber-500/20 hover:bg-slate-900/60 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-white/10 mb-4 shadow-inner">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                <span>Category: Local NJ Service</span>
                <span className="text-amber-400 font-semibold">100% Free</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Helpline highlight bar */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="bg-gradient-to-r from-red-950/40 to-blue-950/40 border border-red-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <PhoneCall className="w-5 h-5 text-red-500 animate-pulse" />
              <span>Are You a Veteran in Crisis?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Whether you need urgent psychiatric guidance, temporary housing, or warm meals, please call the Veterans Crisis line at <strong className="text-red-400 font-semibold">988 (Dial 1)</strong>, or directly call our Post Commander Ramon Rivera at <a href="tel:201-889-8759" className="text-amber-400 hover:underline">201-889-8759</a>.
            </p>
          </div>
          <a
            href="tel:201-889-8759"
            className="bg-red-650 hover:bg-red-500 hover:scale-105 transition-all text-white font-bold text-xs uppercase px-5 py-3 rounded-lg border border-red-500/30 whitespace-nowrap bg-red-600"
          >
            Call Duty Commander
          </a>
        </div>
      </section>
    </div>
  );
}
