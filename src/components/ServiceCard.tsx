
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    expandedCards: Array<{ title: string; subtitle: string }>;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard = ({ service, index, isExpanded, onToggle }: ServiceCardProps) => {
  return (
    <div className="service-card cursor-pointer" onClick={onToggle}>
      <div className="service-icon">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-growzzy-primary font-medium">
          {service.expandedCards.length} specialized services
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-growzzy-primary transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`} 
        />
      </div>
    </div>
  );
};

export default ServiceCard;
