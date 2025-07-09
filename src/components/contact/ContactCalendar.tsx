import React from 'react';
import CalEmbed from '../calendar/CalEmbed';

interface ContactCalendarProps {
  className?: string;
}

const ContactCalendar: React.FC<ContactCalendarProps> = ({ className = '' }) => {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <h3 className="text-xl font-medium mb-4">Schedule a Meeting</h3>
      <CalEmbed 
        src="https://calendar.zoho.com/zc/ui/embed/#calendar=zz08011230b90f11f7d9e4f845d3466bf542b203c85792616eef005cce40c051b56dd6ff3b7f21ca86a6ce7ce3b245f62337f9fb78&title=taha&type=4&language=en&timezone=America%2FToronto&showTitle=1&showTimezone=1&startingDayOfWeek=0&timeFormat=0&color=0&showLogo=1" 
        title="taha"
        width="650"
        height="500"
        style={{ height: '600px' }}
      />
    </div>
  );
};

export default ContactCalendar;