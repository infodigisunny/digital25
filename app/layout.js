/** @format */

import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/style.css";
const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head><Script
  id="website-schema-1"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/#website",
      "url": "https://adfinityclarity.com/",
      "name": "Adfinity Clarity",
      "description": "Unlock Your Business Revenue With Internet Marketing Agency",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/></head>
      <body className={urban.variable}>{children}</body>
    </html>
  );
}

