import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  BookOpen,
  ShieldCheck,
  Compass,
  Bike,
  GraduationCap,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isHome && !isScrolled ? 'absolute top-0 left-0' : 'relative'
      }`}
    >
      {/* 1. TOP EDITORIAL ANNOUNCEMENT & UTILITY BAR (Inspired by Patagonia & Aimé Leon Dore) */}
      <div className="bg-[#0b0e14]/90 backdrop-blur-md text-gray-400 py-2 px-6 text-[11px] font-medium tracking-[0.12em] uppercase hidden md:block border-b border-white/[0.06]">
        <div className="w-full max-w-[1700px] mx-auto flex justify-between items-center">
          {/* Mission Tagline */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1.5 text-[#82b29a] font-semibold">
              <Sparkles className="w-3 h-3 text-[#82b29a]" />
              <span>100% of proceeds fund mental health initiatives & scholarships</span>
            </span>
          </div>

          {/* Right Utility: Direct Volunteer & Socials */}
          <div className="flex items-center space-x-5 text-gray-400">
            <Link
              to="/become-volunteer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Users className="w-3 h-3 text-[#82b29a]" />
              <span>Join Volunteer Squad</span>
            </Link>
            <span className="h-2.5 w-[1px] bg-white/15" />
            <a
              href="mailto:camofridays@gmail.com"
              className="hover:text-white transition-colors"
            >
              camofridays@gmail.com
            </a>
            <span className="h-2.5 w-[1px] bg-white/15" />
            <div className="flex items-center space-x-3 text-gray-400">
              <a
                href="https://twitter.com/CamoFridays/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-twitter text-xs"></i>
              </a>
              <a
                href="https://www.facebook.com/camofridays/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f text-xs"></i>
              </a>
              <a
                href="https://www.instagram.com/camofridays/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DESIGNER-GRADE MAIN NAVIGATION BAR (Translucent Frosted Dock) */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-[#0c0f16]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
            : isHome
            ? 'bg-transparent border-b border-white/[0.08] py-4'
            : 'bg-[#0f131d] border-b border-white/[0.08] py-4'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <img
              src="/img/light_logo.png"
              alt="CamoFriday Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Centered Navigation Links with Visual Mega-Menu Dropdowns */}
          <div className="hidden xl:flex items-center space-x-2 font-['Rajdhani'] font-semibold text-[14px] tracking-[0.14em] uppercase">
            {/* Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-full transition-all ${
                location.pathname === '/'
                  ? 'text-white bg-white/[0.1] font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Home
            </Link>

            {/* OUR STORY - Visual Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('story')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all ${
                  location.pathname.startsWith('/our-story') || location.pathname === '/our-handbook' || activeDropdown === 'story'
                    ? 'text-white bg-white/[0.1]'
                    : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>Our Story</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'story' ? 'rotate-180 text-[#82b29a]' : 'opacity-60'
                  }`}
                />
              </button>

              {/* Mega-menu Panel */}
              <div
                className={`absolute top-full left-0 pt-3 w-[460px] transition-all duration-200 z-50 ${
                  activeDropdown === 'story'
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none -translate-y-2'
                }`}
              >
                <div className="bg-[#121622]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] px-2 pb-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
                    <span>THE CAMOFRIDAY STORY</span>
                    <span className="text-[#82b29a]">EST. 2023</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <Link
                      to="/our-story"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-[#82b29a]/15 text-[#82b29a] group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Our Background & Origin
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all text-[#82b29a]" />
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          How Mitch's journey inspired a movement to bring mental health out from the camouflage.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/our-handbook"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.08] text-white group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Our Handbook & Tools
                          </span>
                          <span className="text-[10px] bg-white/[0.08] text-gray-300 px-2 py-0.5 rounded-full font-mono">
                            FREE
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          Practical frameworks and guidance to support friends, family, and yourself.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* OUR WORK - Visual Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('work')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all ${
                  location.pathname.startsWith('/our-work') ||
                  location.pathname === '/ride-for-mitch' ||
                  location.pathname === '/scholarship' ||
                  activeDropdown === 'work'
                    ? 'text-white bg-white/[0.1]'
                    : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>Our Work</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'work' ? 'rotate-180 text-[#82b29a]' : 'opacity-60'
                  }`}
                />
              </button>

              {/* Mega-menu Panel */}
              <div
                className={`absolute top-full left-0 pt-3 w-[520px] transition-all duration-200 z-50 ${
                  activeDropdown === 'work'
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none -translate-y-2'
                }`}
              >
                <div className="bg-[#121622]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] px-2 pb-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
                    <span>INITIATIVES & ACTION</span>
                    <span className="text-[#82b29a]">MAKING AN IMPACT</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <Link
                      to="/our-work"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-[#82b29a]/15 text-[#82b29a] group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <Compass className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Initiatives Overview
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all text-[#82b29a]" />
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          A high-level view of our outreach programs, speaking engagements, and school visits.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/ride-for-mitch"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.08] text-white group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <Bike className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Ride For Mitch
                          </span>
                          <span className="text-[10px] bg-[#82b29a]/20 text-[#82b29a] px-2 py-0.5 rounded-full font-mono">
                            ANNUAL RIDE
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          Our flagship endurance cycling event bringing communities together for suicide awareness.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/scholarship"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.08] text-white group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            #CamoFriday Scholarship
                          </span>
                          <span className="text-[10px] bg-white/[0.08] text-gray-300 px-2 py-0.5 rounded-full font-mono">
                            ACADEMIC
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          Granting tuition awards to youth actively championing mental wellness in their schools.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GET INVOLVED - Visual Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('involved')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/become-volunteer' ||
                  location.pathname === '/donate' ||
                  activeDropdown === 'involved'
                    ? 'text-white bg-white/[0.1]'
                    : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>Get Involved</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'involved' ? 'rotate-180 text-[#82b29a]' : 'opacity-60'
                  }`}
                />
              </button>

              {/* Mega-menu Panel */}
              <div
                className={`absolute top-full left-0 pt-3 w-[440px] transition-all duration-200 z-50 ${
                  activeDropdown === 'involved'
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none -translate-y-2'
                }`}
              >
                <div className="bg-[#121622]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] px-2 pb-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
                    <span>JOIN THE MOVEMENT</span>
                    <span className="text-[#82b29a]">EVERY VOICE COUNTS</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <Link
                      to="/become-volunteer"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-[#82b29a]/15 text-[#82b29a] group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Become A Volunteer
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all text-[#82b29a]" />
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          Help organize events, staff ride check-points, and distribute awareness gear.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/donate"
                      className="group/card flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.08] text-white group-hover/card:bg-[#82b29a] group-hover/card:text-[#111] transition-colors">
                        <Heart className="w-5 h-5 text-red-400 group-hover/card:text-[#111]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm normal-case font-['Rajdhani'] tracking-wide group-hover/card:text-[#82b29a] transition-colors">
                            Make A Donation
                          </span>
                          <span className="text-[10px] bg-[#82b29a]/20 text-[#82b29a] px-2 py-0.5 rounded-full font-mono">
                            DIRECT
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 normal-case font-normal mt-0.5 leading-relaxed font-sans">
                          Fuel grassroots youth mental health workshops and scholarships directly.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <Link
              to="/our-team"
              className={`px-3.5 py-2 rounded-full transition-all ${
                location.pathname === '/our-team'
                  ? 'text-white bg-white/[0.1] font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Our Team
            </Link>

            <Link
              to="/shop"
              className={`px-3.5 py-2 rounded-full transition-all ${
                location.pathname === '/shop'
                  ? 'text-white bg-white/[0.1] font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Shop
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-full transition-all ${
                location.pathname === '/contact'
                  ? 'text-white bg-white/[0.1] font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action: Designer Tactile Pill CTA */}
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 bg-[#82b29a] hover:bg-[#93c7ae] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(130,178,154,0.3)] hover:shadow-[0_6px_22px_rgba(130,178,154,0.45)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 fill-[#0c0f16] shrink-0" />
              <span className="sm:hidden">Donate</span>
              <span className="hidden sm:inline">Donate Now</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-OVER DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative ml-auto w-full max-w-sm bg-[#0f131d] text-white h-full shadow-2xl p-6 flex flex-col z-10 overflow-y-auto border-l border-white/10">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <img src="/img/light_logo.png" alt="CamoFriday" className="h-9 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Navigation */}
            <nav className="mt-6 flex-1 space-y-6">
              {/* Core Links */}
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block mb-2 px-2">
                  Navigation
                </span>
                <div className="space-y-1 font-['Rajdhani'] font-bold text-lg uppercase tracking-wider">
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/our-story"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/our-handbook"
                    className="block px-3 py-1.5 pl-6 text-sm text-gray-300 font-sans normal-case hover:text-[#82b29a] transition-colors"
                  >
                    ↳ Community Handbook
                  </Link>
                  <Link
                    to="/our-work"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Our Work
                  </Link>
                  <Link
                    to="/ride-for-mitch"
                    className="block px-3 py-1.5 pl-6 text-sm text-gray-300 font-sans normal-case hover:text-[#82b29a] transition-colors"
                  >
                    ↳ Ride For Mitch
                  </Link>
                  <Link
                    to="/scholarship"
                    className="block px-3 py-1.5 pl-6 text-sm text-gray-300 font-sans normal-case hover:text-[#82b29a] transition-colors"
                  >
                    ↳ #CamoFriday Scholarship
                  </Link>
                </div>
              </div>

              {/* Engagement */}
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block mb-2 px-2">
                  Community & Support
                </span>
                <div className="space-y-1 font-['Rajdhani'] font-bold text-lg uppercase tracking-wider">
                  <Link
                    to="/become-volunteer"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Become Volunteer
                  </Link>
                  <Link
                    to="/our-team"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/shop"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Shop Gear
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#82b29a] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </nav>

            {/* Bottom Direct CTA */}
            <div className="pt-6 border-t border-white/10 mt-auto">
              <Link
                to="/donate"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#82b29a] hover:bg-[#93c7ae] text-[#0c0f16] font-['Rajdhani'] font-bold text-sm uppercase tracking-widest rounded-xl transition-colors shadow-lg"
              >
                <Heart className="w-4 h-4 fill-[#0c0f16]" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
