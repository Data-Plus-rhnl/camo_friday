import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Download } from 'lucide-react';

const OurHandbook: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Useful Resources"
        title="Our Handbook"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/img/about_section_img.png"
                  alt="Camo Friday Handbook"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Handbook Info */}
            <div className="lg:col-span-6 space-y-6">
              <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-base">
                Our Handbook
              </h5>
              <h2 className="font-['Rajdhani'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#363a57] leading-tight">
                Education is key and we are committed to getting resources to those in need
              </h2>

              <p className="text-[#888] leading-relaxed text-[17px]">
                According to the Canadian Mental Health Association, in any given year, 1 in 5 people in Canada will personally experience a mental health problem or illness. Many people struggle to help themselves or those around them because they feel they don’t have the necessary tools.
              </p>

              <p className="text-[#888] leading-relaxed text-[17px]">
                Camofriday’s Handbook was created to equip parents, teachers or individuals with information on how to recognize the signs of mental illness as well as to provide tools and information on how to get help or give help to someone who may be struggling. Education is key and we are committed to getting resources to those in need.
              </p>

              <div className="pt-4">
                <a
                  href="/pdf/Our_Handbook_Camo_Friday.pdf"
                  download="Our_Handbook_Camo_Friday.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#82b29a] text-[#82b29a] hover:bg-[#82b29a] hover:text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded transition-all shadow-sm"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Handbook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHandbook;
