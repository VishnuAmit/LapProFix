"use client";

import { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import "./index.css";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      slider.style.cursor = "grabbing";
      slider.style.userSelect = "none";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      slider.style.cursor = "grab";
      slider.style.removeProperty("user-select");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="dark:bg-bg-color-dark relative z-10 bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Customer reviews"
          paragraph="Customer reviews are crucial as they provide valuable feedback for improving products or services and help build trust and credibility with potential customers."
          center
        />

        <div className="testimonial-slider" ref={sliderRef}>
          <div className="testimonial-track">
            {Array(50)
              .fill(testimonialData)
              .flat()
              .map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="testimonial-item">
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
