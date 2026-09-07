import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';

const OurStory: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb title="Our Story" bgImage="/img/breadcrumb_img.jpg" />

      {/* Story Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-base">
                Our Story
              </h5>
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#363a57] leading-tight">
                #Camo Friday was founded in memory of Mitchell Slater
              </h2>

              <p className="text-[#888] leading-relaxed text-[17px]">
                On May 26, 2017 Mitchell died by suicide at the age of 15.
                <br /><br />
                He didn’t have a history of depression. He didn’t have a history of anxiety. He didn’t have a history of suicide attempts.
                Mitchell seemed like a happy and healthy teenager but, in addition to wearing camo clothing on the regular, he was also camouflaging his personal struggle.
              </p>

              <p className="text-[#888] leading-relaxed text-[17px]">
                What Mitchell didn’t know was that his clothing of choice would change the face of mental health forever. Mitchell’s friends and family are committed to making his life a caveat for change and Camo Friday is our first initiative.
              </p>

              <div className="pt-4">
                <Link
                  to="/our-work"
                  className="inline-block px-8 py-4 bg-[#e07a5e] hover:bg-[#d14f42] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded transition-all shadow-md"
                >
                  Our Work
                </Link>
              </div>
            </div>

            {/* Right Mitchell Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-3 bg-white border border-gray-100 shadow-2xl rounded-2xl">
                <img
                  src="/img/Mitchell.png"
                  alt="Mitchell Slater"
                  className="w-full max-w-[280px] h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
