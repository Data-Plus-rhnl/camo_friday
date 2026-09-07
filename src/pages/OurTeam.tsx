import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

interface TeamMember {
  name: string;
  image: string;
  story: string | React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rachel',
    image: '/img/causes/causes_thumb_1.png',
    story: (
      <>
        Far too many of us, myself included, have lost children, friends and loved ones to suicide. If my son, Mitchell had been educated about mental illness and its effects and symptoms maybe he would still be here today. If myself, my children, our friends and family knew what signs or symptoms to look for, maybe Mitchell would still be here today.
        <br /><br />
        If Camo Friday can educate just one person about mental illness, save one parent the grief I have felt, spare one child the loss of a sibling, teach one friend what to look for in a hurting friend. That success will be immeasurable to me.
      </>
    ),
  },
  {
    name: 'Kathleen',
    image: '/img/causes/causes_thumb_2.png',
    story: (
      <>
        Creating mental health awareness and reducing the stigma surrounding mental health issues is important to me because we are all suffering from something. I want to help lend strength, in any form, to those who can’t find it for themselves and help combat this illness one person at a time.
        <br /><br />
        Mental illness and ignorance surrounding mental health robs people of happiness, dignity, freedom, and peace. After experiencing the impact of mental illness in its most destructive form, I knew I had to do whatever possible to prevent others from experiencing the same. The most important change I want to see is ANY change. If CamoFriday and the awareness it creates impacts one person, one thought, or one action, all our efforts are worthwhile.
      </>
    ),
  },
  {
    name: 'Mike',
    image: '/img/causes/causes_thumb_3.png',
    story: (
      <>
        #CamoFriday has become one of the most important initiatives for my family because we have realized how much work needs to be done in the area of mental health.
        <br /><br />
        After suffering an incredible loss with our close family friends we quickly became aware that more efforts need to be made to ensure that families and individuals struggling with mental illness feel more supported and have options for finding help. We need to work together as a community and a society to support each other and end the stigma associated with mental illness.
      </>
    ),
  },
  {
    name: 'Leanne',
    image: '/img/causes/causes_thumb_4.png',
    story: (
      <>
        I am passionate about this foundation for a number of reasons but most especially because I do not want to see another family go through the devastation of loss due to suicide. Our youth are dying by suicide at an alarming rate. In the past 12 years we have lost 5,800 youth to suicide in Canada and I believe this number signals a severe mental health crisis in our country.
        <br /><br />
        Suicide is second only to accidents as the leading cause of death for young people in Canada. My mission is to create awareness, find solutions, foster hope, and end the stigma surrounding mental illness. We are trying to change the way people think about mental illness by talking, listening and taking action. Together we can change the face of mental illness.
      </>
    ),
  },
  {
    name: 'Carrie',
    image: '/img/causes/causes_thumb_5.png',
    story: (
      <>
        Everyday people struggle with mental health. Children today face so many more challenges compared to children in the past. Having struggled with depression for many years, I feel it is necessary to spread awareness about Mental Health. Why?
        <br /><br />
        <strong>1.</strong> Because it is critical to educate and share our knowledge with those who are not aware of Mental Health as an important piece of our overall health.<br />
        <strong>2.</strong> Sometimes it takes being personally affected by an issue to become more aware of its presence.<br />
        <strong>3.</strong> Because life can be so challenging, we all need to support each other and social media is a fantastic platform for us to share information.
        <br /><br />
        For me, the most important issue in Mental Health today is educating children in school and making Mental Health part of the curriculum from early elementary through to high school.
      </>
    ),
  },
  {
    name: 'Tania',
    image: '/img/causes/causes_thumb_0.5.png',
    story: (
      <>
        I’m so honored to be a part of the Camo Friday team. In the short time Camo Friday has been around, I already feel like we have made an impact on some lives. People want to be heard and to feel safe to talk about what they are going through, have gone through and what has helped them.
        <br /><br />
        The stigma surrounding mental health needs to change and in time we’re hoping that people will feel more secure and willing to ask for help. One goal of ours is to create a mental health program within our schools, to educate our children and youths the meaning of Mental Health. There will always be work on ending the stigma surrounding Mental Health but I feel like we’re on the right track in achieving some of our goals.
      </>
    ),
  },
];

const OurTeam: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="who WE are"
        title="Our Team"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden bg-gray-100 h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] mb-4">
                      {member.name}
                    </h3>
                    <div className="text-[#888] text-[15px] leading-relaxed">
                      {member.story}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
