
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ExpandedServiceCardsProps {
  cards: Array<{ title: string; subtitle: string }>;
}

const ExpandedServiceCards = ({ cards }: ExpandedServiceCardsProps) => {
  return (
    <div className="mt-4 bg-white rounded-lg border border-gray-100 shadow-sm animate-accordion-down">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 p-3 rounded-lg bg-growzzy-light/50 hover:bg-growzzy-light/80 transition-colors duration-200"
            >
              <CheckCircle className="w-5 h-5 text-growzzy-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">{card.title}</h4>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandedServiceCards;
