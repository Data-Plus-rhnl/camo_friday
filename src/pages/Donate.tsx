import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { ShieldCheck, CheckCircle2, Sparkles, Lock, Gift } from 'lucide-react';

const presetAmounts = [20, 50, 100, 250];

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getEffectiveAmount = () => {
    if (selectedAmount === 'custom') {
      return customAmount ? `$${customAmount}` : '$50';
    }
    return `$${selectedAmount}`;
  };

  return (
    <div className="w-full">
      {/* Elevated Blended Camo Hero Banner */}
      <Breadcrumb
        subtitle="FUEL THE MISSION"
        title="Donate"
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
            {/* Left Donation Form */}
            <div className="lg:col-span-8 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#82b29a]/10 to-transparent rounded-bl-full pointer-events-none" />

              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-[#82b29a]/15 text-[#82b29a] rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-[#82b29a]" />
                  </div>
                  <h3 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
                    Thank You For Your Generosity!
                  </h3>
                  <p className="text-[#666] max-w-md mx-auto text-base sm:text-lg leading-relaxed">
                    Your contribution of <strong className="text-[#363a57]">{getEffectiveAmount()}</strong> directly empowers Canadian youth with mental health education and funds memorial bursaries.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-8 py-3.5 bg-[#82b29a] hover:bg-[#6ea087] text-white rounded-xl font-['Rajdhani'] font-bold uppercase text-sm tracking-wider shadow-md transition-all"
                  >
                    Make Another Donation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82b29a]/10 text-[#82b29a] text-xs font-bold uppercase tracking-wider mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          Choose Your Contribution
                        </div>
                        <h4 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase text-[#363a57]">
                          Donation Amount
                        </h4>
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-[#82b29a]" />
                        Secure 256-Bit SSL
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-4">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-4 rounded-xl font-['Rajdhani'] font-bold text-2xl transition-all relative overflow-hidden ${
                            selectedAmount === amt
                              ? 'bg-[#82b29a] text-white shadow-lg scale-105'
                              : 'bg-gray-50 border border-gray-200 text-[#363a57] hover:border-[#82b29a] hover:bg-white'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    <div>
                      <input
                        type="number"
                        placeholder="Or enter custom dollar amount ($)"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('custom');
                        }}
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Impact breakdown pills */}
                    <div className="mt-4 p-4 rounded-2xl bg-[#82b29a]/10 border border-[#82b29a]/20 flex items-start gap-3">
                      <Gift className="w-5 h-5 text-[#82b29a] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-700 leading-relaxed">
                        <strong>Impact Guarantee:</strong> 100% of community contributions go directly to youth handbook printing, high school awareness campaigns, and the Mitchell Slater Memorial Scholarship fund.
                      </p>
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      Donor Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address (for tax receipt)"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      Payment Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          required
                          placeholder="Card Number (0000 0000 0000 0000)"
                          className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC / Security Code"
                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-lg uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]"
                  >
                    Complete Donation of {getEffectiveAmount()}
                  </button>
                </form>
              )}
            </div>

            {/* Right Cause Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/img/causes/causes_thumb_000.png"
                    alt="Donate to Camo Friday"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#18211b]/80 backdrop-blur-md border border-[#82b29a]/40 text-[#82b29a] text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Grassroots Foundation
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase">
                      Mitchell Slater Memorial
                    </h4>
                    <p className="text-xs text-[#82b29a] uppercase tracking-wider font-semibold">
                      Ending Youth Suicide Through Education
                    </p>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <p className="text-[#666] text-sm leading-relaxed">
                    By making a donation, you help keep Mitchell's legacy alive and ensure another young life is saved from silence.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#82b29a] flex-shrink-0" />
                      <span>Official CMHA-partnered youth handbooks</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#82b29a] flex-shrink-0" />
                      <span>Annual graduation scholarship bursaries</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#82b29a] flex-shrink-0" />
                      <span>Community mental wellness events</span>
                    </div>
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

export default Donate;
