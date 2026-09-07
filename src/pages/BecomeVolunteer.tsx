import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const BecomeVolunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
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
    setFormData({ fullName: '', email: '', phone: '', address: '', message: '' });
  };

  return (
    <div className="w-full">
      <Breadcrumb title="Become a Volunteer" bgImage="/img/breadcrumb_img.jpg" />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#fcfcfc] p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-8">
                <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-sm mb-1">
                  Contact with us
                </h5>
                <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#363a57]">
                  Send Message
                </h2>
              </div>

              {status === 'success' && (
                <div className="p-4 mb-6 text-sm text-green-800 bg-green-50 rounded-lg border border-green-200">
                  Request successfully added! We will contact you soon!
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-6 text-sm text-red-800 bg-red-50 rounded-lg border border-red-200">
                  Please fill in all required fields.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="What you are looking for?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#e07a5e] hover:bg-[#d14f42] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-md"
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div>
                <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#363a57] mb-3">
                  VOLUNTEER
                </h2>
                <p className="text-[#888] leading-relaxed text-[17px]">
                  Please reach out directly to us if you would like to volunteer.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#82b29a]/15 text-[#82b29a] flex items-center justify-center text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email Us:
                  </p>
                  <a
                    href="mailto:camofridays@gmail.com"
                    className="font-semibold text-lg text-[#363a57] hover:text-[#82b29a] transition-colors"
                  >
                    camofridays@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-['Rajdhani'] text-xl font-bold uppercase text-[#363a57] mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/camofridays/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a
                    href="https://twitter.com/CamoFridays"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/camofridays/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-gray-100 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-instagram text-lg"></i>
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
