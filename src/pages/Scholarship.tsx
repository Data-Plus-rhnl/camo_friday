import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const Scholarship: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Giving Back"
        title="THE MITCHELL SLATER #CAMOFRIDAY SCHOLARSHIP"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/img/about_section_img-scholar.png"
                  alt="Mitchell Slater Scholarship"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Scholarship Info */}
            <div className="lg:col-span-6 space-y-6">
              <h5 className="font-['Rajdhani'] text-[#82b29a] font-bold tracking-widest uppercase text-base">
                Giving Back
              </h5>
              <h2 className="font-['Rajdhani'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#363a57] leading-tight">
                The Mitchell Slater #CamoFriday Scholarship
              </h2>

              <div className="text-[#888] leading-relaxed text-[16px] space-y-4">
                <p>
                  The Mitchell Slater Foundation is offering post-secondary scholarships for any B.C. youth currently graduating from high school who have been touched by mental illness, either themselves or a loved one.
                </p>
                <p>
                  The purpose of this scholarship is to help the student tear down some of the walls that make transition to post-secondary so incredibly challenging by awarding scholarships to qualified students.
                </p>
                <p>
                  You may submit your story of life with mental illness either in writing, through photography, art, video, or any other creative way that you can think of. Sharing the story about your mental health journey is in line with our fundamental philosophy of speaking out. We believe that telling your story of how you’ve overcome your barriers can become someone else’s survival guide. We accept any form of application that will convey to us what your life’s journey has been up until this point and please include in your submissions what your intended future plans might be.
                </p>
                <p>
                  Good luck to all applicants and congratulations on your upcoming graduation. Submissions can be handed in to your school Career Counselor, emailed or sent directly to us.
                </p>
                <p className="font-semibold text-[#363a57] italic">
                  * This is not an academic based scholarship.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:camofridays@gmail.com"
                  className="inline-block px-8 py-4 border-2 border-[#82b29a] text-[#82b29a] hover:bg-[#82b29a] hover:text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded transition-all shadow-sm"
                >
                  Contact Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
