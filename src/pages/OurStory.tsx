import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Heart,
  Quote,
  Sparkles,
  Award,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

const storyMilestones = [
  {
    num: '01',
    year: 'MAY 2017',
    tag: 'THE BEGINNING',
    title: 'Hiding In Plain Sight',
    description:
      'Mitchell Slater died by suicide at just 15 years old. He seemed vibrant and healthy, but like many youths, he was quietly camouflaging his deepest personal struggles.',
    icon: Compass,
    accent: '#e07a5e',
  },
  {
    num: '02',
    year: 'THE MOVEMENT',
    tag: 'TURNING GRIEF INTO ACTION',
    title: 'Why We Wear Camo',
    description:
      'Mitchell loved his camo hoodies. In his memory, wearing camouflage every Friday transformed from everyday fashion into our bold, visual declaration that mental health must never be hidden.',
    icon: Heart,
    accent: '#82b29a',
  },
  {
    num: '03',
    year: 'TODAY & BEYOND',
    tag: 'LASTING LEGACY',
    title: 'Tangible Community Impact',
    description:
      'What began as family and friends remembering Mitchell has expanded into high school scholarships, British Columbia-wide CMHA handbooks, and annual memorial rides.',
    icon: Sparkles,
    accent: '#a8d5ba',
  },
];

const OurStory: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. EDITORIAL BREADCRUMB */}
      <Breadcrumb
        subtitle="THE MITCHELL SLATER LEGACY"
        title="Our Story"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* 2. MAIN MEMORIAL & STORY SECTION (Rich Layered Background with Map, Topographic Rings & Community Hands) */}
      <section className="py-20 sm:py-28 bg-[#f5f4ee] relative overflow-hidden border-b border-gray-200/70">
        {/* Layer A: Dot-Matrix Global Map Vector (No BG Object) */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "url('/img/gray_map_bg.png')",
            backgroundSize: '1100px auto',
          }}
        />

        {/* Layer B: Topographic Elevation Rings (round_shape.png No-BG Object) in corners */}
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

        {/* Layer C: Subtle Ambient Mesh Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#82b29a]/12 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#e07a5e]/10 blur-[100px] pointer-events-none" />

        {/* Layer D: Technical Coordinates Crosshairs (Editorial Brand Aesthetics) */}
        <div className="absolute top-10 left-12 hidden xl:flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
          <span className="text-[#82b29a] font-bold">+</span>
          <span>LAT 49°15'N • LON 123°06'W</span>
          <span className="text-gray-300">•</span>
          <span>BRITISH COLUMBIA</span>
        </div>

        {/* Layer E: Authentic Community Hands Watermark Along Bottom (about_bg_1.png) */}
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
            {/* Left Column: Authentic Mitchell Story Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Origin Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
                <span>OUR ORIGIN & PURPOSE</span>
              </div>

              {/* Headline */}
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-[46px] font-extrabold uppercase text-[#1c2130] leading-[1.1] tracking-tight">
                #Camo Friday Was Founded In Memory Of Mitchell Slater
              </h2>

              {/* Memorial Highlight Box with Glass Effect & Accent Border */}
              <div className="border-l-4 border-[#e07a5e] pl-4 sm:pl-5 py-3 bg-white/70 backdrop-blur-md rounded-r-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c95b3d] uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Delta, British Columbia • May 26, 2017</span>
                </div>
                <h4 className="font-['Rajdhani'] text-base sm:text-lg font-bold text-[#1c2130] uppercase tracking-wide leading-snug">
                  Mitchell died by suicide at the age of 15
                </h4>
              </div>

              {/* Narrative Copy */}
              <div className="space-y-4 text-[#525966] leading-relaxed text-[16px] sm:text-[17px] font-sans">
                <p>
                  He didn’t have a history of depression. He didn’t have a history of anxiety. He didn’t have a history of suicide attempts. Mitchell seemed like a happy and healthy teenager — but, in addition to wearing camo clothing on the regular, he was also camouflaging his deepest personal struggle.
                </p>
                <p>
                  What Mitchell didn’t know was that his clothing of choice would change the face of mental health forever. Mitchell’s friends and family are committed to making his life a caveat for change, and #CamoFriday is our collective mission to bring mental illness out from the shadows into open, life-saving conversations.
                </p>
                <p>
                  Today, we wear camo every Friday so no one has to struggle in silence. Together, we bring mental health out from the shadows into open, life-saving conversations across schools, sports arenas, and communities.
                </p>
              </div>

              {/* Founder Signature Block & Quick Links */}
              <div className="pt-6 border-t border-gray-300/80 flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-3.5 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-200/80 shadow-xs">
                  <img
                    src="/img/founder_img.png"
                    alt="CamoFriday Movement"
                    className="h-11 w-auto object-contain"
                  />
                  <div>
                    <h4 className="font-['Rajdhani'] font-bold text-lg text-[#1c2130] uppercase leading-tight">
                      Rachel Slater
                    </h4>
                    <p className="text-xs text-[#82b29a] font-bold uppercase tracking-wider font-mono">
                      Founder & Mitchell's Mother
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/our-work"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1b1e2c] hover:bg-[#82b29a] text-white hover:text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <span>Our Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/our-handbook"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-black font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#82b29a]" />
                    <span>Handbook</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Mitchell Portrait Frame with Floating Luxury Objects */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Floating Aesthetic Glass Object 1 (Top Left Badge) */}
                <div className="absolute -top-5 -left-5 z-20 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] border border-gray-200/90 text-[11px] font-mono uppercase font-bold text-[#82b29a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-ping" />
                  <span>Mitchell Slater</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 font-normal">2002–2017</span>
                </div>

                {/* Floating Aesthetic Glass Object 2 (Right Edge Compass Ribbon) */}
                <div className="absolute top-1/3 -right-6 z-20 hidden sm:flex items-center gap-2 bg-[#1b1e2c]/95 text-white backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 text-[11px] font-mono">
                  <Heart className="w-3.5 h-3.5 text-[#e07a5e] fill-[#e07a5e]" />
                  <span className="font-bold tracking-wider uppercase">Always Remembered</span>
                </div>

                {/* Portrait Card */}
                <div className="bg-white p-4 sm:p-5 pb-6 sm:pb-7 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-gray-200/90 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.25)] relative">
                  <div className="overflow-hidden rounded-2xl bg-[#eef0ea] aspect-[3/4] relative">
                    <img
                      src="/img/Mitchell.png"
                      alt="Mitchell Slater"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="font-['Rajdhani'] font-bold text-base uppercase tracking-wider block drop-shadow-md">
                        In Loving Memory
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="font-['Rajdhani'] font-extrabold text-xl text-[#1c2130] uppercase tracking-wider block">
                      Mitchell Slater
                    </span>
                    <span className="text-xs text-gray-500 font-mono tracking-wider block mt-0.5">
                      Beloved Son, Brother & Friend
                    </span>
                  </div>
                </div>

                {/* Legacy Pill Badge Underneath */}
                <div className="mt-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1b1e2c] flex items-center justify-center text-[#82b29a] font-bold text-sm shrink-0 shadow-inner">
                    #
                  </div>
                  <div className="flex-1">
                    <div className="font-['Rajdhani'] font-extrabold text-xs uppercase tracking-wider text-[#1c2130] leading-tight">
                      The Mitchell Legacy
                    </div>
                    <div className="text-[11px] text-[#5e6573] font-medium leading-tight mt-0.5">
                      Est. 2017 • Break the silence, wear camo
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#82b29a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORY JOURNEY: THE EVOLUTION OF CAMO FRIDAY (Cinematic BC Mountain Forest Background + Topographic Rings) */}
      <section className="py-24 sm:py-32 bg-[#0c0f16] text-white relative overflow-hidden border-b border-white/10">
        {/* Layer 1: British Columbia Misty Mountain Pine Sunrise Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/story_nature_bg.jpg)' }}
        />

        {/* Layer 2: Editorial Dark Frosted Vignette for 100% Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f16]/92 via-[#0c0f16]/82 to-[#0c0f16]/96 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0c0f16]/40 backdrop-blur-[2px] pointer-events-none" />

        {/* Layer 3: Topographic Contour Watermark (round_shape.png No-BG Object) */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none opacity-[0.08] invert rotate-90"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-[0.08] invert"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer 4: Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#82b29a]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e07a5e]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
              <span>HOW A TRAGEDY BECAME A CATALYST</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              The Evolution Of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82b29a] via-[#a8d5ba] to-[#faf7e3]">
                Camo Friday
              </span>
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              From personal heartbreak in British Columbia to a growing grassroots movement empowering youths and educators.
            </p>
          </div>

          {/* 3 Luxury Frosted Milestone Cards with Subtle Gradient Borders & Micro-numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyMilestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(130,178,154,0.35)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Big Background Number Watermark */}
                  <span className="absolute -top-4 -right-2 text-7xl font-mono font-black text-gray-900/[0.04] pointer-events-none select-none">
                    {item.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-[#1b1e2c] text-[#82b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#82b29a] tracking-wider uppercase px-3 py-1 rounded-full bg-[#82b29a]/10 border border-[#82b29a]/20">
                        {item.year}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#82b29a] block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>MILESTONE {item.num}</span>
                    <span className="w-8 h-0.5 bg-gray-200 group-hover:w-14 group-hover:bg-[#82b29a] transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S HEARTFELT PLEDGE (Atmospheric Community Photo + Frosted Obsidian Slate Card) */}
      <section className="py-24 sm:py-32 bg-[#121620] relative overflow-hidden text-white border-t border-white/10">
        {/* Layer 1: Atmospheric Community Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20"
          style={{ backgroundImage: 'url(/img/cta_community_bg.jpg)' }}
        />

        {/* Layer 2: Deep Dark Frosted Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121620]/95 via-[#121620]/85 to-[#121620]/98 pointer-events-none" />

        {/* Layer 3: Topographic Contour Object (No-BG) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.06] invert"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer 4: Ambient Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-[#82b29a]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#e07a5e]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="bg-[#181d2a]/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/15">
            {/* Giant Watermark Quote Icon in Background */}
            <Quote className="absolute -bottom-6 -right-6 w-52 h-52 text-white/[0.04] pointer-events-none rotate-12" />

            {/* Circular Revolving Seal Badge / Stamp (Senior UI/UX Touch) */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#82b29a]">
              <Award className="w-3 h-3 text-[#82b29a]" />
              <span>EST. 2017 • BRITISH COLUMBIA</span>
            </div>

            <div className="relative z-10 space-y-6 text-center">
              <Quote className="w-12 h-12 text-[#82b29a] mx-auto opacity-90 drop-shadow-md" />

              <blockquote className="font-['Rajdhani'] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide leading-relaxed text-white max-w-2xl mx-auto drop-shadow-sm">
                "If Camo Friday can educate just one person about mental illness, save one parent the grief I have felt, spare one child the loss of a sibling... that success will be immeasurable to me."
              </blockquote>

              <div className="pt-2">
                <p className="font-['Rajdhani'] font-extrabold text-xl text-[#82b29a] uppercase tracking-wider">
                  Rachel Slater
                </p>
                <p className="text-xs text-gray-400 font-mono tracking-widest uppercase mt-0.5">
                  Founder & Mitchell's Mother
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/our-work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <span>See Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full border border-white/20 transition-all hover:-translate-y-0.5"
                >
                  <Heart className="w-3.5 h-3.5 text-[#e07a5e]" />
                  <span>Support The Mission</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
