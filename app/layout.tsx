// "use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />

//       <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
//         <Providers>
//           <Header />
//           {children}
//           <Footer />
//           <ScrollToTop />
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import { Providers } from "./providers";

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname

  // Check if the current path is the homepage
  const isHomepage = pathname === "/";

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {isHomepage && <Header />} {/* Render Header only on homepage */}
          {children}
          {isHomepage && <Footer />} {/* Render Footer only on homepage */}
          {isHomepage &&<ScrollToTop />} 
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

