import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Mail, CheckCircle, Sparkles, HeartHandshake, Send } from 'lucide-react';

const BecomeVolunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    roleInterest: 'Events & Ride for Mitch',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // Simulate submission
    setStatus('success');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      roleInterest: 'Events & Ride for Mitch',
      message: '',
    });
  };

  return (
    <div className="w-full">
      {/* Elevated Blended Camo Hero Banner */}
      <Breadcrumb
        subtitle="JOIN THE MOVEMENT"
        title="Become a Volunteer"
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
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#82b29a]/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82b29a]/10 text-[#82b29a] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Make An Impact
                </div>
                <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57] tracking-tight">
                  Volunteer Application
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Tell us a bit about yourself and how you would like to help support our youth initiatives.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 mb-6 text-sm text-green-800 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Thank you! Your volunteer application has been received. Our team will contact you shortly!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-6 text-sm text-red-800 bg-red-50 rounded-xl border border-red-200">
                  Please fill in all required fields (Name, Email, and Message).
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
                      placeholder="e.g. Alex Mitchell"
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
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (604) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      City / Community
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vancouver, BC"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Area of Interest
                  </label>
                  <select
                    value={formData.roleInterest}
                    onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-all text-gray-700 font-medium"
                  >
                    <option value="Events & Ride for Mitch">Ride for Mitch & Memorial Events</option>
                    <option value="School Ambassador">School & High School Ambassador</option>
                    <option value="Handbook Distribution">Handbook & Resource Distribution</option>
                    <option value="Social Media & Content">Social Media, Photography & Content</option>
                    <option value="Fundraising & Sponsorship">Fundraising & Corporate Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    How would you like to contribute? <span className="text-[#e07a5e]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us why #CamoFriday resonates with you and any skills you'd love to share..."
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
                  <span>Submit Application</span>
                </button>
              </form>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Feature Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#18211b] border border-[#82b29a]/30 p-8 sm:p-10 text-white shadow-xl">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/img/breadcrumb_story_bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82b29a]/20 border border-[#82b29a]/40 text-[#82b29a] text-xs font-bold uppercase tracking-wider">
                    <HeartHandshake className="w-4 h-4 text-[#82b29a]" />
                    Grassroots Force
                  </div>

                  <h3 className="font-['Rajdhani'] text-3xl font-bold uppercase tracking-wide">
                    Why Volunteer With Us?
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    #CamoFriday was born around kitchen tables and community car meets. Every single volunteer helps take life-saving mental health conversations into local high schools, hockey rinks, and workplaces.
                  </p>

                  {/* Impact Pills */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md">
                      <div className="font-['Rajdhani'] text-2xl font-bold text-[#82b29a]">500+</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider mt-0.5">Volunteers Engaged</div>
                    </div>
                    <div className="p-3.5 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md">
                      <div className="font-['Rajdhani'] text-2xl font-bold text-[#e07a5e]">10,000+</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider mt-0.5">Handbooks Shared</div>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#82b29a] flex-shrink-0 mt-0.5" />
                      <span>Support annual events like the Ride for Mitch Memorial Rally</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#82b29a] flex-shrink-0 mt-0.5" />
                      <span>Deliver free mental health toolkits directly to schools</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#82b29a] flex-shrink-0 mt-0.5" />
                      <span>Connect with a compassionate network of families and allies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Reach Out Card */}
              <div className="bg-white/90 backdrop-blur-md p-7 rounded-2xl border border-gray-200/80 shadow-md flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-[#82b29a]/15 text-[#82b29a] flex items-center justify-center text-xl flex-shrink-0 p-3">
                  <Mail className="w-6 h-6 text-[#82b29a]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Have Specific Questions?
                  </p>
                  <a
                    href="mailto:camofridays@gmail.com"
                    className="font-['Rajdhani'] font-bold text-lg sm:text-xl text-[#363a57] hover:text-[#82b29a] transition-colors"
                  >
                    camofridays@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeVolunteer;
