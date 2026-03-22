import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  description: string;
  duration: string;
  topics: string[];
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center">
                {index + 1}
              </div>
              <div className="text-left">
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
              </div>
            </div>
            <ChevronDown 
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 pt-2 bg-gray-50">
              <p className="text-gray-700 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
