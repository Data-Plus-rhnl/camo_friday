import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const presetAmounts = [20, 50, 100];

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <Breadcrumb title="Donate" bgImage="/img/breadcrumb_img.jpg" />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Donation Form */}
            <div className="lg:col-span-8 bg-[#fcfcfc] p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[#82b29a] rounded-full flex items-center justify-center mx-auto text-2xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#363a57]">
                    Thank You For Your Support!
                  </h3>
                  <p className="text-[#888] max-w-md mx-auto text-base">
                    Your contribution helps us raise mental health awareness and eliminate stigma in our community.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#82b29a] text-white rounded font-['Rajdhani'] font-bold uppercase text-sm"
                  >
                    Donate Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      Donation Amount
                    </h4>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-3.5 rounded-lg font-['Rajdhani'] font-bold text-xl transition-all ${
                            selectedAmount === amt
                              ? 'bg-[#82b29a] text-white shadow-md'
                              : 'bg-white border border-gray-200 text-[#363a57] hover:border-[#82b29a]'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Custom Amount ($)"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('custom');
                        }}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div>
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      Donor Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div>
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      Payment Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          required
                          placeholder="Card Number"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-lg uppercase tracking-wider rounded-lg transition-colors shadow-md"
                  >
                    Complete Donation
                  </button>
                </form>
              )}
            </div>

            {/* Right Cause Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <img
                  src="/img/causes/causes_thumb_000.png"
                  alt="Donate to Camo Friday"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center space-y-3">
                  <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57]">
                    Donate
                  </h4>
                  <p className="text-[#888] text-base">Your support makes a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
