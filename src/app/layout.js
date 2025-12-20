"use client";

/** @format */

import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/style.css";
import "./assets/css/fix-backgrounds.css";
import "animate.css";
import Script from "next/script";
import { usePathname } from 'next/navigation';
import BackToTop from "../components/BackToTop";



const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </head>
      <body className={urban.className}>
       
          {children}
          
          <BackToTop />
      </body>
    </html>
  );
}
