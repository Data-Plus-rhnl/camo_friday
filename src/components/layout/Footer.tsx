import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, ChevronRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4500);
    }
  };

  return (
    <footer className="relative bg-[#0c0f17] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Layer 1: Subtle Camouflage Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/footer_dark_bg.png)' }}
      />

      {/* Layer 2: Ambient Radial Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#82b29a]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#e07a5e]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src="/img/footer_light_logo_2x.png"
                alt="CamoFriday Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm font-sans">
              Participating in #CamoFriday is simple. Wear camo clothing every Friday to break the silence surrounding youth mental health and show that no one has to struggle alone.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#82b29a] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
              <span>EST. 2017 • BRITISH COLUMBIA, CA</span>
            </div>
          </div>

          {/* Col 2: Navigation (Explore) */}
          <div className="lg:col-span-2">
            <h4 className="font-['Rajdhani'] text-white text-lg font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { label: 'Home', path: '/' },
                { label: 'Our Story', path: '/our-story' },
                { label: 'Our Work', path: '/our-work' },
                { label: 'Get Involved', path: '/become-volunteer' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#82b29a] transition-all duration-200 inline-flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Initiatives & Links */}
          <div className="lg:col-span-2">
            <h4 className="font-['Rajdhani'] text-white text-lg font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>Initiatives</span>
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { label: 'Our Team', path: '/our-team' },
                { label: 'Ride for Mitch', path: '/ride-for-mitch' },
                { label: 'Scholarship', path: '/scholarship' },
                { label: 'Handbook', path: '/our-handbook' },
                {
                  label: 'Shop Apparel',
                  href: 'https://www.facebook.com/camofridays/shop/?ref_code=mini_shop_page_card_cta&ref_surface=page',
                },
                { label: 'Donate', path: '/donate' },
              ].map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#82b29a] transition-all duration-200 inline-flex items-center gap-1.5 hover:translate-x-1"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.path!}
                      className="text-gray-400 hover:text-[#82b29a] transition-all duration-200 inline-flex items-center gap-1.5 hover:translate-x-1"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-['Rajdhani'] text-white text-lg font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>Stay Connected</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe for annual ride updates, mental wellness guides, and scholarship announcements.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-4 pr-28 py-3.5 bg-white/5 border border-white/15 focus:border-[#82b29a] text-white placeholder-gray-500 rounded-full text-sm backdrop-blur-md outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-5 py-2 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <span>Join</span>
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#82b29a] mt-2.5 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
                  <span>Thank you for joining our community!</span>
                </p>
              )}
            </form>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block mb-3">
                Follow The Movement
              </span>
              <div className="flex space-x-3">
                {[
                  { icon: 'fa-facebook-f', href: 'https://www.facebook.com/camofridays/', label: 'Facebook' },
                  { icon: 'fa-twitter', href: 'https://twitter.com/CamoFridays', label: 'Twitter' },
                  { icon: 'fa-instagram', href: 'https://www.instagram.com/camofridays/', label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#82b29a] text-gray-300 hover:text-[#0c0f16] border border-white/10 hover:border-[#82b29a] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    aria-label={social.label}
                  >
                    <i className={`fab ${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Developer Credit & Crisis Resource */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 #CamoFriday Movement. In loving memory of Mitchell Slater (2002–2017).</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p className="flex items-center gap-1.5 text-gray-400">
              <span>Developed by</span>
              <a
                href="https://quantumflowit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-gray-300 hover:text-[#4FD1FF] transition-all group"
              >
                <span className="relative w-4 h-4 rounded-[4px] overflow-hidden inline-flex items-center justify-center bg-white shadow-xs border border-white/20 shrink-0 transition-transform group-hover:scale-110">
                  <img
                    src="/img/qf-logo-avatar.png"
                    alt="Quantum Flow Logo"
                    className="w-full h-full object-contain p-[1px]"
                  />
                </span>
                <span className="group-hover:underline underline-offset-2">Quantum Flow</span>
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Heart className="w-3.5 h-3.5 text-[#e07a5e]" />
            <span>Canada Suicide Crisis Helpline: <strong>Call or Text 988</strong> (24/7)</span>
          </div>
        </div>
      </div>

      {/* Luxury Floating Scroll-to-Top Dock Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-3.5 rounded-2xl bg-[#1b1e2c]/90 hover:bg-[#82b29a] text-white hover:text-[#0c0f16] border border-white/20 hover:border-[#82b29a] shadow-[0_15px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(130,178,154,0.45)] group flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
