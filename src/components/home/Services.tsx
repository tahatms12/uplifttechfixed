import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, BadgeDollarSign, Megaphone, PhoneCall, Palette, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="flex items-start gap-4 mb-6">
        <div className="text-electric-violet p-3 bg-electric-violet/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
      
      <div className="relative h-48 w-full rounded-lg overflow-hidden my-4">
        <img 
          loading="lazy" 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={18} className="text-electric-violet mt-1 mr-2 flex-shrink-0" />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Link 
          to={path}
          className="inline-flex items-center text-electric-violet font-medium hover:underline group"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <PhoneCall size={32} />,
      title: "Virtual Reception",
      description: "24/7 professional customer service and virtual reception coverage for US, UK & Canadian businesses.",
      link: "/services/front-desk",
      linkText: "Explore Professional Reception Services"
    },
    {
      icon: <BadgeDollarSign size={32} />,
      title: "Collections Services",
      description: "Recover outstanding accounts receivable with our compliant collection strategies for healthcare and B2B sectors.",
      link: "/services/collections",
      linkText: "Learn About Debt Collection Services"
    },
    {
      icon: <Users size={32} />,
      title: "Sales Outsourcing",
      description: "Scale your revenue with dedicated sales teams trained in your products. Available 24/7 for US, UK & Canadian markets.",
      link: "/services/sales",
      linkText: "Explore Outsourced Sales Operations"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Marketing Operations",
      description: "Drive growth with comprehensive marketing services, from content creation to campaign management in your target markets.",
      link: "/services/marketing",
      linkText: "View Strategic Marketing Services"
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Services",
      description: "Expert brand development and creative direction tailored for North American and UK market presence.",
      link: "/creative-direction",
      linkText: "See Creative Direction & Design Services"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Logistics Management",
      description: "Optimize your supply chain with expert logistics coordination and management across North America and the UK.",
      link: "/services/logistics",
      linkText: "Discover Supply Chain & Logistics Solutions"
    }
  ];

  return (
    <Section
      title="Outsourcing Solutions"
      subtitle="Comprehensive business process outsourcing services tailored for US, UK & Canadian markets, combining expert talent with cutting-edge technology."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            linkText={service.linkText}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;