import React, { useEffect } from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';
import Section from '../components/ui/Section';
import CalEmbed from '../components/calendar/CalEmbed';
import '../styles/zoho-form.css';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | UPLIFT Technologies';
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 gradient-bg relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-violet/20 rounded-full filter blur-[100px]"></div>
        
        <div className="container-custom relative z-10">
          <div
            className="max-w-3xl"
          >
            <h1 className="font-poppins font-semibold mb-6">
              Connect with <span className="gradient-text">UPLIFT Technologies</span>
            </h1>
            <p className="text-xl text-white/80">
              Have questions or ready to discuss your business needs? Get in touch with our team for tailored solutions and expert support.
            </p>
          </div>
        </div>
      </div>
      
      {/* Calendar Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Book Your Consultation</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Select a convenient time for a personalized discussion. We'll explore your requirements and how UPLIFT can optimize your operations.
          </p>
        </div>
        
        <div className="glass-card p-8">
          <CalEmbed 
            src="https://calendar.zoho.com/zc/ui/embed/#calendar=zz08011230b90f11f7d9e4f845d3466bf542b203c85792616eef005cce40c051b56dd6ff3b7f21ca86a6ce7ce3b245f62337f9fb78&title=taha"
            title="taha"
            width="650"
            height="500"
          />
        </div>
      </Section>
      
      {/* Contact Form Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className="relative"
          >
            <h2 className="text-3xl font-semibold mb-6">Submit an Inquiry</h2>
            <p className="text-white/80 mb-8">
              Complete our brief discovery form. Our team will respond within 24 hours to understand your needs and propose effective strategies.
            </p>
            
            <div className="glass-card p-8">
              <iframe 
                aria-label='Uplift Technologies Discovery Form' 
                frameBorder="0" 
                style={{height: '500px', width: '99%', border: 'none'}} 
                src='https://forms.zohopublic.com/tahauplifttec1/form/UpliftTechnologiesDiscoveryForm/formperma/vARQawZk-3SV30FFnZL2mqa1HP_TsU1a_CGswypRAag'
              />
            </div>
          </div>
          
          <div
            className="relative"
          >
            <div className="glass-card p-8 h-full">
              <h2 className="text-2xl font-semibold mb-6">Direct Contact & Support</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Reach Our Team Directly</h3>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="tel:8556435404" 
                        className="flex items-center text-white/80 hover:text-electric-violet"
                      >
                        <Phone size={20} className="mr-4 text-electric-violet" />
                        <span>(855) 643-5404</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:business@uplift-technologies.com" 
                        className="flex items-center text-white/80 hover:text-electric-violet"
                      >
                        <Mail size={20} className="mr-4 text-electric-violet" />
                        <span>business@uplift-technologies.com</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://linkedin.com/company/uplift-technologies" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-white/80 hover:text-electric-violet"
                      >
                        <Linkedin size={20} className="mr-4 text-electric-violet" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Operational Hours</h3>
                  <p className="text-white/80 mb-2">
                    Our dedicated team provides 24/7 support for your business continuity.
                  </p>
                  <p className="text-white/80">
                    Sales & Client Support: Monday - Friday, 8am - 8pm EST
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Common Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-electric-violet text-sm sm:text-base">How quickly can you start working with us?</h4>
                      <p className="text-white/80 mt-1 text-sm sm:text-base">
                        Typically, we can begin within 1-2 weeks of finalizing our agreement, depending on the complexity of your needs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-electric-violet">Do you require long-term contracts?</h4>
                      <p className="text-white/80 mt-1">
                        We offer flexible engagement models, including month-to-month options and longer-term agreements with preferred rates.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-electric-violet">How do you ensure data security?</h4>
                      <p className="text-white/80 mt-1">
                        We maintain strict HIPAA, GDPR, and PIPEDA compliance with regular security audits and encrypted data transmission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section className="bg-deep-purple/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Global Reach, Local Impact</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Our remote global team delivers specialized expertise to businesses across North America, the UK, and the GCC, ensuring localized and effective client solutions.
          </p>
        </div>
        
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-[250px] sm:h-[350px] md:h-[400px]">
          <div className="absolute inset-0 bg-neutral-900/50 z-10 flex items-center justify-center">
            <div className="glass-card p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md text-center mx-4">
              <h3 className="text-2xl font-medium mb-4">Ready to Optimize Your Business?</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6">
                Schedule a consultation today and discover how our services can drive efficiency, reduce costs, and accelerate your growth.
              </p>
            </div>
          </div>
          <img 
            src="https://cplyjoeqd4.ufs.sh/f/gAmqiT9pUNhrWX2rELwIaUN5ZeFJCVGqXkKD9szcLwxHtEbg" 
            alt="Global team collaboration" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
        </div>
      </Section>
    </>
  );
};

export default ContactPage;