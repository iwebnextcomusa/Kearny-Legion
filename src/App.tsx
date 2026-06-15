import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import EventsSection from "./components/EventsSection";
import MembershipSection from "./components/MembershipSection";
import GallerySection from "./components/GallerySection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import MemberPortalModal from "./components/MemberPortalModal";

import { UPCOMING_EVENTS, NEWS_POSTS } from "./data";
import { ArrowUp, Search as SearchIcon, Calendar, BookOpen, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Member Portal state
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [portalUser, setPortalUser] = useState<{ name: string; isLoggedIn: boolean } | null>(null);

  // Scroll to top visibility state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Perform active cross-site search results computation
  const foundEvents = searchTerm
    ? UPCOMING_EVENTS.filter(
        (evt) =>
          evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          evt.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const foundNews = searchTerm
    ? NEWS_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const renderActiveSection = () => {
    // If search term is active, temporarily intercept render with full structured Search Results
    if (searchTerm.trim().length > 0) {
      return (
        <div className="font-sans text-slate-100 bg-slate-950 pb-16 min-h-[50vh]">
          {/* Title banner */}
          <section className="bg-gradient-to-b from-blue-950/20 via-slate-950/90 to-slate-950 py-12 text-center border-b border-white/5">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase flex items-center justify-center gap-2">
              <SearchIcon className="w-6 h-6 text-amber-400" />
              <span>Search Highlights</span>
            </h2>
            <p className="mt-2 text-xs text-slate-400 font-mono uppercase">
              Found {foundEvents.length + foundNews.length} matches for "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-xs font-bold text-amber-400 hover:underline bg-white/5 px-3 py-1 rounded"
            >
              Clear Search Term
            </button>
          </section>

          <section className="mx-auto max-w-4xl px-4 py-8 space-y-8">
            {foundEvents.length === 0 && foundNews.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/30 border border-white/5 rounded-2xl flex flex-col items-center">
                <AlertCircle className="w-8 h-8 text-slate-500 mb-2" />
                <p className="text-slate-400 text-sm">No matches found across events or news announcements.</p>
              </div>
            ) : (
              <>
                {/* Mathing Events */}
                {foundEvents.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-red-500 pl-2">
                      Matching Events ({foundEvents.length})
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {foundEvents.map((e) => (
                        <div 
                          key={e.id}
                          onClick={() => {
                            setActiveTab("events");
                            setSearchTerm("");
                          }}
                          className="p-4 bg-slate-900/40 rounded-xl border border-white/10 hover:border-amber-400/20 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-1 text-[10px] text-amber-400 font-mono mb-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{e.date} • {e.time}</span>
                          </div>
                          <h4 className="text-base font-bold text-white">{e.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-1">{e.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mathing News / Bulletins */}
                {foundNews.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-red-500 pl-2">
                      Matching News Briefs ({foundNews.length})
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {foundNews.map((n) => (
                        <div
                          key={n.id}
                          onClick={() => {
                            setActiveTab("news");
                            setSearchTerm("");
                          }}
                          className="p-4 bg-slate-900/40 rounded-xl border border-white/10 hover:border-amber-400/20 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-1 text-[10px] text-amber-450 font-mono mb-1 text-slate-400">
                            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                            <span>{n.date}</span>
                          </div>
                          <h4 className="text-base font-bold text-white">{n.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-1">{n.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      );
    }

    switch (activeTab) {
      case "home":
        return <HomeSection setActiveTab={setActiveTab} featuredEvents={UPCOMING_EVENTS} />;
      case "about":
        return <AboutSection />;
      case "programs":
        return <ProgramsSection />;
      case "events":
        return <EventsSection />;
      case "membership":
        return <MembershipSection />;
      case "gallery":
        return <GallerySection />;
      case "news":
        return <NewsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection setActiveTab={setActiveTab} featuredEvents={UPCOMING_EVENTS} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between selection:rounded">
      
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSearchTerm(""); // reset search when tab transitions
        }}
        openPortal={() => setIsPortalOpen(true)}
        portalUser={portalUser}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Main Section Content */}
      <main className="flex-1 bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={searchTerm ? "search-results" : activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer credits and helpline */}
      <Footer setActiveTab={setActiveTab} />

      {/* Genuinely persistent chatbot widget (fixed bottom-right corner) */}
      <Chatbot />

      {/* Member Portal modal drawer */}
      <MemberPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        portalUser={portalUser}
        setPortalUser={setPortalUser}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-24 right-6 bg-slate-900 hover:bg-slate-850 text-amber-400 border border-amber-500/30 p-3 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-40"
          title="To Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
