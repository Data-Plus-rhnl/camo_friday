import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import {
  Download,
  ShieldCheck,
  Heart,
  Users,
  AlertCircle,
  FileText,
  Mail,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Award,
  PhoneCall,
} from 'lucide-react';

const handbookChapters = [
  {
    number: '01',
    icon: AlertCircle,
    title: 'Recognizing Warning Signs',
    subtitle: 'IDENTIFYING HIDDEN DISTRESS',
    description:
      'Detailed guidance on noticing subtle behavioral shifts, mood swings, withdrawal from hobbies, sleep disruptions, and quiet emotional struggles in teenagers and young adults.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Opening The Conversation',
    subtitle: 'PRACTICAL TALKING SCRIPTS',
    description:
      'Actionable communication prompts and non-judgmental questions designed for parents, educators, coaches, and friends to break the ice and create psychological safety.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Immediate Crisis Protocols',
    subtitle: 'ACTIONABLE STEPS WHEN IT COUNTS',
    description:
      'Step-by-step guidance on what to do if someone expresses suicidal thoughts, including direct emergency hotlines, de-escalation methods, and regional British Columbia clinics.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Community & Peer Support',
    subtitle: 'BUILDING A CULTURE OF SAFETY',
    description:
      'Frameworks for high schools, sports teams, and workplaces to foster year-round mental wellness awareness, normalize vulnerability, and build resilient support networks.',
  },
];

const audiencePillars = [
  {
    title: 'For Parents & Guardians',
    subtitle: 'HOME & FAMILY PROTOCOLS',
    description:
      'Learn how to look past typical teenage moods and recognize signs of quiet depression, anxiety, and distress at home.',
    icon: Heart,
    accent: '#e07a5e',
    highlights: ['Recognize quiet withdrawal', 'Empathy-first talking prompts', 'Safe home intervention steps'],
  },
  {
    title: 'For Educators & Coaches',
    subtitle: 'SCHOOLS & ATHLETICS',
    description:
      'Cultivate supportive classrooms and athletic environments where young people feel safe discussing mental health.',
    icon: BookOpen,
    accent: '#82b29a',
    highlights: ['Classroom psychological safety', 'Team culture frameworks', 'Counseling referral pathways'],
  },
  {
    title: 'For Friends & Peers',
    subtitle: 'YOUTH & PEER ALLIES',
    description:
      'Know what to say when a friend is struggling in silence, and learn how to connect them with trusted adults and crisis support.',
    icon: Users,
    accent: '#426a57',
    highlights: ['What to say & what to avoid', 'Breaking the silence safely', 'Connecting peers to 988 line'],
  },
];

const OurHandbook: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. EDITORIAL BREADCRUMB */}
      <Breadcrumb
        subtitle="FREE COMMUNITY RESOURCES"
        title="Our Handbook"
        bgImage="/img/breadcrumb_handbook_bg.jpg"
      />

      {/* 2. MAIN EDUCATIONAL HANDBOOK SHOWCASE (Layered Background with Map, Topographic Rings & Community Hands) */}
      <section className="py-20 sm:py-28 bg-[#f5f4ee] relative overflow-hidden border-b border-gray-200/70">
        {/* Layer A: Dot-Matrix Map (No-BG Object) */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "url('/img/gray_map_bg.png')",
            backgroundSize: '1100px auto',
          }}
        />

        {/* Layer B: Topographic Elevation Rings (round_shape.png No-BG Object) in corners */}
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

        {/* Layer D: Technical Coordinates Crosshairs */}
        <div className="absolute top-10 right-12 hidden xl:flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-gray-400 select-none pointer-events-none">
          <span className="text-[#82b29a] font-bold">+</span>
          <span>RESOURCE REF: CF-HB-2024</span>
          <span className="text-gray-300">•</span>
          <span>CMHA CERTIFIED</span>
        </div>

        {/* Layer E: Authentic Community Hands Watermark Along Bottom (about_bg_1.png) */}
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
            {/* Left Column: Handbook Cover Mockup Frame with Floating Luxury Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Floating Aesthetic Pill Badge (Top Right) */}
                <div className="absolute -top-4 -right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#1b1e2c] shadow-lg border border-white/10 text-[11px] font-mono uppercase font-bold text-[#82b29a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse" />
                  <span>Official CMHA Guide</span>
                </div>

                {/* Floating Aesthetic Glass Badge (Left Edge) */}
                <div className="absolute top-1/3 -left-5 z-20 hidden sm:flex items-center gap-2 bg-white/95 text-[#1c2130] backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-gray-200/90 text-[11px] font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#82b29a]" />
                  <span className="font-bold tracking-wider uppercase">100% Free Public Access</span>
                </div>

                {/* Book Card Mockup Container */}
                <div className="bg-white p-4 sm:p-5 pb-6 sm:pb-7 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-gray-200/90 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.25)] relative">
                  <div className="overflow-hidden rounded-2xl bg-[#eef0ea] relative shadow-inner">
                    <img
                      src="/img/about_section_img.png"
                      alt="Camo Friday Mental Health Handbook"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <span className="font-['Rajdhani'] font-extrabold text-lg text-[#1c2130] uppercase tracking-wider block">
                      Camo Friday Handbook
                    </span>
                    <span className="text-xs text-gray-500 font-mono tracking-wider block mt-0.5">
                      Developed with Canadian Mental Health Association
                    </span>
                  </div>
                </div>

                {/* Quick Info Badge Underneath */}
                <div className="mt-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-md flex items-center justify-between gap-3 text-xs font-mono text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#82b29a]" />
                    <span>Free PDF</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>24 Pages</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#426a57] font-bold">Direct Download</span>
                </div>
              </div>
            </div>

            {/* Right Column: Educational Narrative & Download Trigger */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a] animate-pulse" />
                <span>PRACTICAL MENTAL HEALTH EDUCATION</span>
              </div>

              {/* Title */}
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase text-[#1c2130] leading-[1.12] tracking-tight">
                Education Is Key And We Are Committed To Getting Resources To Those In Need
              </h2>

              {/* CMHA Statistical Callout with Glass Effect */}
              <div className="border-l-4 border-[#82b29a] pl-4 sm:pl-5 py-3.5 bg-white/75 backdrop-blur-md rounded-r-2xl shadow-sm border border-gray-100">
                <p className="font-sans text-sm sm:text-base font-semibold text-[#28533e] leading-relaxed">
                  "According to the Canadian Mental Health Association, in any given year, <strong className="text-[#1c2130]">1 in 5 people</strong> in Canada will personally experience a mental health problem or illness."
                </p>
              </div>

              {/* Narrative */}
              <div className="space-y-4 text-[#525966] leading-relaxed text-[16px] sm:text-[17px] font-sans">
                <p>
                  Many people struggle to help themselves or those around them because they feel they don’t have the necessary tools or words. #CamoFriday’s Handbook was created to equip parents, educators, youth, and community members with practical information on how to recognize the signs of mental illness.
                </p>
                <p>
                  Inside, you’ll find approachable frameworks to initiate honest conversations, understand what to look for when someone is quietly hurting, and discover direct pathways to professional crisis care and community support networks.
                </p>
              </div>

              {/* Primary Action Button & 988 Helpline Resource */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="/pdf/Our_Handbook_Camo_Friday.pdf"
                  download="Our_Handbook_Camo_Friday.pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-extrabold text-sm uppercase tracking-widest rounded-full shadow-[0_15px_35px_rgba(130,178,154,0.35)] hover:shadow-[0_20px_45px_rgba(130,178,154,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download Free Handbook (PDF)</span>
                </a>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-700 bg-white/90 border border-gray-200 px-4 py-3 rounded-full shadow-xs">
                  <PhoneCall className="w-3.5 h-3.5 text-[#e07a5e] shrink-0" />
                  <span>Crisis Lifeline: <strong>Call or Text 988</strong> (24/7)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INSIDE THE HANDBOOK (Atmospheric Architectural Community Space Background + Topographic Objects) */}
      <section className="py-24 sm:py-32 bg-[#0c0f16] text-white relative overflow-hidden border-b border-white/10">
        {/* Layer 1: Pacific Northwest Educational Community Space Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/img/handbook_community_bg.jpg)' }}
        />

        {/* Layer 2: Editorial Dark Frosted Vignette for Pristine Card Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f16]/92 via-[#0c0f16]/82 to-[#0c0f16]/96 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0c0f16]/40 backdrop-blur-[2px] pointer-events-none" />

        {/* Layer 3: Topographic Contour Rings (round_shape.png No-BG Object) */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-[0.08] invert"
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
              <span>ACTIONABLE GUIDANCE</span>
            </div>

            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              What You'll Find <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82b29a] via-[#a8d5ba] to-[#faf7e3]">
                Inside The Handbook
              </span>
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Practical, compassionate tools compiled to help you support your friends, students, and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {handbookChapters.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <div
                  key={chapter.number}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-white/30 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(130,178,154,0.35)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Big Background Number Watermark */}
                  <span className="absolute -top-3 -right-2 text-7xl font-mono font-black text-gray-900/[0.04] pointer-events-none select-none">
                    {chapter.number}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-[#1b1e2c] text-[#82b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#82b29a] tracking-wider uppercase px-3 py-1 rounded-full bg-[#82b29a]/10 border border-[#82b29a]/20">
                        CHAPTER {chapter.number}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#82b29a] block mb-1">
                        {chapter.subtitle}
                      </span>
                      <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130]">
                        {chapter.title}
                      </h3>
                    </div>

                    <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>

                  {/* Card Bottom Progress Pill */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>SECTION {chapter.number} OF 04</span>
                    <span className="w-8 h-0.5 bg-gray-200 group-hover:w-16 group-hover:bg-[#82b29a] transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHO SHOULD READ THIS HANDBOOK (Rich Textured Background with Map, Topographic Rings & Checklist Cards) */}
      <section className="py-20 sm:py-28 bg-[#f5f4ee] border-b border-gray-200/80 relative overflow-hidden">
        {/* Layer A: Dot-Matrix Map (No-BG Object) */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "url('/img/gray_map_bg.png')",
            backgroundSize: '1100px auto',
          }}
        />

        {/* Layer B: Topographic Elevation Rings in center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer C: Authentic Community Hands Watermark along bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-56 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/img/about_bg_1.png')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom center',
            backgroundSize: 'auto 200px',
            opacity: 0.16,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82b29a]/15 border border-[#82b29a]/25 text-[#426a57] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82b29a]" />
              <span>TARGET AUDIENCES</span>
            </div>
            <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-extrabold uppercase text-[#1c2130] tracking-tight">
              Designed For The Entire Community
            </h2>
            <p className="text-[#525966] font-sans text-sm sm:text-base">
              Whether you are a parent, coach, educator, or youth, this guide provides immediate clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiencePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/90 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1b1e2c] text-[#82b29a] group-hover:bg-[#82b29a] group-hover:text-[#0c0f16] flex items-center justify-center transition-colors shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#82b29a] px-2.5 py-1 rounded-full bg-[#82b29a]/10">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#1c2130] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-[#5e6573] font-sans text-[15px] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#426a57] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#82b29a] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HANDBOOK DISTRIBUTION & SUPPORT CALLOUT (Atmospheric Community Photo + Floating Badges) */}
      <section className="py-24 sm:py-32 bg-[#121620] text-white relative overflow-hidden border-t border-white/10">
        {/* Layer 1: Atmospheric Community Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25"
          style={{ backgroundImage: 'url(/img/cta_community_bg.jpg)' }}
        />

        {/* Layer 2: Deep Dark Frosted Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121620]/95 via-[#121620]/85 to-[#121620]/98 pointer-events-none" />

        {/* Layer 3: Topographic Contour Object (No-BG) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.06] invert"
          style={{
            backgroundImage: "url('/img/round_shape.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Layer 4: Dark Community Hands & Hearts Shape (causes_shape.png) */}
        <div
          className="absolute inset-x-0 bottom-0 h-56 pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/img/causes_shape.png')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom center',
            backgroundSize: 'auto 200px',
          }}
        />

        {/* Layer 5: Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#82b29a]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#e07a5e]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">
          {/* Senior UI/UX Revolving Stamp / Seal */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#82b29a] font-['Rajdhani'] font-bold text-xs tracking-[0.2em] uppercase">
            <Award className="w-3.5 h-3.5 text-[#82b29a]" />
            <span>BRING THE HANDBOOK TO YOUR SCHOOL OR WORKPLACE</span>
          </div>

          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Need Printed Copies For Your Community?
          </h2>

          <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with schools, sports associations, and youth programs across British Columbia to provide physical handbook copies and mental health presentation resources.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pdf/Our_Handbook_Camo_Friday.pdf"
              download="Our_Handbook_Camo_Friday.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#82b29a] hover:bg-[#97c5ad] text-[#0c0f16] font-['Rajdhani'] font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Free PDF</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Rajdhani'] font-bold text-xs uppercase tracking-widest rounded-full border border-white/25 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#82b29a]" />
              <span>Request Physical Copies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHandbook;

