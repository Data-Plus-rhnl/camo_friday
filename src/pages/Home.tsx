import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Users, Heart, ShoppingBag } from 'lucide-react';

const bannerSlides = [
  {
    badge: 'COMMUNITY & SOLIDARITY',
    subtitle: 'VOLUNTEER',
    title: 'Together we can help change the face of mental health',
    description:
      'Join our grassroots community of riders, advocates, and volunteers dedicated to breaking the silence surrounding mental illness.',
    primaryBtn: { text: 'Become A Volunteer', link: '/become-volunteer' },
    secondaryBtn: { text: 'Our Story', link: '/our-story' },
    bg: '/img/banner/banner_img_2.png',
  },
  {
    badge: 'THE CORE MISSION',
    subtitle: 'OUR MISSION',
    title: 'To bring mental illness and those suffering from it out from their various forms of camouflage',
    description:
      'Every Friday we wear camouflage to make the invisible visible. Together, we foster honest conversations and community connection.',
    primaryBtn: { text: 'Read Our Story', link: '/our-story' },
    secondaryBtn: { text: 'Community Handbook', link: '/our-handbook' },
    bg: '/img/banner/banner_img_1.png',
  },
  {
    badge: 'DIRECT IMPACT',
    subtitle: 'DONATE & EMPOWER',
    title: 'Together we can help change the face of mental health',
    description:
      'Community donations directly fund post-secondary scholarships for graduating B.C. youth and local mental health resources.',
    primaryBtn: { text: 'Make A Donation', link: '/donate' },
    secondaryBtn: { text: 'View Impact', link: '/our-work' },
    bg: '/img/banner/banner_img_2.png',
  },
  {
    badge: 'SPREAD THE WORD',
    subtitle: 'WEAR THE CAMO',
    title: 'Participating in #CamoFriday is easy! Wear camo on Fridays and start the conversation.',
    description:
      'Spread the word in your school, gym, or workplace. Wearing camo is our collective signal that no one struggles alone.',
    primaryBtn: { text: 'Shop #CamoFriday Gear', link: '/shop' },
    secondaryBtn: { text: 'How It Works', link: '/our-story' },
    bg: '/img/banner/banner_img_1.png',
  },
];

const teamVolunteers = [
  { name: 'Rachel', role: "Founder & Mitchell's Mother", img: '/img/volantier/volunteer_1.png' },
  { name: 'Leanne', role: 'Board Member & Logistics', img: '/img/volantier/volunteer_2.png' },
  { name: 'Carrie', role: 'Community Outreach', img: '/img/volantier/volunteer_3.png' },
  { name: 'Tania', role: 'Events & Youth Advocacy', img: '/img/volantier/volunteer_4.png' },
  { name: 'Kathleen', role: 'Volunteer Coordinator', img: '/img/volantier/volunteer_6.png' },
  { name: 'Mike', role: 'Annual Ride Director', img: '/img/volantier/volunteer_7.png' },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [volunteerIndex, setVolunteerIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  // Auto advance banner slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--parallax-x', `${x.toFixed(1)}px`);
        sectionRef.current.style.setProperty('--parallax-y', `${y.toFixed(1)}px`);
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--parallax-x', '0px');
      sectionRef.current.style.setProperty('--parallax-y', '0px');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextVolunteers();
    } else if (diff < -45) {
      prevVolunteers();
    }
    setTouchStartX(null);
  };

  const nextVolunteers = () => {
    setVolunteerIndex((prev) => (prev + 1) % teamVolunteers.length);
  };

  const prevVolunteers = () => {
    setVolunteerIndex((prev) => (prev - 1 + teamVolunteers.length) % teamVolunteers.length);
  };

  const visibleVolunteers = Array.from({ length: 4 }, (_, i) =>
    teamVolunteers[(volunteerIndex + i) % teamVolunteers.length]
  );

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO BANNER SLIDER WITH BALANCED EDITORIAL SPLIT LAYOUT */}
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[680px] sm:min-h-[780px] lg:min-h-screen flex items-center bg-[#0c0f16] text-white overflow-hidden"
      >
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-out flex flex-col justify-center ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Interactive Parallax + Ken Burns Zooming Background Image */}
              <div
                className="absolute -inset-6 will-change-transform transition-transform duration-300 ease-out pointer-events-none"
                style={{
                  transform: 'translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)',
                }}
              >
                <div
                  key={`bg-zoom-${index}-${isActive}`}
                  className={`w-full h-full bg-cover bg-center will-change-transform ${
                    isActive ? 'animate-ken-burns' : 'scale-105'
                  }`}
                  style={{ backgroundImage: `url(${slide.bg})` }}
                />
              </div>

              {/* Exact Dot Pattern & Vignette Overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[2]"
                style={{
                  backgroundImage: 'url(/img/banner_overlay_01.png)',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* Cinematic gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/60 z-[1] pointer-events-none" />

              {/* Content Container with Balanced Editorial Split Grid */}
              <div className="relative max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-32 sm:pt-40 lg:pt-44 pb-36 sm:pb-40 lg:pb-48 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Mission Narrative & Typography */}
                  <div className="lg:col-span-7 xl:col-span-8 animate-fade-in-right-1">
                    {/* Refined Translucent Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase mb-4 sm:mb-5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline Typography in authentic cream #faf7e3 */}
                    <h1
                      style={{ color: '#faf7e3' }}
                      className={`font-['Rajdhani'] font-bold !text-[#faf7e3] uppercase tracking-wide drop-shadow-[2px_3px_8px_rgba(0,0,0,0.6)] ${
                        slide.title.length > 70
                          ? 'text-2xl sm:text-4xl lg:text-[46px] xl:text-[54px] leading-[1.06]'
                          : 'text-3xl sm:text-5xl lg:text-[68px] xl:text-[76px] leading-[0.95]'
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Mission Paragraph */}
                    <p className="mt-4 sm:mt-5 text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl font-sans leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Dual Action Pill Buttons */}
                    <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                      <Link
                        to={slide.primaryBtn.link}
                        className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#82b29a] hover:bg-[#92c6ae] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(130,178,154,0.35)] hover:shadow-[0_6px_22px_rgba(130,178,154,0.5)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        <span>{slide.primaryBtn.text}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to={slide.secondaryBtn.link}
                        className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[#faf7e3] hover:text-white font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] rounded-full transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>{slide.secondaryBtn.text}</span>
                      </Link>
                    </div>

                    {/* Integrated Slide Topic Selector - Safely positioned inside hero narrative column */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mr-1">
                        TOPICS:
                      </span>
                      {bannerSlides.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`group flex items-center gap-1.5 py-1 px-3 rounded-full transition-all text-xs font-['Rajdhani'] font-bold uppercase tracking-wider cursor-pointer ${
                            i === currentSlide
                              ? 'bg-white/20 text-[#faf7e3] border border-white/30 backdrop-blur-md shadow-sm'
                              : 'text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/5'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              i === currentSlide ? 'bg-[#82b29a] scale-125' : 'bg-gray-500'
                            }`}
                          />
                          <span>{s.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Floating Frosted Glass Movement Insight Card */}
                  <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
                    <div className="bg-[#0c0f16]/75 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 xl:p-8 max-w-sm ml-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#82b29a]" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 font-mono">
                            CAMOFRIDAY MOVEMENT
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#82b29a] tracking-widest font-mono">
                          EST. 2017
                        </span>
                      </div>

                      {/* Fact 1 - Authentic CMHA Statistic from Our Handbook */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-['Rajdhani'] text-4xl font-extrabold text-[#faf7e3] tracking-tight">
                              1 IN 5
                            </span>
                            <span className="text-xs font-semibold text-[#82b29a] uppercase tracking-wider">
                              In Canada
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 font-sans mt-0.5">
                            According to CMHA, 1 in 5 people will personally experience a mental health problem or illness each year.
                          </p>
                        </div>

                        <div className="h-[1px] bg-white/10" />

                        {/* Fact 2 - Core Grassroots Action from Original Site */}
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-['Rajdhani'] text-4xl font-extrabold text-[#faf7e3] tracking-tight">
                              EVERY FRIDAY
                            </span>
                            <span className="text-xs font-semibold text-[#82b29a] uppercase tracking-wider">
                              Wear Camo
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 font-sans mt-0.5">
                            A visual reminder across schools, gyms, and workplaces that no one has to camouflage their struggle alone.
                          </p>
                        </div>
                      </div>

                      {/* Slide Indicator & Controls inside the card */}
                      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-400">
                          <span className="text-[#faf7e3]">0{currentSlide + 1}</span>
                          <div className="w-16 h-1 bg-white/15 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#82b29a] transition-all duration-300"
                              style={{
                                width: `${((currentSlide + 1) / bannerSlides.length) * 100}%`,
                              }}
                            />
                          </div>
                          <span>0{bannerSlides.length}</span>
                        </div>

                        {/* Circular sleek buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 2. OVERLAPPING FEATURE CARDS (Elevated editorial cards with permanent tactile CTA) */}
      <section className="relative z-20 -mt-16 sm:-mt-24 lg:-mt-28">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 - Our Team */}
            <Link
              to="/our-team"
              className="group relative rounded-3xl overflow-hidden bg-[#141824] border border-white/20 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-8 min-h-[340px] sm:min-h-[380px]"
            >
              {/* Dual-Image Blended Background: Camo at rest -> Lifestyle photo emerges on hover */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 1. Underlying Human Lifestyle Photo (Emerges vividly on hover) */}
                <img
                  src="/img/feature/feature_team_lifestyle.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover scale-100 group-hover:scale-108 opacity-25 group-hover:opacity-95 transition-all duration-700 ease-out"
                />

                {/* 2. Camouflage Texture Layer (Prominent at rest, softens on hover) */}
                <div className="absolute inset-0 feature-overlay-1 opacity-100 group-hover:opacity-20 transition-opacity duration-700 ease-out">
                  <img
                    src="/img/feature/feature_01.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3. Bottom shadow vignette for consistent text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              </div>

              {/* Top Row: Badge & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-[#82b29a]">
                  <Users className="w-3.5 h-3.5 text-[#82b29a]" />
                  <span>FOUNDERS</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-[#0c0f16] group-hover:bg-[#82b29a] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 pt-16">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#faf7e3] font-mono block mb-1 drop-shadow-md">
                  MEET THE FOUNDERS
                </span>
                <h3
                  style={{ color: '#faf7e3' }}
                  className="font-['Rajdhani'] text-2xl sm:text-3xl font-extrabold !text-[#faf7e3] uppercase leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
                >
                  Our Team & Story
                </h3>
                <p className="text-xs sm:text-sm text-gray-100 font-sans mt-2 line-clamp-2 leading-relaxed drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
                  The riders, families, and organizers carrying Mitchell's legacy forward to end the stigma.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#faf7e3] group-hover:bg-[#82b29a] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md">
                  <span>Meet The Team</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 2 - Volunteer */}
            <Link
              to="/become-volunteer"
              className="group relative rounded-3xl overflow-hidden bg-[#141824] border border-white/20 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-8 min-h-[340px] sm:min-h-[380px]"
            >
              {/* Dual-Image Blended Background: Camo at rest -> Lifestyle photo emerges on hover */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 1. Underlying Volunteer Action Photo (Emerges vividly on hover) */}
                <img
                  src="/img/feature/feature_volunteer_lifestyle.jpg"
                  alt="Become a Volunteer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-108 opacity-25 group-hover:opacity-95 transition-all duration-700 ease-out"
                />

                {/* 2. Camouflage Texture Layer (Prominent at rest, softens on hover) */}
                <div className="absolute inset-0 feature-overlay-2 opacity-100 group-hover:opacity-20 transition-opacity duration-700 ease-out">
                  <img
                    src="/img/feature/feature_02.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3. Bottom shadow vignette for consistent text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              </div>

              {/* Top Row: Badge & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-[#faf7e3]">
                  <Heart className="w-3.5 h-3.5 text-red-400" />
                  <span>COMMUNITY</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-[#0c0f16] group-hover:bg-[#82b29a] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 pt-16">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#faf7e3] font-mono block mb-1 drop-shadow-md">
                  GRASSROOTS ACTION
                </span>
                <h3
                  style={{ color: '#faf7e3' }}
                  className="font-['Rajdhani'] text-2xl sm:text-3xl font-extrabold !text-[#faf7e3] uppercase leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
                >
                  Become A Volunteer
                </h3>
                <p className="text-xs sm:text-sm text-gray-100 font-sans mt-2 line-clamp-2 leading-relaxed drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
                  Join our squad at community rides, school talks, and help distribute awareness gear.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#faf7e3] group-hover:bg-[#82b29a] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md">
                  <span>Join The Squad</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 3 - Shop */}
            <Link
              to="/shop"
              className="group relative rounded-3xl overflow-hidden bg-[#141824] border border-white/20 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-8 min-h-[340px] sm:min-h-[380px]"
            >
              {/* Dual-Image Blended Background: Camo at rest -> Lifestyle photo emerges on hover */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 1. Underlying Outdoor Apparel Photo (Emerges vividly on hover) */}
                <img
                  src="/img/feature/feature_shop_lifestyle.jpg"
                  alt="Shop #CamoFriday"
                  className="w-full h-full object-cover scale-100 group-hover:scale-108 opacity-25 group-hover:opacity-95 transition-all duration-700 ease-out"
                />

                {/* 2. Camouflage Texture Layer (Prominent at rest, softens on hover) */}
                <div className="absolute inset-0 feature-overlay-3 opacity-100 group-hover:opacity-20 transition-opacity duration-700 ease-out">
                  <img
                    src="/img/feature/feature_03.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3. Bottom shadow vignette for consistent text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              </div>

              {/* Top Row: Badge & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-[#82b29a]">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#82b29a]" />
                  <span>OFFICIAL GEAR</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-[#0c0f16] group-hover:bg-[#82b29a] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 pt-16">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#faf7e3] font-mono block mb-1 drop-shadow-md">
                  100% SUPPORTS THE MISSION
                </span>
                <h3
                  style={{ color: '#faf7e3' }}
                  className="font-['Rajdhani'] text-2xl sm:text-3xl font-extrabold !text-[#faf7e3] uppercase leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
                >
                  Shop #CamoFriday
                </h3>
                <p className="text-xs sm:text-sm text-gray-100 font-sans mt-2 line-clamp-2 leading-relaxed drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
                  Wear camo on Fridays to show solidarity. Every purchase funds youth mental wellness scholarships.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#faf7e3] group-hover:bg-[#82b29a] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md">
                  <span>Explore Gear</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - OUR STORY (Memorial to Mitchell Slater) */}
      <section className="pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#faf9f5] relative overflow-hidden border-t border-gray-200/60">
        {/* Community Hands Repeating Background from Original Website (about_bg_1.png) */}
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
            {/* Left Column: Editorial Dual-Gallery Showcase (Unblocked & Perfectly Balanced) */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 sm:grid-cols-12 gap-4 sm:gap-6 items-center max-w-lg mx-auto lg:max-w-none">
                
                {/* Left Card: Mitchell's Authentic Memorial Portrait (Full Face & Unblocked) */}
                <div className="col-span-1 sm:col-span-7 group">
                  <div className="bg-white p-3 sm:p-4 pb-5 sm:pb-6 rounded-3xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.18)] border border-gray-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.22)]">
                    <div className="overflow-hidden rounded-2xl bg-[#eef0ea] aspect-[3/4] relative">
                      <img
                        src="/img/about/about_img_2.png"
                        alt="Mitchell Slater"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="mt-3.5 text-center">
                      <span className="font-['Rajdhani'] font-extrabold text-base sm:text-lg text-[#1c2130] uppercase tracking-wider block">
                        Mitchell Slater
                      </span>
                      <span className="text-xs text-gray-500 font-mono tracking-wide">
                        2002 – 2017
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: #CAMOFRIDAY Graphic (100% Legible) + Legacy Tribute Badge */}
                <div className="col-span-1 sm:col-span-5 space-y-3.5 sm:space-y-4">
                  {/* The #CAMOFRIDAY Graphic - Completely Clear & Unobstructed */}
                  <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl shadow-[0_16px_35px_-10px_rgba(0,0,0,0.12)] border border-gray-200/80 transition-all duration-500 hover:-translate-y-1 group">
                    <div className="overflow-hidden rounded-2xl bg-[#f4f3ec]">
                      <img
                        src="/img/about/about_img_1.png"
                        alt="#CamoFriday Movement"
                        className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Curated Memorial Pill / Legacy Badge */}
                  <div className="p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-md flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1b1e2c] flex items-center justify-center text-[#82b29a] font-bold text-xs sm:text-sm shrink-0 shadow-inner">
                      #
                    </div>
                    <div>
                      <div className="font-['Rajdhani'] font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#1c2130] leading-tight">
                        The Mitchell Legacy
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#5e6573] font-medium leading-tight mt-0.5">
                        Est. 2017 • Break the silence
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Heartfelt Narrative & Founder Note */}
            <div className="lg:col-span-6 space-y-6 pt-8 lg:pt-0">
              {/* Origin Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
                <span>OUR ORIGIN & PURPOSE</span>
              </div>

              {/* Section Headline */}
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-[46px] font-extrabold uppercase text-[#1c2130] leading-[1.1] tracking-tight">
                Camo Friday Was Founded In Memory Of Mitchell Slater
              </h2>

              {/* Memorial Highlight Callout */}
              <div className="border-l-4 border-[#e07a5e] pl-4 sm:pl-5 py-2 bg-[#fdf5ed] rounded-r-2xl">
                <h4 className="font-['Rajdhani'] text-base sm:text-lg font-bold text-[#c95b3d] uppercase tracking-wide">
                  On May 26, 2017 Mitchell died by suicide at the age of 15
                </h4>
              </div>

              {/* Story Description */}
              <div className="space-y-3.5 text-[#5e6573] leading-relaxed text-[16px] sm:text-[17px] font-sans">
                <p>
                  He didn’t have a history of depression. He didn’t have a history of anxiety. He didn’t have a history of suicide attempts. Mitchell seemed like a happy, vibrant teenager — but in addition to wearing camo clothing on the regular, he was also camouflaging his deepest personal struggle.
                </p>
                <p>
                  Today, we wear camo every Friday so no one has to struggle in silence. Together, we bring mental health out from the shadows into open, life-saving conversations.
                </p>
              </div>

              {/* Founder Signature & Action Block */}
              <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-5">
                {/* Founder Identity with Authentic Camo Hashtag */}
                <div className="flex items-center gap-3.5">
                  <img
                    src="/img/founder_img.png"
                    alt="CamoFriday Hashtag"
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

                {/* Direct Action Triggers */}
                <div className="flex items-center gap-3">
                  <Link
                    to="/our-story"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1b1e2c] hover:bg-[#82b29a] text-white font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/our-handbook"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-black font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                  >
                    <span>Handbook</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER (Elevated Editorial Redesign) */}
      <section className="py-28 sm:py-36 bg-[#0c0f17] text-center text-white relative overflow-hidden border-y border-white/10">
        {/* Layer 1: Scenic Community Advocacy Mountain Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/cta_community_bg.jpg)' }}
        />

        {/* Layer 2: Rich Vignette & Color Treatment for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f17]/85 via-[#0c0f17]/65 to-[#0c0f17]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0c0f17]/30 backdrop-blur-[1px] pointer-events-none" />

        {/* Layer 3: Atmospheric Radial Color Gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#82b29a]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e07a5e]/15 blur-3xl pointer-events-none" />


        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-7">
          {/* Movement Pill Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs tracking-[0.25em] uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
            <span>BE THE DIFFERENCE</span>
          </div>

          {/* Section Headline */}
          <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-sm">
            Make A Real Difference In <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82b29a] via-[#a8d5ba] to-[#faf7e3]">
              The Lives Of Others
            </span>
          </h2>

          {/* Impact Narrative */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Wearing camo every Friday breaks the silence and brings mental health into open, life-saving conversations. Join our community of volunteers, educators, and advocates across British Columbia.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/become-volunteer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-extrabold text-sm uppercase tracking-widest rounded-full shadow-[0_15px_35px_rgba(130,178,154,0.35)] hover:shadow-[0_20px_45px_rgba(130,178,154,0.45)] hover:-translate-y-1 transition-all duration-300"
            >
              <span>Become A Volunteer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-widest rounded-full border border-white/25 hover:border-white/50 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <Heart className="w-4 h-4 text-[#e07a5e]" />
              <span>Support Our Mission</span>
            </Link>
          </div>

          {/* Trust Highlights / Impact Pills */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-['Rajdhani'] uppercase tracking-wider text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>100% Volunteer Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>Schools & Workplaces Across B.C.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>Est. 2017 In Memory Of Mitchell</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VOLUNTEER & TEAM SECTION (4-Card Circular Carousel) */}
      <section className="py-20 sm:py-28 bg-[#faf9f6] relative overflow-hidden border-t border-gray-200/70">
        {/* Community Hands Repeating Background Reused from Our Origin Section (about_bg_1.png) */}
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
          {/* Header Row: Title, Narrative & Carousel Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3.5">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
                <span>THE PEOPLE BEHIND THE MOVEMENT</span>
              </div>

              {/* Title */}
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#1c2130] leading-[1.1] tracking-tight">
                Our Grassroots Community
              </h2>

              {/* Narrative */}
              <p className="text-[#5e6573] leading-relaxed text-[15px] sm:text-[16px] font-sans">
                CamoFriday started with family and friends mourning the loss of Mitchell Slater. Today, our dedicated volunteer circle unites parents, advocates, and youth across B.C. to bring mental illness out from the shadows into open, life-saving conversations.
              </p>
            </div>

            {/* Interactive Controls & Link */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={prevVolunteers}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#1b1e2c] text-[#1b1e2c] hover:bg-[#1b1e2c] hover:text-white shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  aria-label="Previous Team Members"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextVolunteers}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#1b1e2c] text-[#1b1e2c] hover:bg-[#1b1e2c] hover:text-white shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  aria-label="Next Team Members"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <Link
                to="/our-team"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-200 hover:border-[#1b1e2c] rounded-full text-xs font-['Rajdhani'] font-bold uppercase tracking-widest text-[#426a57] hover:text-[#1c2130] transition-colors shadow-sm"
              >
                <span>Meet All Members</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Mobile Single Card View (with Touch Swipe) */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="block sm:hidden"
          >
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] p-4 flex flex-col max-w-sm mx-auto">
              <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] relative">
                <img
                  src={teamVolunteers[volunteerIndex].img}
                  alt={teamVolunteers[volunteerIndex].name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="pt-4 pb-2 text-center">
                <h4 className="font-['Rajdhani'] text-2xl font-bold text-[#1c2130] uppercase tracking-wider">
                  <Link to="/our-team" className="hover:text-[#82b29a] transition-colors">
                    {teamVolunteers[volunteerIndex].name}
                  </Link>
                </h4>
                <p className="text-xs text-[#82b29a] font-semibold uppercase tracking-wider font-mono mt-1">
                  {teamVolunteers[volunteerIndex].role}
                </p>
              </div>
            </div>

            <p className="text-center text-[11px] text-gray-400 font-mono tracking-wider mt-3 uppercase">
              Swipe or tap arrows to meet the team
            </p>
          </div>

          {/* Tablet & Desktop 4-Card Responsive Grid with Circular Looping */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleVolunteers.map((vol, idx) => (
              <div
                key={vol.name + idx + volunteerIndex}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1.5 p-3.5 flex flex-col"
              >
                <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] relative">
                  <img
                    src={vol.img}
                    alt={vol.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 text-center">
                  <h4 className="font-['Rajdhani'] text-lg font-bold text-[#1c2130] uppercase tracking-wider">
                    <Link to="/our-team" className="hover:text-[#82b29a] transition-colors">
                      {vol.name}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#82b29a] font-semibold uppercase tracking-wider font-mono mt-0.5">
                    {vol.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {teamVolunteers.map((_, i) => (
              <button
                key={i}
                onClick={() => setVolunteerIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  volunteerIndex === i
                    ? 'w-8 h-2 bg-[#82b29a]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to volunteer slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNER LOGOS (Elevated Monochromatic Showcase) */}
      <section className="py-14 bg-[#f4f3ec] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="text-center font-['Rajdhani'] text-xs uppercase tracking-[0.25em] font-bold text-gray-500 mb-8">
            Proud Community Partners & Mental Health Advocates
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {['logo_1.png', 'logo_2.png', 'logo_3.png', 'logo_4.png'].map((logo, idx) => (
              <div
                key={idx}
                className="w-full max-w-[220px] h-20 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-sm flex items-center justify-center p-4 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={`/img/client_logo/${logo}`}
                  alt={`Partner ${idx + 1}`}
                  className="max-h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
