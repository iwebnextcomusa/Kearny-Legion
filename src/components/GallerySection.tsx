import React, { useState } from "react";
import { GALLERY_IMAGES } from "../data";
import { Image, Camera, Eye, HeartHandshake } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "community" | "ceremony" | "outreach">("all");
  const [lightboxedImage, setLightboxedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "ceremony", label: "Ceremonies & Honors" },
    { id: "community", label: "Community Service" },
    { id: "outreach", label: "Outreach & Relief" },
  ] as const;

  const filteredPhotos = GALLERY_IMAGES.filter((img) => {
    return activeCategory === "all" || img.category === activeCategory;
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950 pb-16">
      {/* Mini Title Banner */}
      <section className="bg-gradient-to-b from-blue-950/40 via-slate-950/90 to-slate-950 py-16 text-center border-b border-amber-500/15">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          COMMUNITY PHOTO GALLERY
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-amber-500 font-mono tracking-widest uppercase">
          Camaraderie Captured • Honouring Fallen Comrades
        </p>
      </section>

      {/* Categories Tabs & Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        
        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-all tracking-wider ${
                activeCategory === cat.id
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-905 border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 bg-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => setLightboxedImage(photo)}
              className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-amber-500/20 hover:scale-[1.01] transition-all flex flex-col justify-between"
            >
              {/* Symbolic Vector Badge */}
              <div className="h-44 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center relative shadow-inner">
                <span className="text-5xl select-none filter drop-shadow">{photo.icon}</span>
                <span className="absolute bottom-3 right-3 text-[10px] text-slate-500 font-mono">
                  Post-99 Photo
                </span>
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 border-t border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500">
                  {photo.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal overlay */}
      {lightboxedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          onClick={() => setLightboxedImage(null)}
        >
          <div 
            className="w-full max-w-lg bg-slate-950 border border-amber-500/20 rounded-2xl overflow-hidden p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxedImage(null)}
              className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white p-1 rounded-md text-xs font-bold"
            >
              ✕
            </button>

            {/* Illustration */}
            <div className="h-64 bg-slate-900 rounded-xl flex items-center justify-center text-7xl select-none mb-6">
              {lightboxedImage.icon}
            </div>

            {/* Content info */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase block">
                {lightboxedImage.category} Archive
              </span>
              <h4 className="text-lg font-bold text-white leading-tight">
                {lightboxedImage.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lightboxedImage.description}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Camera className="w-4 h-4 text-slate-500" />
                <span>Kearny Post-99 • Official Press Release Copy</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
