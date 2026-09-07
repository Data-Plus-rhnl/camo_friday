import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const RideForMitch: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Event"
        title="Ride For Mitch"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/img/about_section_img-ride.png"
                  alt="Annual Ride for Mitch"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-base">
                Ride For Mitch
              </h5>
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#363a57] leading-tight">
                Our first Annual Ride for Mitch was held May 26, 2021
              </h2>

              <p className="text-[#888] leading-relaxed text-[17px]">
                Mental Health awareness has never been more important and the need for community support is crucial! The Annual Ride for Mitch aims to spread awareness within our communities on the importance of mental health initiatives.
                <br /><br />
                Join us in honouring Mitchell and ride for all those who struggle with mental health at this years Ride for Mitch on May 28, 2022 at 11am. Check out our{' '}
                <a
                  href="https://www.facebook.com/camofridays/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#82b29a] font-semibold hover:underline"
                >
                  Facebook event page
                </a>{' '}
                for more details.
                <br /><br />
                <span className="font-semibold text-[#363a57]">Email:</span>{' '}
                <a href="mailto:rideformitch@gmail.com" className="text-[#82b29a] hover:underline">
                  rideformitch@gmail.com
                </a>
              </p>

              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/fLPA5zr95ZAxU67U9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-4 border-2 border-[#82b29a] text-[#82b29a] hover:bg-[#82b29a] hover:text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded transition-all shadow-sm"
                >
                  Ride For Mitch Route
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RideForMitch;
