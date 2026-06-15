import React, { useState } from "react";
import { Shield, Sparkles, User, Search, Landmark, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openPortal: () => void;
  portalUser: { name: string; isLoggedIn: boolean } | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  openPortal,
  portalUser,
  searchTerm,
  setSearchTerm,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programs", label: "Programs & Services" },
    { id: "events", label: "Events & Calendar" },
    { id: "membership", label: "Membership Info" },
    { id: "gallery", label: "Photo Gallery" },
    { id: "news", label: "News & Alerts" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-slate-950/95 backdrop-blur-md">
      {/* Top Patriotic Utility Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-red-900 to-blue-950 py-1.5 px-4 text-xs font-semibold text-white flex justify-between items-center whitespace-nowrap overflow-x-auto gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>Kearny Legion Post • Serving Veterans & Community Since 1919</span>
        </div>
        <div className="flex items-center gap-4 text-amber-400">
          <a href="tel:201-889-8759" className="hover:underline flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>201-889-8759</span>
          </a>
          <span>Active Duty, Reservists & Vets Welcome</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab("home")} 
            className="flex cursor-pointer items-center gap-3 group"
            id="header-nav-logo"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
              <Landmark className="w-6 h-6" />
              <div className="absolute -inset-1 rounded-full border border-red-500/40 animate-spin-slow"></div>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                KEARNY <span className="text-amber-400 font-normal">LEGION</span>
              </h1>
              <p className="text-xs font-medium tracking-widest text-[#cfaf6e] uppercase">
                American Legion Post, NJ
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-amber-400 text-slate-950 shadow-md font-semibold"
                    : "text-slate-200 hover:text-amber-400 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & Search */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative flex items-center">
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search events, news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-52 py-1.5 pl-3 pr-8 rounded-md bg-slate-900 border border-amber-500/30 text-white text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all mr-2"
                />
              )}
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                title="Search Site"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Portal Login Trigger */}
            <button
              onClick={openPortal}
              id="header-member-portal-btn"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md border border-blue-500/30 shadow-md group transition-all"
            >
              <User className="w-4 h-4 text-blue-300 group-hover:scale-110 transition-transform" />
              <span>{portalUser?.isLoggedIn ? portalUser.name : "Member Portal"}</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex xl:hidden gap-2">
            <button
              onClick={openPortal}
              className="p-2 text-amber-400 hover:text-white"
              title="Portal"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="xl:hidden border-t border-slate-900 bg-slate-950 px-4 pt-2 pb-6 space-y-2 font-sans transition-all animate-fade-in">
          {/* Mobile Search */}
          <div className="relative mb-4 flex items-center bg-slate-900 rounded-md border border-amber-500/20 px-3 py-1.5">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search Site..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-white text-xs focus:outline-none"
            />
          </div>

          {/* Navigation Links */}
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 rounded-md text-base font-semibold transition-all ${
                activeTab === item.id
                  ? "bg-amber-400 text-slate-950 font-bold"
                  : "text-slate-200 hover:bg-white/5 hover:text-amber-400"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Portal Entry */}
          <button
            onClick={() => {
              openPortal();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-blue-800 to-blue-900 py-3 text-white rounded-md border border-blue-600/30 text-sm font-bold"
          >
            <User className="w-4 h-4" />
            <span>{portalUser?.isLoggedIn ? `Portal: ${portalUser.name}` : "Access Member Portal"}</span>
          </button>
        </div>
      )}
    </header>
  );
}
