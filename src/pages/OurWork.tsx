import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Navigation,
} from 'lucide-react';

const initiatives = [
  {
    num: '01',
    title: 'Ride For Mitch',
    subtitle: 'ANNUAL MEMORIAL PROCESSION',
    description:
      'Our signature annual cruise through British Columbia bringing community drivers and riders together in camo to raise awareness for youth mental health.',
    image: '/img/event/event_thumb_01.png',
    link: '/ride-for-mitch',
    actionText: 'Ride Details',
    icon: Navigation,
  },
  {
    num: '02',
    title: 'Our Handbook',
    subtitle: 'FREE CMHA RESOURCE GUIDE',
    description:
      'Developed with the Canadian Mental Health Association, a 24-page actionable guide providing scripts, warning signs, and crisis lifelines for families and schools.',
    image: '/img/event/event_thumb_02.png',
    link: '/our-handbook',
    actionText: 'Explore Handbook',
    icon: BookOpen,
  },
  {
    num: '03',
    title: 'Mitchell Slater Scholarship',
    subtitle: 'GIVING BACK TO B.C. YOUTH',
    description:
      'Annual non-academic post-secondary grants for graduating BC high school seniors touched by mental illness, accepting written, artistic, and multimedia submissions.',
    image: '/img/event/event_thumb_03.png',
    link: '/scholarship',
    actionText: 'Scholarship Details',
    icon: GraduationCap,
  },
];

const OurWork: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. EDITORIAL BREADCRUMB */}
      <Breadcrumb
        subtitle="TURNING AWARENESS INTO ACTION"
        title="Our Work"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* 2. MOVEMENT NARRATIVE & IMPACT (Layered Background with Map, Topographic Rings & Community Hands) */}
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
          <span>COMMUNITY OUTREACH • BRITISH COLUMBIA</span>
          <span className="text-gray-300">•</span>
          <span>INITIATIVES & PROGRAMS</span>
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
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
              <span>THE MOVEMENT IN MOTION</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#1c2130] tracking-tight leading-tight">
              Bringing Mental Health Out From The Shadows
            </h2>

            <div className="space-y-4 text-[#525966] leading-relaxed text-[16px] sm:text-[17px] font-sans text-left bg-white/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm">
              <p>
                #CamoFriday started as a group of family and friends mourning the loss of their son, brother, boyfriend, grandson, and friend Mitchell, who we lost to suicide on May 26, 2017. Since Mitchell loved wearing his camo hoodies and pants, we all began wearing camo as a collective symbol of love and memory.
              </p>
              <p>
                From there, supporters across schools, hockey teams, workplaces, and neighborhoods joined our ranks. What began as a visual tribute quickly grew into a provincial movement committed to breaking silence, dispelling stigma, and equipping youth with life-saving resources.
              </p>
              <p>
                Today, our work spans three core pillars: providing educational crisis handbooks, funding annual graduating scholarships, and organizing community awareness drives.
              </p>
            </div>

            {/* Two Images Side by Side with Floating Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-200/90 bg-white p-3">
                <div className="overflow-hidden rounded-2xl h-72 sm:h-80 relative">
                  <img
                    src="/img/causes/causes_thumb_005.png"
                    alt="Camo Friday Movement"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider">
                    Community Gathering
                  </div>
                </div>
              </div>

              <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-200/90 bg-white p-3">
                <div className="overflow-hidden rounded-2xl h-72 sm:h-80 relative">
                  <img
                    src="/img/causes/causes_thumb_006.png"
                    alt="Camo Friday Awareness"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider">
                    Spreading The Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE INITIATIVES (Atmospheric Dark Frosted Cards) */}
      <section className="py-24 sm:py-32 bg-[#0c0f16] text-white relative overflow-hidden border-b border-white/10">
        {/* Layer 1: Atmospheric Nature Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/our_work_initiatives_bg.jpg)' }}
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
              <span>CORE INITIATIVES</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              Our 3 Pillars Of Impact
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              From memorial rides to educational literature and scholarships, explore how we serve the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(130,178,154,0.35)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#82b29a] font-mono text-[11px] font-bold uppercase tracking-wider">
                      INITIATIVE {item.num}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#82b29a] uppercase tracking-wider font-bold">
                        <Icon className="w-4 h-4" />
                        <span>{item.subtitle}</span>
                      </div>

                      <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130]">
                        {item.title}
                      </h3>

                      <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        to={item.link}
                        className="inline-flex items-center justify-between w-full px-5 py-3 bg-[#1b1e2c] hover:bg-[#82b29a] text-white hover:text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm"
                      >
                        <span>{item.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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

export default OurWork;

