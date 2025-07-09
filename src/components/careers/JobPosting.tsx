import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ChevronsUpDown, Check, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface JobPostingProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
  };
}

const JobPosting: React.FC<JobPostingProps> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      data-testid="job-posting-card"
      className="glass-card overflow-hidden"
    >
      <button 
        className="w-full flex flex-col md:flex-row md:items-center justify-between p-6"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`job-details-${job.id}`}
        aria-label={isExpanded ? `Collapse details for ${job.title}` : `Expand details for ${job.title}`}
      >
        <div className="flex-1">
          <h2 className="text-xl font-medium mb-2">{job.title}</h2>
          <div 
            className="flex flex-wrap gap-4 text-sm"
            data-testid="job-metadata"
          >
            <div className="flex items-center text-white/70">
              <Briefcase size={16} className="mr-2" />
              {job.department}
            </div>
            <div className="flex items-center text-white/70">
              <MapPin size={16} className="mr-2" />
              {job.location}
            </div>
            <div className="flex items-center text-white/70">
              <Clock size={16} className="mr-2" />
              {job.type}
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <ChevronsUpDown 
            size={24} 
            className={`text-electric-violet transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      
      {isExpanded && (
          <div
            id={`job-details-${job.id}`}
            className="px-6 pb-6"
          >
            <div className="pt-6 border-t border-neutral-800">
              <p className="mb-6">{job.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Responsibilities:</h3>
                <ul 
                  className="space-y-2"
                  data-testid="responsibilities-list"
                >
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-electric-violet mt-1 mr-2 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Requirements:</h3>
                <ul 
                  className="space-y-2"
                  data-testid="requirements-list"
                >
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-electric-violet mt-1 mr-2 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                to="/apply" 
                className="group"
                aria-label="Apply now for this position"
              >
                Apply Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        )}
    </div>
  );
};

export default JobPosting;