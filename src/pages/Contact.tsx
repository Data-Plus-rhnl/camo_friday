import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Welcome to our contact"
        title="Contact Us"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-8 bg-[#fcfcfc] p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-8">
                <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-sm mb-1">
                  Contact Us
                </h5>
                <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#363a57]">
                  Send Message
                </h2>
              </div>

              {submitted && (
                <div className="p-4 mb-6 text-sm text-green-800 bg-green-50 rounded-lg border border-green-200">
                  Request successfully sent! We will contact you soon.
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
                  <textarea
                    rows={5}
                    required
                    placeholder="What can we help you with?"
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

            {/* Info Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100 text-center">
              <div>
                <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-sm mb-1">
                  Contact Info
                </h5>
                <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#363a57]">
                  Details
                </h2>
              </div>

              <div>
                <h5 className="font-['Rajdhani'] text-lg font-bold text-[#363a57] uppercase mb-1">
                  Email
                </h5>
                <a
                  href="mailto:camofridays@gmail.com"
                  className="text-[#888] hover:text-[#82b29a] transition-colors text-base"
                >
                  camofridays@gmail.com
                </a>
              </div>

              <div>
                <h5 className="font-['Rajdhani'] text-lg font-bold text-[#363a57] uppercase mb-3">
                  Follow
                </h5>
                <div className="flex justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/camofridays/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-white shadow-sm border border-gray-200 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a
                    href="https://twitter.com/CamoFridays"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-white shadow-sm border border-gray-200 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/camofridays/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-lg bg-white shadow-sm border border-gray-200 text-[#363a57] hover:bg-[#82b29a] hover:text-white flex items-center justify-center transition-colors"
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

export default Contact;
