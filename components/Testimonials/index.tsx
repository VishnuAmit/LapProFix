"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import "./index.css";
import { useEffect } from "react";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vishal Aadiith G",
    designation: "Student of Amrita Vishwa Vidyapeetham",
    content:
      "LapProFix is a game-changer! The seamless booking process and the convenience of getting my laptop serviced at home is exactly what I've been looking for.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Vishnu KP",
    designation: "Student of Amrita Vishwa Vidyapeetham",
    content:
      "The added chatbot feature makes the entire experience even smoother. Highly recommend for anyone needing quick and reliable laptop repairs!",
    image: "/images/testimonials/author-02.png",
    star: 4,
  },
  {
    id: 3,
    name: "Vaas",
    designation: "IIT Madras",
    content:
      "The real-time updates on repair progress kept me informed throughout, which was a great touch. Their technicians are highly skilled and professional.",
    image: "/images/testimonials/author-03.png",
    star: 3,
  },
];

const Testimonials = () => {
  useEffect(() => {
    console.log("Image paths:");
    testimonialData.forEach((testimonial, index) => {
      console.log(`${index + 1}: ${testimonial.image}`);
    });
  }, []);

  return (
    <section className="dark:bg-bg-color-dark relative z-10 bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Customer reviews"
          paragraph="Customer reviews are crucial as they provide valuable feedback for improving products or services and help build trust and credibility with potential customers."
          center
        />

        <div className="relative overflow-hidden">
          <div className="animate-scroll flex">
            {[...testimonialData, ...testimonialData].map((testimonial, index) => (
              <div key={index} className="mx-4 flex-shrink-0 w-[300px]">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;