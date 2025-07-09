import React, { useEffect } from 'react';
import { Shield, Trophy, Users, Zap } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | UPLIFT Technologies';
  }, []);

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all interactions, ensuring transparency and trustworthiness across our operations.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Excellence',
      description: 'We continuously strive to exceed expectations, delivering exceptional quality and results through meticulous attention to detail.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, working closely with clients as true partners to achieve shared goals and success.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive continuous improvement.'
    }
  ];

  const team = [
    {
      name: 'Taha Syed',
      position: 'Founder & CEO',
      description: 'Visionary leader with years of experience in software development, supply chain management, data management, compliance implementation and software implementation.',
      image: '/images/gAmqiT9pUNhr1W4jrtKKpXVWvs9SzonqPt04iFJaeUgRD85u'
    },
    {
      name: 'Zoe Turner',
      position: 'Operations Manager',
      description: 'Brings meticulous teaching capabilities and ensures everything is working according to plan, maintaining high operational standards.',
      image: '/images/gAmqiT9pUNhrYEgoyjVvGagiQPkZIS78eT2lbXDK1sjz5c3t'
    },
    {
      name: 'Shahnawaz Arif',
      position: 'CMO',
      description: 'Years of experience in creating brand strategies, working with household brand names to enhance their market presence and recognition.',
      image: '/images/gAmqiT9pUNhrXoeIcaqcIpZMfK5wFztkhqWygG7oCTbeinJD'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/4JlBnp1v6U48LYcCDZiUMZzX7lfxvW3hEk5JKuRtbm1dNVHP')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        <div className="container-custom relative z-10 px-4">
          <div
            className="max-w-xl md:max-w-2xl lg:max-w-3xl"
          >
            <h1 className="font-poppins font-semibold mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
              UPLIFT Technologies: Your Partner in <span className="gradient-text block sm:inline">Business Transformation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              Unlock peak operational efficiency with UPLIFT Technologies. Our 24/7 outsourcing solutions combine expert talent and cutting-edge technology to deliver measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="relative"
          >
            <h2 className="gradient-text mb-6">Driving Operational Excellence</h2>
            <p className="text-lg text-white/80 mb-6">
              UPLIFT Technologies empowers businesses through strategic outsourcing and management consulting. We integrate expert talent with innovative software, ensuring adherence to industry best practices and delivering superior outcomes.
            </p>
            <p className="text-lg text-white/80">
              Achieve significant cost reduction and accelerate growth. Our unique blend of human expertise and technological efficiency enables seamless scalability, enhanced quality, and robust compliance for your operations.
            </p>
          </div>
          
          <div
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden max-w-md mx-auto">
              <img 
                src="https://cplyjoeqd4.ufs.sh/f/gAmqiT9pUNhrNquEC3m4Ed9yabGUxplmsqHrS6gF3CifNY8e"
                alt="UPLIFT team collaboration" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Values Section */}
      <Section
        title="Foundational Principles for Success"
        subtitle="Our core values define our commitment to client success and operational integrity."
        centered
        className="bg-deep-purple/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <Card key={value.title}>
              <div className="text-electric-violet mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Team Section */}
      <Section
        title="Our Leadership: Driving Your Success"
        subtitle="Meet the seasoned professionals leading UPLIFT Technologies, dedicated to achieving your business objectives."
        centered
        maxWidth="max-w-5xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center px-2">
          {team.map((member) => (
            <div 
              key={member.name}
              className="text-center flex flex-col items-center max-w-sm"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 md:mb-8 relative shadow-[0_0_20px_rgba(155,29,255,0.3)]">
                <img 
                  src={member.image}
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">{member.name}</h3>
              <p className="text-electric-violet mb-2 sm:mb-4 text-base sm:text-lg">{member.position}</p>
              <p className="text-white/70 text-sm sm:text-base max-w-xs mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;