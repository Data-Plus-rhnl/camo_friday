import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import {
  GraduationCap,
  Send,
  Mail,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';

const scholarshipCriteria = [
  {
    num: '01',
    title: 'Eligibility Criteria',
    subtitle: 'FOR B.C. HIGH SCHOOL SENIORS',
    description:
      'Open to any British Columbia youth currently graduating from grade 12 who has been touched by mental illness, either personally or through a loved one.',
    icon: GraduationCap,
  },
  {
    num: '02',
    title: 'Creative Submissions',
    subtitle: 'NON-ACADEMIC EVALUATION',
    description:
      'Express your journey however you feel most comfortable — through written essays, art, photography, video, music, or poetry. There are no GPA minimums.',
    icon: Sparkles,
  },
  {
    num: '03',
    title: 'How To Submit',
    subtitle: 'DEADLINES & CHANNELS',
    description:
      'Hand in your application package directly to your high school Career Counselor, or email it to our foundation review committee.',
    icon: Send,
  },
];

const Scholarship: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. EDITORIAL BREADCRUMB */}
      <Breadcrumb
        subtitle="GIVING BACK TO B.C. YOUTH"
        title="The Mitchell Slater Scholarship"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* 2. MAIN SCHOLARSHIP SHOWCASE (Layered Background with Map, Topographic Rings & Community Hands) */}
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
          className="absolute -top-20 -left-20 w-[460px] h-[460px] pointer-events-none opacity-[0.06] -rotate-45"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] pointer-events-none opacity-[0.05] rotate-12"
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
        <div className="absolute top-10 right-12 hidden xl:flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
          <span className="text-[#82b29a] font-bold">+</span>
          <span>SCHOLARSHIP FUND • PROVINCE OF B.C.</span>
          <span className="text-gray-300">•</span>
          <span>ANNUAL HIGH SCHOOL GRANT</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Scholarship Photo Showcase Frame with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Floating Aesthetic Pill Badge (Top Left) */}
                <div className="absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 text-[11px] font-mono uppercase font-bold text-[#82b29a] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
                  <span>Annual Youth Grant</span>
                </div>

                {/* Floating Aesthetic Glass Badge (Right Edge) */}
                <div className="absolute top-1/3 -right-5 z-20 hidden sm:flex items-center gap-2 bg-[#1b1e2c] text-white backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 text-[11px] font-mono">
                  <Award className="w-3.5 h-3.5 text-[#82b29a]" />
                  <span className="font-bold tracking-wider uppercase">Non-Academic Focus</span>
                </div>

                {/* Photo Card Container */}
                <div className="bg-white p-4 sm:p-5 pb-6 sm:pb-7 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-gray-200/90 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.25)] relative">
                  <div className="overflow-hidden rounded-2xl bg-[#eef0ea] relative aspect-[4/3] shadow-inner">
                    <img
                      src="/img/about_section_img-scholar.png"
                      alt="Mitchell Slater Scholarship"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <span className="font-['Rajdhani'] font-extrabold text-lg text-[#1c2130] uppercase tracking-wider block">
                      #CamoFriday Scholarship
                    </span>
                    <span className="text-xs text-gray-500 font-mono tracking-wider block mt-0.5">
                      Empowering B.C. Graduates Transitioning to Post-Secondary
                    </span>
                  </div>
                </div>

                {/* Quick Info Badge Underneath */}
                <div className="mt-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-md flex items-center justify-between gap-3 text-xs font-mono text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#82b29a]" />
                    <span>Grade 12 Graduates</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>Creative Formats</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#426a57] font-bold">Apply Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: Scholarship Narrative & Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
                <span>TEARING DOWN POST-SECONDARY BARRIERS</span>
              </div>

              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase text-[#1c2130] leading-[1.12] tracking-tight">
                The Mitchell Slater #CamoFriday Scholarship
              </h2>

              <div className="border-l-4 border-[#82b29a] pl-4 sm:pl-5 py-3.5 bg-white/75 backdrop-blur-md rounded-r-2xl shadow-sm border border-gray-100">
                <p className="font-sans text-sm sm:text-base font-semibold text-[#28533e] leading-relaxed">
                  "The Mitchell Slater Foundation is offering post-secondary scholarships for any B.C. youth currently graduating from high school who have been touched by mental illness, either themselves or a loved one."
                </p>
              </div>

              <div className="space-y-4 text-[#525966] leading-relaxed text-[16px] sm:text-[17px] font-sans">
                <p>
                  The purpose of this scholarship is to help students tear down the financial and emotional walls that make the transition to post-secondary education so incredibly challenging.
                </p>
                <p>
                  You may submit your story of life with mental illness in writing, through photography, art, video, or any other creative way you can think of. Sharing your journey is in line with our fundamental philosophy of speaking out. We believe that telling your story of how you’ve overcome barriers can become someone else’s survival guide.
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-[#e07a5e] font-bold">
                  * Note: This is NOT an academic grade-based scholarship.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:camofridays@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-extrabold text-sm uppercase tracking-widest rounded-full shadow-[0_15px_35px_rgba(130,178,154,0.35)] hover:shadow-[0_20px_45px_rgba(130,178,154,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 stroke-[2.5]" />
                  <span>Submit Application By Email</span>
                </a>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-700 bg-white/90 border border-gray-200 px-4 py-3 rounded-full shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#82b29a] shrink-0" />
                  <span>Hand in to your <strong>School Career Counselor</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCHOLARSHIP CRITERIA PILLARS (Atmospheric Dark Frosted Cards) */}
      <section className="py-24 sm:py-32 bg-[#0c0f16] text-white relative overflow-hidden border-b border-white/10">
        {/* Layer 1: Atmospheric Nature Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/scholarship_guidelines_bg.jpg)' }}
        />

        {/* Layer 2: Editorial Dark Frosted Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f16]/92 via-[#0c0f16]/82 to-[#0c0f16]/96 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0c0f16]/40 backdrop-blur-[2px] pointer-events-none" />

        {/* Layer 3: Topographic Contour Object */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none opacity-[0.08] invert rotate-90"
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
              <span>APPLICATION GUIDELINES</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              Application Details & Guidelines
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              We accept any creative format that conveys your life journey, resilience, and your future aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarshipCriteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(130,178,154,0.35)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                >
                  <span className="absolute -top-3 -right-2 text-7xl font-mono font-black text-gray-900/[0.04] pointer-events-none select-none">
                    {item.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-[#1b1e2c] text-[#82b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#82b29a] tracking-wider uppercase px-3 py-1 rounded-full bg-[#82b29a]/10 border border-[#82b29a]/20">
                        STEP {item.num}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#82b29a] block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>SCHOLARSHIP CRITERIA</span>
                    <span className="w-8 h-0.5 bg-gray-200 group-hover:w-16 group-hover:bg-[#82b29a] transition-all duration-300" />
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

export default Scholarship;

