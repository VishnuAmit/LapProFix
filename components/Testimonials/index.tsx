"use client";  // Mark this file as a Client Component

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { useEffect, useRef } from "react";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vishal Aadiith G",
    designation: "Student of Amrita Vishwa Vidyapeetham",
    content:
      "LapProFix is a game-changer! The seamless booking process and the convenience of getting my laptop serviced at home is exactly what I've been looking for.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 2,
    name: "Vishnu KP",
    designation: "Student of Amrita Vishwa Vidyapeetham",
    content:
      "The added chatbot feature makes the entire experience even smoother. Highly recommend for anyone needing quick and reliable laptop repairs!",
    image: "/images/testimonials/auth-03.png",
    star: 4,
  },
  {
    id: 3,
    name: "Vaas",
    designation: "IIT Madras",
    content:
      "The real-time updates on repair progress kept me informed throughout, which was a great touch.Their technicians are highly skilled and professional.",
    image: "/images/testimonials/auth-03.png",
    star: 3,
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let scrollAmount = 0;
      const scrollSpeed = 8;

      const scrollTestimonials = () => {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollTestimonials);
      };

      scrollTestimonials();
    }
  }, []);

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Customer reviews"
          paragraph="Customer reviews are crucial as they provide valuable feedback for improving products or services and help build trust and credibility with potential customers."
          center
        />

        {/* Wrapping the testimonials in a scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-x-8 overflow-x-hidden whitespace-nowrap"
          style={{ display: 'flex', gap: '2rem', overflowX: 'hidden', whiteSpace: 'nowrap' }}
        >
          {/* Duplicating testimonials for a continuous effect */}
          {[...testimonialData, ...testimonialData].map((testimonial, index) => (
            <div key={index} className="inline-block w-full">
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
