
import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion text-black">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header cursor-pointer flex justify-between items-center py-3 px-4 border-b border-gray-300"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="font-medium">{item.question}</h2>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-body py-3 px-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
