import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import React from "react"; // Import React to use React types

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons: React.ReactNode[] = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="flex h-full flex-col">
      {" "}
      {/* Set flex direction to column and full height */}
      <div
        className="wow fadeInUp dark:shadow-three dark:hover:shadow-gray-dark dark:bg-dark flex-grow rounded-sm bg-white p-6 shadow-two duration-300 hover:shadow-one lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="dark:border-white dark:border-opacity-10 dark:text-white mb-8 overflow-hidden overflow-ellipsis whitespace-normal border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div className="w-full">
            <h3 className="dark:text-white mb-1 text-lg font-semibold text-dark lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="overflow-clip text-sm text-body-color">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
