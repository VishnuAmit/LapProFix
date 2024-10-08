"use client";
import { useEffect, useState } from "react";
import Accordion from "@/components/Faq/Accordion";

const FAQPage: React.FC = () => {
  const [faqItems, setFaqItems] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 


  //fetching faqs data from database
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/Faq/getall'); 
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqItems(data.faqs); 
        console.log(data);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchFaqs(); 
  }, []);

  if (loading) {
    return <div>Loading FAQs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-8 text-black pb-10">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default FAQPage;
