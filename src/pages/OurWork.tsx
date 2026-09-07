import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';

const OurWork: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb title="Our Work" bgImage="/img/breadcrumb_img.jpg" />

      {/* Movement Details Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
              #CamoFriday
            </h2>
            <p className="text-[#888] leading-relaxed text-[17px]">
              CamoFriday started as a group of family and friends who were mourning the loss of their son, brother, boyfriend, grandson and friend Mitchell, who we lost to suicide on May 26, 2017. Since Mitchell loved wearing his camo pants, we all started doing the same as a way to remember him.
            </p>
            <p className="text-[#888] leading-relaxed text-[17px]">
              From there, other supporters joined and a movement to create awareness of mental illness and end the stigma associated with it was born.
              <br /><br />
              The Camo Friday Team is involved in their local community to promote mental health awareness and eliminate the stigma surrounding mental illness.
              <br /><br />
              We strive to bring mental health and those suffering from it out from their various forms of camouflage whatever way we can.
            </p>

            {/* Two Images Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/img/causes/causes_thumb_005.png"
                  alt="Camo Friday Movement"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/img/causes/causes_thumb_006.png"
                  alt="Camo Friday Awareness"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Work Initiatives Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <img src="/img/icon/support_icon.png" alt="Support" className="w-10 h-10 object-contain" />
            <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
              Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Ride for Mitch */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="/img/event/event_thumb_01.png"
                alt="Ride For Mitch"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-4">
                <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] leading-snug">
                  Ride <br /> For Mitch
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Join us for <span className="text-[#363a57] font-semibold">Annual Ride</span>
                </p>
                <Link
                  to="/ride-for-mitch"
                  className="inline-block px-6 py-2.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded transition-colors"
                >
                  Ride For Mitch
                </Link>
              </div>
            </div>

            {/* Card 2: Our Handbook */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="/img/event/event_thumb_02.png"
                alt="Our Handbook"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-4">
                <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] leading-snug">
                  Our <br /> Handbook
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Learn About <span className="text-[#363a57] font-semibold">Mental Health</span>
                </p>
                <Link
                  to="/our-handbook"
                  className="inline-block px-6 py-2.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Card 3: Scholarship */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="/img/event/event_thumb_03.png"
                alt="#CamoFriday Scholarship"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-4">
                <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] leading-snug">
                  #CamoFriday <br /> Scholarship
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Learn About <span className="text-[#363a57] font-semibold">#CAMOFRIDAY SCHOLARSHIP</span>
                </p>
                <Link
                  to="/scholarship"
                  className="inline-block px-6 py-2.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded transition-colors"
                >
                  Scholarship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
