import React from "react";
import { Sparkles, Calendar, Heart, Shield, Landmark, Award, BookOpen, Quote, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { EventItem } from "../types";

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  featuredEvents: EventItem[];
}

export default function HomeSection({ setActiveTab, featuredEvents }: HomeSectionProps) {
  const corePillars = [
    {
      title: "Veteran Advocacy",
      desc: "Providing guidance on disability claims, pension options, and direct emergency relief funds.",
      icon: <Award className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Community Growth",
      desc: "Sponsoring local scout troops, educational flag programs, and hosting community memorial assemblies.",
      icon: <Landmark className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Youth Development",
      desc: "Sponsoring high school juniors to Jersey Boys State and funding local student scholarships.",
      icon: <BookOpen className="w-6 h-6 text-red-400" />
    }
  ];

  const testimonies = [
    {
      id: 1,
      quote: "The service officers at Kearny Legion helped me appeal a denied VA medical claim. Their support literally saved my household from rent crisis.",
      author: "Sgt. Marcus Vance",
      service: "OEF U.S. Army Veteran"
    },
    {
      id: 2,
      quote: "Sponsoring my son for Boys State was a defining moment for his discipline. He's now studying political sciences with high honor.",
      author: "Helen Henderson",
      service: "Kearny High School parent"
    }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Patriotic Intense Hero Section with Custom Vector Grid */}
      <section className="relative overflow-hidden bg-slate-950 pt-20 pb-24 border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950/90 to-slate-950"></div>
        
        {/* Flag Accent Stripes overlay */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex">
          <div className="flex-1 bg-blue-700"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-red-600"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-red-600"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase tracking-widest">
              🇺🇸 Serving Those Who Served Since 1919
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
          >
            HONORING THE PAST • <span className="bg-gradient-to-r from-red-500 via-amber-400 to-blue-500 bg-clip-text text-transparent">SERVING THE FUTURE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Welcome to Kearny Legion Post-99 (KearnyLegion.org). We are a dedicated American military veteran family standing in solid camaraderie to support local servicemembers, fund youth mentoring, and lead local volunteer outreach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setActiveTab("membership")}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-lg shadow-xl shadow-amber-400/10 transition-all transform hover:-translate-y-0.5"
            >
              Join the Legion
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-lg border border-white/10 transition-all"
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3.5 rounded-lg border border-red-500/20 transition-all shadow-lg"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Brief Welcome & Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border-l-4 border-amber-500 pl-4 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Chartered by Congress, Grounded in Jersey Community
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              The American Legion was chartered by Congress in 1919 of World War I veterans and became one of the most powerful, influential nonprofit agencies in Washington. 
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Our local Kearny Legion post stands as a dedicated community shelter. We run programs to raise patriotic pride (Americanism), secure state aid for veterans suffering from service injuries, and provide clean platforms to celebrate local school student delegations.
            </p>
            <button
              onClick={() => setActiveTab("about")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group"
            >
              <span>Read About Local Post-99 History</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-slate-900/40 p-6 rounded-2xl border border-white/5 shadow-inner">
            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 hover:border-amber-500/10 transition-all text-center">
              <span className="block text-3xl font-black text-amber-400">100+</span>
              <span className="text-xs font-medium text-slate-400 mt-1 uppercase">Local Vets Served</span>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 hover:border-amber-500/10 transition-all text-center">
              <span className="block text-3xl font-black text-red-500">12+</span>
              <span className="text-xs font-medium text-slate-400 mt-1 uppercase">Sponsorship Camps</span>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 hover:border-amber-500/10 transition-all text-center">
              <span className="block text-3xl font-black text-blue-500">100%</span>
              <span className="text-xs font-medium text-slate-400 mt-1 uppercase">Veteran Volunteers</span>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 hover:border-amber-500/10 transition-all text-center">
              <span className="block text-3xl font-black text-white">1919</span>
              <span className="text-xs font-medium text-slate-400 mt-1 uppercase">Legion Origin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Three pillars of the Legion */}
      <section className="bg-slate-900/20 py-16 border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Camaraderie & Action</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Our Core Pillars of Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((p, i) => (
              <div 
                key={i}
                className="bg-slate-950 p-6 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all flex flex-col gap-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scheduled Events brief info */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-3">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Get Involved</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Upcoming Post Activities</h2>
          </div>
          <button
            onClick={() => setActiveTab("events")}
            className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1"
          >
            <span>View Complete Post Calendar</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredEvents.slice(0, 2).map((evt) => (
            <div 
              key={evt.id}
              className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="text-[10px] text-amber-450 uppercase tracking-widest font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {evt.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {evt.date} • {evt.time}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{evt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {evt.description}
                </p>
                <div className="text-xs text-slate-400">
                  📍 {evt.location}
                </div>
              </div>
              <button
                onClick={() => setActiveTab("events")}
                className="mt-6 text-xs text-white hover:text-amber-400 font-bold inline-flex items-center gap-1"
              >
                <span>Register to Attend</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials from veterans/members */}
      <section className="bg-slate-900/10 py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Shared Stories</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">What Local Vets are Saying</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonies.map((t) => (
              <div 
                key={t.id}
                className="bg-slate-950 p-6 rounded-2xl border border-white/5 shadow-md flex flex-col justify-between relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-sm flex items-center justify-center font-bold text-amber-400 border border-white/10 shrink-0">
                    🎖️
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{t.author}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
