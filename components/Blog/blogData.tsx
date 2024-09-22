import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Desktop Repairs",
    paragraph:
      "Ensure your desktop runs smoothly with professional repair services that address hardware and software issues efficiently, maximizing performance and longevity.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Vishal",
      image: "/images/blog/-01.png",
      designation: "Student",
    },
    tags: ["Desktop"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Windows Support",
    paragraph:
      "Get expert assistance for Windows-related problems, from system optimization to troubleshooting, ensuring your operating system functions flawlessly.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Vishnu",
      image: "/images/blog/or-02.png",
      designation: "Student",
    },
    tags: ["Windows"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Laptop Services",
    paragraph:
      "Enjoy convenient and reliable laptop repair solutions at home, with skilled technicians ready to handle everything from minor fixes to major upgrades.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Vaas",
      image: "/images/blog/ar-03.png",
      designation: "Student",
    },
    tags: ["Laptop"],
    publishDate: "2024",
  },
];
export default blogData;
