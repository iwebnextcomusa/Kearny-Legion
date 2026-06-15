import React, { useState } from "react";
import { NEWS_POSTS } from "../data";
import { NewsPost } from "../types";
import { Calendar, User, Search as SearchIcon, MailCheck, Bell, Sparkles, BookOpen } from "lucide-react";

export default function NewsSection() {
  const [newsSearch, setNewsSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof NEWS_POSTS[0] | null>(null);
  
  // Newsletter Form State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const filteredPosts = NEWS_POSTS.filter((post) => {
    return post.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
           post.excerpt.toLowerCase().includes(newsSearch.toLowerCase()) ||
           post.content.toLowerCase().includes(newsSearch.toLowerCase());
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Title Banner */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          NEWS, ALERTS & ANNOUNCEMENTS
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Hudson County Vet Bulletins & Legislative Progress
        </p>
      </section>

      {/* Main Core: News List & Newsletter Box */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Side: Search & Blogs */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Search bar for posts */}
          <div className="relative">
            <SearchIcon className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search news updates, guides, and policies..."
              value={newsSearch}
              onChange={(e) => setNewsSearch(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Blogs Grid */}
          <div className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 bg-slate-905 border border-white/5 rounded-xl">
                <p className="text-slate-400 text-sm">No updates matched your query.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-slate-900/30 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 font-mono">
                    <span className="bg-red-500/10 text-red-400 px-2.5 py-0.5 rounded border border-red-500/15 text-[10px] font-bold uppercase">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>By {post.author}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold mt-2"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Briefing</span>
                  </button>
                </article>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Newsletter Signup */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-amber-500/10 shadow-xl space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight">Post Newsletter</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Join our local Hudson County email circle to get bi-weekly notifications about public barbecues, veterans workshops, and flag protocol programs.
                </p>
              </div>
            </div>

            {newsletterSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center space-y-1">
                <MailCheck className="w-6 h-6 text-green-400 mx-auto" />
                <h5 className="text-sm font-bold text-white">Subscription Processed!</h5>
                <p className="text-[11px] text-slate-300">
                  Thank you! We will email you our next bulletin updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs uppercase shadow-md"
                >
                  Subscribe to Alerts
                </button>
              </form>
            )}
          </div>

          <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500">Service Hours</span>
            <strong className="text-xs font-bold text-white block">Post-99 Assembly Hours:</strong>
            <ul className="text-xs text-slate-400 space-y-1 leading-relaxed">
              <li>• Veteran Lounge: Monday - Saturday (4 PM - 10 PM)</li>
              <li>• Service Office Claims: Thursdays (10 AM - 2 PM)</li>
              <li>• Public Assembly: Standard Scheduled Ceremonies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expanded Article Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="w-full max-w-xl bg-slate-950 border border-amber-500/20 rounded-2xl overflow-hidden p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white p-1 rounded-md text-xs font-bold"
            >
              ✕
            </button>

            <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 font-mono">
                <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/15 font-bold uppercase">
                  {selectedPost.category}
                </span>
                <span>{selectedPost.date}</span>
                <span>By {selectedPost.author}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {selectedPost.title}
              </h4>

              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap pt-2 border-t border-white/5 space-y-3">
                <p className="italic text-slate-400 mb-4 font-medium">"{selectedPost.excerpt}"</p>
                <p>{selectedPost.content}</p>
                <p className="text-xs text-slate-400 font-normal">
                  Thank you for keeping compiled with the official Kearny Post newsletters. Direct any questions regarding this publication/announcement to Commander Ramon Rivera at <a href="mailto:ramon.rivera1987@gmail.com" className="text-amber-400 underline">ramon.rivera1987@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
