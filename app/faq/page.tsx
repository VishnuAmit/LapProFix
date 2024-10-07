"use client"
import Accordion from "@/components/Faq/Accordion";
import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Modal from "@/components/Faq/Modal"; 

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const faqItems = [
    {
      question: 'What types of laptop issues do you repair?',
      answer: 'We handle a wide range of laptop issues, including hardware malfunctions, software problems, screen replacements, battery issues, and more. If you\'re experiencing any problems, just ask!'
    },
    {
      question: 'How does the at-home repair service work?',
      answer: 'Our skilled technicians will come to your location at a scheduled time that works for you. After diagnosing the issue, they will perform the necessary repairs on-site or take your laptop for repairs if needed.'
    },
    {
      question: 'Are your technicians qualified?',
      answer: 'Yes, all our technicians are highly trained and experienced in laptop repairs. They are equipped with the necessary tools and knowledge to address a variety of laptop issues.'
    },
    {
      question: 'How long do repairs typically take?',
      answer: 'The time required for repairs can vary based on the issue. Minor repairs may be completed within an hour, while more complex problems may take longer. Our technician will provide an estimated time after diagnosing the issue.'
    },
    {
      question: 'Do you offer a warranty on repairs?',
      answer: 'Yes, we offer a warranty on all our repairs. If you experience any issues related to the repair within the warranty period, we will fix it at no additional cost.'
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept various payment methods, including credit/debit cards, cash, and online payment options. Payment details will be discussed before the service is provided.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment through our website, or by contacting us directly via phone or email. We will work with you to find a convenient time.'
    },
    {
      question: 'Is there a service fee for at-home visits?',
      answer: 'We may charge a nominal service fee for at-home visits, depending on your location and the nature of the repair. This fee will be communicated during the scheduling process.'
    },
    {
      question: 'Can you fix laptops of any brand?',
      answer: 'Yes, our technicians are experienced in repairing laptops from various brands, including Dell, HP, Lenovo, Apple, and more.'
    },
    {
      question: 'What should I do if my laptop is not turning on?',
      answer: 'If your laptop won\'t turn on, try to check the power connection and ensure the battery is charged. If it still doesn\'t respond, contact us for assistance, and we will send a technician to diagnose the issue.'
    }
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
        <Breadcrumb
        pageName="Faq's Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    <div className="max-w-2xl mx-auto mt-8 text-black pb-10">
        
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-l-md p-2 flex-grow"
        />
        <button 
          onClick={handleSearch}
          className="bg-violet-600 text-white rounded-r-md px-4 py-2"
        >
          Search
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 mb-2">Can't find your answer?</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-violet-600 text-white rounded-md px-4 py-2"
        >
          Ask Us a Question
        </button>
      </div>

      <Accordion items={faqItems} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    </div>
  );
};

export default FAQPage;
