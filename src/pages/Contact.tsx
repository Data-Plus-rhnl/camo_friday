import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Mail, MapPin, Send, CheckCircle, LifeBuoy, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="w-full">
      {/* Elevated Blended Camo Hero Banner */}
      <Breadcrumb
        subtitle="GET IN TOUCH"
        title="Contact Us"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* Layered Showcase Section */}
      <section className="relative py-24 sm:py-32 bg-[#faf9f5] overflow-hidden">
        {/* Background Dot Matrix Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: 'url(/img/gray_map_bg.png)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#82b29a]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#e07a5e]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Contour Elevation Rings */}
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] pointer-events-none opacity-[0.06] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] pointer-events-none opacity-[0.05] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />

        {/* Supportive Hands Graphic Watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none opacity-[0.035] bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: 'url(/img/about_bg_1.png)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#82b29a]/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82b29a]/10 text-[#82b29a] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  We Are Listening
                </div>
                <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57] tracking-tight">
                  Send Us A Message
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Have a question about our handbooks, events, or school visits? Reach out anytime.
                </p>
              </div>

              {submitted && (
                <div className="p-4 mb-6 text-sm text-green-800 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Your message has been sent successfully! We will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Full Name <span className="text-[#e07a5e]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Email Address <span className="text-[#e07a5e]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Handbook order, School presentation, Ride for Mitch"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Message <span className="text-[#e07a5e]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help or collaborate with you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Immediate Crisis Resources Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#18211b] border border-[#82b29a]/30 p-8 text-white shadow-xl">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/img/breadcrumb_story_bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e07a5e]/20 border border-[#e07a5e]/40 text-[#e07a5e] text-xs font-bold uppercase tracking-wider">
                    <LifeBuoy className="w-4 h-4 text-[#e07a5e]" />
                    Crisis Support Helpline
                  </div>

                  <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase tracking-wide">
                    Need Immediate Help?
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    If you or someone you know is struggling or in distress, help is available 24/7 across Canada. You are never alone.
                  </p>

                  <div className="p-4 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-gray-300 font-bold">Canada Suicide Crisis Helpline</span>
                      <span className="font-['Rajdhani'] text-2xl font-bold text-[#e07a5e]">Call or Text 9-8-8</span>
                    </div>
                    <div className="text-xs text-gray-400">Toll-free, bilingual, confidential support available anytime.</div>
                  </div>
                </div>
              </div>

              {/* Direct Info Card */}
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 shadow-md space-y-6">
                <div>
                  <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] tracking-tight">
                    Direct Contacts
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-1">
                    British Columbia, Canada
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#82b29a]/15 text-[#82b29a] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                      <a
                        href="mailto:camofridays@gmail.com"
                        className="font-['Rajdhani'] font-bold text-lg text-[#363a57] hover:text-[#82b29a] transition-colors"
                      >
                        camofridays@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#82b29a]/15 text-[#82b29a] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Headquarters</p>
                      <p className="font-semibold text-gray-700 text-sm">
                        British Columbia, Canada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Connect on Social Media
                  </p>
                  <div className="flex gap-2.5">
                    <a
                      href="https://www.facebook.com/camofridays/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <i className="fab fa-facebook-f text-sm"></i>
                    </a>
                    <a
                      href="https://twitter.com/CamoFridays"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/camofridays/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <i className="fab fa-instagram text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
