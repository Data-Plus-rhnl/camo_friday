import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import {
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  Navigation,
  Heart,
  Sparkles,
} from 'lucide-react';

const rideHighlights = [
  {
    num: '01',
    title: 'Memorial Procession',
    subtitle: 'HONOURING MITCHELL',
    description:
      'A powerful community cruise through British Columbia with drivers and riders sporting camo, visually breaking the silence on mental health.',
    icon: Navigation,
  },
  {
    num: '02',
    title: 'Ending The Stigma',
    subtitle: 'OPEN CONVERSATIONS',
    description:
      'Creating an open, supportive space where youth, parents, and friends can talk about grief, anxiety, and depression without judgment.',
    icon: Heart,
  },
  {
    num: '03',
    title: 'Youth Fund Initiatives',
    subtitle: 'DIRECT LOCAL IMPACT',
    description:
      'All proceeds and donations from the ride fund graduating high school scholarships and free CMHA mental health handbooks across BC.',
    icon: Sparkles,
  },
];

const RideForMitch: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. EDITORIAL BREADCRUMB */}
      <Breadcrumb
        subtitle="ANNUAL MEMORIAL GATHERING"
        title="Ride For Mitch"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* 2. MAIN EVENT SHOWCASE (Layered Background with Map, Topographic Rings & Community Hands) */}
      <section className="py-20 sm:py-28 bg-[#f5f4ee] relative overflow-hidden border-b border-gray-200/70">
        {/* Layer A: Dot-Matrix Map */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "url('/img/gray_map_bg.png')",
            backgroundSize: '1100px auto',
          }}
        />

        {/* Layer B: Topographic Elevation Rings in Corners */}
        <div
          className="absolute -top-20 -right-20 w-[460px] h-[460px] pointer-events-none opacity-[0.06] rotate-45"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] pointer-events-none opacity-[0.05] -rotate-12"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer C: Ambient Mesh Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#82b29a]/12 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#e07a5e]/10 blur-[100px] pointer-events-none" />

        {/* Layer D: Technical Coordinates */}
        <div className="absolute top-10 left-12 hidden xl:flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
          <span className="text-[#82b29a] font-bold">+</span>
          <span>ANNUAL MEMORIAL RIDE • BRITISH COLUMBIA</span>
          <span className="text-gray-300">•</span>
          <span>EST. MAY 26, 2021</span>
        </div>

        {/* Layer E: Authentic Community Hands Watermark Along Bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-64 sm:h-72 lg:h-80 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/img/about_bg_1.png')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom center',
            backgroundSize: 'auto 260px',
            opacity: 0.22,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Dodge Charger Silhouette Showcase Card with Floating Glass Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                {/* Floating Aesthetic Badge 1 (Top Left) */}
                <div className="absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 text-[11px] font-mono uppercase font-bold text-[#82b29a] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
                  <span>Annual Ride For Mitch</span>
                </div>

                {/* Floating Aesthetic Badge 2 (Right Edge) */}
                <div className="absolute top-1/3 -right-5 z-20 hidden sm:flex items-center gap-2 bg-[#1b1e2c] text-white backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 text-[11px] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5e]" />
                  <span className="font-bold tracking-wider uppercase">BC Scenic Route</span>
                </div>

                {/* Car Showcase Obsidian Container */}
                <div className="bg-[#151924] p-6 sm:p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-white/10 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5">
                  {/* Subtle Topographic contour in card background */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10 invert"
                    style={{
                      backgroundImage: "url('/img/round_shape.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  <div className="relative z-10 py-6 sm:py-8 flex items-center justify-center">
                    <img
                      src="/img/about_section_img-ride.png"
                      alt="Ride for Mitch"
                      className="w-full h-auto object-contain max-h-48 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 text-center relative z-10">
                    <span className="font-['Rajdhani'] font-extrabold text-xl text-white uppercase tracking-wider block">
                      2022 Ride For Mitch
                    </span>
                    <span className="text-xs text-[#82b29a] font-mono tracking-widest uppercase block mt-1">
                      Honouring Mitchell Slater • Always in Our Hearts
                    </span>
                  </div>
                </div>

                {/* Quick Info Pill Underneath */}
                <div className="mt-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-md flex items-center justify-between gap-3 text-xs font-mono text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#82b29a]" />
                    <span>Annual Event</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>May 26 Memorial</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#426a57] font-bold">Free Participation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Action Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
                <span>COMMUNITY EVENT INITIATIVE</span>
              </div>

              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase text-[#1c2130] leading-[1.12] tracking-tight">
                Our First Annual Ride For Mitch Was Held On May 26
              </h2>

              <div className="border-l-4 border-[#82b29a] pl-4 sm:pl-5 py-3.5 bg-white/75 backdrop-blur-md rounded-r-2xl shadow-sm border border-gray-100">
                <p className="font-sans text-sm sm:text-base font-semibold text-[#28533e] leading-relaxed">
                  "Mental Health awareness has never been more important, and the need for community support is crucial. The Annual Ride for Mitch brings people together across British Columbia to ride for all those who struggle with mental health."
                </p>
              </div>

              <div className="space-y-4 text-[#525966] leading-relaxed text-[16px] sm:text-[17px] font-sans">
                <p>
                  Join us in honouring Mitchell's vibrant spirit and passion for cars and camo. What started as an intimate gathering of close family and friends has evolved into an annual convoy of sports cars, motorcycles, and community vehicles driving across scenic British Columbia roads.
                </p>
                <p>
                  Every participant wears camouflage to spark conversations and show anyone struggling that they are not alone. Whether you're driving in the procession or cheering from the route, your presence makes a difference.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.app.goo.gl/fLPA5zr95ZAxU67U9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1b1e2c] hover:bg-[#82b29a] text-white hover:text-[#0c0f16] font-['Rajdhani'] font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4 text-[#82b29a]" />
                  <span>View Ride Route</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href="https://www.facebook.com/camofridays/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xs"
                >
                  <span>Facebook Event Details</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#82b29a]" />
                </a>

                <a
                  href="mailto:rideformitch@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 bg-white/80 border border-gray-200 px-4 py-3 rounded-full"
                >
                  <Mail className="w-3.5 h-3.5 text-[#82b29a]" />
                  <span>rideformitch@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENT HIGHLIGHTS & COMMUNITY PURPOSE (Cinematic Background + Topographic Rings) */}
      <section className="py-24 sm:py-32 bg-[#0c0f16] text-white relative overflow-hidden border-b border-white/10">
        {/* Layer 1: Atmospheric Nature Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/ride_for_mitch_purpose_bg.jpg)' }}
        />

        {/* Layer 2: Editorial Dark Frosted Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f16]/92 via-[#0c0f16]/82 to-[#0c0f16]/96 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0c0f16]/40 backdrop-blur-[2px] pointer-events-none" />

        {/* Layer 3: Topographic Contour Object */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-[0.08] invert"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer 4: Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#82b29a]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e07a5e]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
              <span>THE PURPOSE BEHIND THE ENGINES</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              Why We Gather & Ride
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Every turn, checkpoint, and kilometre is dedicated to remembering Mitchell and preventing youth suicide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rideHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(130,178,154,0.35)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                >
                  <span className="absolute -top-3 -right-2 text-7xl font-mono font-black text-gray-900/[0.04] pointer-events-none select-none">
                    {item.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-[#1b1e2c] text-[#82b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#82b29a] tracking-wider uppercase px-3 py-1 rounded-full bg-[#82b29a]/10 border border-[#82b29a]/20">
                        PILLAR {item.num}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#82b29a] block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>ANNUAL RIDE</span>
                    <span className="w-8 h-0.5 bg-gray-200 group-hover:w-16 group-hover:bg-[#82b29a] transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RideForMitch;

