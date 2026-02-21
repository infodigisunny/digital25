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
      <head>
        <Script
  id="organization-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://adfinityclarity.com/#organization",
      "name": "Adfinity Clarity",
      "url": "https://adfinityclarity.com/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://adfinityclarity.com/#/schema/logo/image/",
        "url": "https://adfinityclarity.com/full-logo.webp",
        "contentUrl": "https://adfinityclarity.com/full-logo.webp",
        "width": 289,
        "height": 76,
        "caption": "Adfinity Clarity"
      },
      "image": {
        "@id": "https://adfinityclarity.com/#/schema/logo/image/"
      },
      "sameAs": [
        "https://www.facebook.com/adfinityclarity/",
        "https://www.youtube.com/@AdfinityClarity",
        "https://www.instagram.com/adfinityclarity/",
        "https://www.linkedin.com/company/adfinity-clarity/"
      ]
    })
  }}
/>
      </head>
      <body className={urban.variable}>{children}</body>
    </html>
  );
}

