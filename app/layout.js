/** @format */

import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={urban.variable}>{children}</body>
    </html>
  );
}