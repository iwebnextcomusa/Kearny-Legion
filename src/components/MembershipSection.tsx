import React, { useState } from "react";
import { Sparkles, Check, HelpCircle, FileText, Bookmark, ClipboardCheck, ArrowRight } from "lucide-react";

export default function MembershipSection() {
  const [eligibilityCheck, setEligibilityCheck] = useState({
    activeDuty: false,
    dischargedHonorable: false,
    warEra: false
  });

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [serviceBranch, setServiceBranch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const eligibilityList = [
    "Served at least one day of active military duty in the United States Armed Forces.",
    "Served any time since April 6, 1917 (the official U.S. entry into World War I).",
    "Was honorably discharged, or is currently serving on active duty."
  ];

  const benefitsList = [
    {
      title: "Camaraderie & Peer Support",
      desc: "Connect instantly with veterans across all generations. Share stories, gain mutual encouragement, and belong to a dedicated local military family."
    },
    {
      title: "Legion Mutual Aid & VA Claims Support",
      desc: "Get certified assistance filing medical claims, access state welfare grants, housing programs, and specialized counseling completely free."
    },
    {
      title: "Legion Magazine & Exclusive Discounts",
      desc: "Free annual subscription to the esteemed American Legion Magazine, plus national member discounts on car rentals, hotels, insurance, and medical care."
    },
    {
      title: "Community & Civic Leadership",
      desc: "Stand tall. Speak at local schools, coordinate scout groups, direct local color guards, and advocate for veteran health reforms in Jersey."
    }
  ];

  const isEligible = eligibilityCheck.activeDuty && eligibilityCheck.dischargedHonorable && eligibilityCheck.warEra;

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setServiceBranch("");
    }, 4000);
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Title Banner */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          JOIN THE AMERICAN LEGION
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Defend. Support. Empower. Become a Veteran Ally.
        </p>
      </section>

      {/* Main Core: Eligibility Checker & Form */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Eligibility Check widget */}
        <div className="space-y-8">
          <div className="border-l-4 border-amber-500 pl-4">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Am I Eligible?</span>
            <h3 className="text-2xl font-bold text-white mt-1">Eligibility Criteria</h3>
          </div>
          
          <p className="text-sm text-slate-300 leading-relaxed">
            Unlike other social fraternities, membership in The American Legion is defined strictly by congressional statutes. Fill out our simple self-checker to test if you qualify:
          </p>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Instant Self-Checker</h4>
            
            <label className="flex items-start gap-3 cursor-pointer p-2.5 rounded hover:bg-white/5 transition-colors">
              <input
                type="checkbox"
                checked={eligibilityCheck.activeDuty}
                onChange={(e) => setEligibilityCheck({ ...eligibilityCheck, activeDuty: e.target.checked })}
                className="mt-1 w-4 h-4 accent-amber-500"
              />
              <span className="text-xs sm:text-sm text-slate-200">
                I have served at least one day on active military duty in any branch of the US Armed Forces.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-2.5 rounded hover:bg-white/5 transition-colors">
              <input
                type="checkbox"
                checked={eligibilityCheck.dischargedHonorable}
                onChange={(e) => setEligibilityCheck({ ...eligibilityCheck, dischargedHonorable: e.target.checked })}
                className="mt-1 w-4 h-4 accent-amber-500"
              />
              <span className="text-xs sm:text-sm text-slate-200">
                I was honorably discharged, or I am currently serving on active duty.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-2.5 rounded hover:bg-white/5 transition-colors">
              <input
                type="checkbox"
                checked={eligibilityCheck.warEra}
                onChange={(e) => setEligibilityCheck({ ...eligibilityCheck, warEra: e.target.checked })}
                className="mt-1 w-4 h-4 accent-amber-500"
              />
              <span className="text-xs sm:text-sm text-slate-200">
                My service falls during eligible service years (any time from April 6, 1917 to the present day).
              </span>
            </label>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Eligibility Status:</span>
              {isEligible ? (
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold rounded-full">
                  ✓ Ready to Apply
                </span>
              ) : (
                <span className="inline-block px-3 py-1 bg-red-950/20 text-red-400 border border-red-500/15 text-xs font-semibold rounded-full">
                  Please Check All Boxes
                </span>
              )}
            </div>
          </div>

          {/* Renewal info */}
          <div className="bg-slate-900/10 p-5 rounded-xl border border-white/5">
            <strong className="text-sm font-bold text-white block mb-2 flex items-center gap-1">
              <Bookmark className="w-4 h-4 text-amber-500" />
              <span>Looking to Renew Your Membership?</span>
            </strong>
            <p className="text-xs text-slate-400 leading-relaxed text-slate-300">
              Are you an existing Post-99 member? Annual renewal dues support our local community and are payable by check directly on post or securely online via our national partner login. Please call <a href="tel:201-889-8759" className="text-amber-400 hover:underline font-bold">201-889-8759</a> to coordinate.
            </p>
          </div>
        </div>

        {/* Membership Inquiry Application form */}
        <div className="bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between shadow-2xl relative">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ClipboardCheck className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Post-99 Inquiry Application</h3>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto text-xl font-bold animate-bounce">
                  🎖️
                </div>
                <h4 className="text-lg font-bold text-white">Application Recorded Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Post Commander Ramon Rivera and our Adjutant Marisol Henderson have received your veteran service details. We will reach out to you via your email (<span className="text-amber-400 font-mono">{formEmail}</span>) within 24 hours to finalize your military records check. Welcome home, comrade!
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                
                {/* Full name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sgt. John Smith"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. smith@gmail.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 201-555-0199"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Service branch selection */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Branch of Service
                  </label>
                  <select
                    value={serviceBranch}
                    onChange={(e) => setServiceBranch(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="">Select branch...</option>
                    <option value="Army">United States Army</option>
                    <option value="Navy">United States Navy</option>
                    <option value="AirForce">United States Air Force</option>
                    <option value="Marines">United States Marine Corps</option>
                    <option value="CoastGuard">United States Coast Guard</option>
                    <option value="SpaceForce">United States Space Force</option>
                    <option value="NationalGuard">National Guard / Reserves</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-lg flex items-center justify-center gap-1 text-xs uppercase shadow-xl shadow-amber-400/5 transition-transform hover:-translate-y-0.5"
                  >
                    <span>Submit Inquiry Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="block text-center text-[10px] text-slate-500 mt-2">
                    * By submitting, you affirm your intention to undergo honorable discharge records validation.
                  </span>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-slate-900/10 py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Why Stand with Us?</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Outstanding Member Benefits</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsList.map((b, key) => (
              <div 
                key={key}
                className="bg-slate-950 p-6 rounded-xl border border-white/5 flex gap-4 shadow-sm hover:border-amber-500/10 transition-colors"
              >
                <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 font-black" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
