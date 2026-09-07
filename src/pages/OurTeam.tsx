import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Quote, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  story: string | React.ReactNode;
  tag: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rachel Slater',
    role: 'Founder & Mitchell\'s Mother',
    image: '/img/causes/causes_thumb_1.png',
    tag: 'Founding Voice',
    story: (
      <>
        Far too many of us, myself included, have lost children, friends and loved ones to suicide. If my son Mitchell had been educated about mental illness and its effects and symptoms maybe he would still be here today. If myself, my children, our friends and family knew what signs or symptoms to look for, maybe Mitchell would still be here today.
        <br /><br />
        If Camo Friday can educate just one person about mental illness, save one parent the grief I have felt, spare one child the loss of a sibling, and teach one friend what to look for in a hurting friend — that success will be immeasurable to me.
      </>
    ),
  },
  {
    name: 'Kathleen',
    role: 'Director of Outreach',
    image: '/img/causes/causes_thumb_2.png',
    tag: 'Advocacy Lead',
    story: (
      <>
        Creating mental health awareness and reducing the stigma surrounding mental health issues is important to me because we are all suffering from something. I want to help lend strength, in any form, to those who can’t find it for themselves and help combat this illness one person at a time.
        <br /><br />
        Mental illness and ignorance robs people of happiness, dignity, freedom, and peace. If CamoFriday and the awareness it creates impacts one person, one thought, or one action, all our efforts are worthwhile.
      </>
    ),
  },
  {
    name: 'Mike',
    role: 'Community Coordinator',
    image: '/img/causes/causes_thumb_3.png',
    tag: 'Community Liaison',
    story: (
      <>
        #CamoFriday has become one of the most important initiatives for my family because we have realized how much work needs to be done in the area of mental health.
        <br /><br />
        After suffering an incredible loss with our close family friends we quickly became aware that more efforts need to be made to ensure that families and individuals struggling with mental illness feel more supported and have options for finding help. We need to work together as a community to end the stigma.
      </>
    ),
  },
  {
    name: 'Leanne',
    role: 'Youth Programs Advisor',
    image: '/img/causes/causes_thumb_4.png',
    tag: 'Youth Program Director',
    story: (
      <>
        I am passionate about this foundation because I do not want to see another family go through the devastation of loss due to suicide. Suicide is second only to accidents as the leading cause of death for young people in Canada.
        <br /><br />
        My mission is to create awareness, find solutions, foster hope, and end the stigma surrounding mental illness. We are trying to change the way people think about mental illness by talking, listening and taking action. Together we can change the face of mental illness.
      </>
    ),
  },
  {
    name: 'Carrie',
    role: 'Educational Outreach',
    image: '/img/causes/causes_thumb_5.png',
    tag: 'School Curriculum Lead',
    story: (
      <>
        Everyday people struggle with mental health. Children today face so many more challenges compared to children in the past. Having struggled with depression for many years, I feel it is necessary to spread awareness about Mental Health.
        <br /><br />
        It is critical to educate and share our knowledge with those who are not aware of Mental Health as an important piece of our overall health. For me, the most important issue in Mental Health today is educating children in school and making Mental Health part of the curriculum from early elementary through high school.
      </>
    ),
  },
  {
    name: 'Tania',
    role: 'Events & Engagement',
    image: '/img/causes/causes_thumb_0.5.png',
    tag: 'Engagement Director',
    story: (
      <>
        I’m so honored to be a part of the Camo Friday team. In the short time Camo Friday has been around, I already feel like we have made an impact on so many lives. People want to be heard and to feel safe to talk about what they are going through.
        <br /><br />
        The stigma surrounding mental health needs to change and in time we’re hoping that people will feel more secure and willing to ask for help. One goal of ours is to create a mental health program within our schools to educate our children on the true meaning of mental wellness.
      </>
    ),
  },
];

const OurTeam: React.FC = () => {
  return (
    <div className="w-full">
      {/* Elevated Blended Camo Hero Banner */}
      <Breadcrumb
        subtitle="WHO WE ARE"
        title="Our Team"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* Layered Showcase Section with Dot-Matrix & Vector Watermarks */}
      <section className="relative py-24 sm:py-32 bg-[#faf9f5] overflow-hidden">
        {/* Background Vector Objects & Dot Matrix Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: 'url(/img/gray_map_bg.png)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#82b29a]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#e07a5e]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Contour Elevation Rings */}
        <div
          className="absolute -top-20 -right-20 w-[480px] h-[480px] pointer-events-none opacity-[0.06] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />
        <div
          className="absolute bottom-10 -left-20 w-[420px] h-[420px] pointer-events-none opacity-[0.05] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />

        {/* Subtle Watermark Community Graphic */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.035] bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: 'url(/img/about_bg_1.png)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Introduction Pill & Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#82b29a]/25 text-[#363a57] text-xs uppercase tracking-widest font-bold shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#82b29a] animate-pulse"></span>
              Dedicated Leadership & Community Voices
            </div>
            <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl font-bold uppercase text-[#363a57] tracking-tight">
              Driven by Love, <span className="text-[#82b29a]">United by Purpose</span>
            </h2>
            <p className="mt-4 text-[#666] text-base sm:text-lg leading-relaxed">
              Every member of our leadership team has been intimately touched by mental health struggles or the profound heartbreak of loss. Meet the dedicated individuals transforming grief into provincial action.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#82b29a]/50 transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Floating Role Badge */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 h-80 sm:h-88">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18211b]/80 backdrop-blur-md border border-[#82b29a]/40 text-[#82b29a] text-[11px] font-bold uppercase tracking-wider shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#82b29a]" />
                      {member.tag}
                    </span>
                  </div>

                  {/* Name and Role Overlay on bottom of image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase tracking-wide drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#82b29a] drop-shadow-sm">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content & Story */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative">
                  {/* Subtle quote watermark */}
                  <div className="absolute top-4 right-6 text-gray-100/90 pointer-events-none">
                    <Quote className="w-12 h-12 text-[#82b29a]/10" />
                  </div>

                  <div className="relative z-10 text-[#555] text-[14.5px] leading-relaxed">
                    {member.story}
                  </div>

                  {/* Footer Accent */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-[#82b29a]">
                      <Heart className="w-3.5 h-3.5 fill-[#82b29a]/20" />
                      Community Advocate
                    </span>
                    <span className="font-['Rajdhani'] uppercase tracking-wider text-gray-400 font-bold">
                      #CamoFriday
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pledge & Join Banner */}
          <div className="mt-20 relative rounded-3xl overflow-hidden bg-[#18211b] border border-[#82b29a]/30 p-8 sm:p-14 shadow-2xl">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'url(/img/breadcrumb_story_bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-[#82b29a]/20 text-[#82b29a] text-xs font-bold uppercase tracking-widest mb-3 border border-[#82b29a]/30">
                  Join Our Extended Family
                </span>
                <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-bold uppercase text-white tracking-wide">
                  Want to Volunteer or Share Your Story?
                </h3>
                <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                  We are constantly expanding our team of school liaisons, event volunteers, and community champions. Every voice helps dismantle the silence.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/become-volunteer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Become a Volunteer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-xl backdrop-blur-md border border-white/20 transition-all"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
