import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  parent?: { label: string; url: string };
  bgImage?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  subtitle,
  parent,
  bgImage = '/img/breadcrumb_story_bg.jpg',
}) => {
  return (
    <section className="relative py-28 sm:py-36 text-white text-center overflow-hidden border-b border-white/10 bg-[#0c0f16]">
      {/* Layer 1: The Blended Scenic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Layer 2: Subtle Editorial Vignette to guarantee the camouflage pattern remains crisp & prominent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f16]/50 via-black/25 to-[#0c0f16]/60 pointer-events-none" />

      {/* Layer 3: Topographic Elevation Rings (No-BG Object) */}
      <div
        className="absolute -top-20 -right-20 w-[450px] h-[450px] pointer-events-none opacity-[0.07] invert rotate-45"
        style={{
          backgroundImage: "url('/img/round_shape.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] pointer-events-none opacity-[0.06] invert -rotate-12"
        style={{
          backgroundImage: "url('/img/round_shape.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Layer 4: Ambient Radial Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#82b29a]/18 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#e07a5e]/12 blur-3xl pointer-events-none" />

      {/* Layer 5: Technical Brand Crosshairs */}
      <div className="absolute top-8 left-10 hidden lg:flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
        <span className="text-[#82b29a] font-bold">+</span>
        <span>BRITISH COLUMBIA • EST. 2017</span>
      </div>
      <div className="absolute top-8 right-10 hidden lg:flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
        <span>LAT 49°15'N • LON 123°06'W</span>
        <span className="text-[#82b29a] font-bold">+</span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 z-10 space-y-3">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
            <span>{subtitle}</span>
          </div>
        )}

        <h1 className="font-['Rajdhani'] text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] leading-tight">
          {title}
        </h1>

        {parent && (
          <div className="flex justify-center items-center gap-2 mt-4 text-xs sm:text-sm font-mono uppercase tracking-wider text-gray-300 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 w-fit mx-auto shadow-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link to={parent.url} className="hover:text-white transition-colors">
              {parent.label}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#82b29a] font-bold">{title}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Breadcrumb;

