"use client";

/** @format */

import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/style.css";
import "animate.css";
import Script from "next/script";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function WOWInitializer() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Only run on client side
    import('wowjs').then(({ default: WOW }) => {
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
      }).init();
    });
  }, [pathname]);

  return null;
}

<Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />;

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urban.variable}>
        {children}
        <WOWInitializer />
      </body>
    </html>
  );
}
