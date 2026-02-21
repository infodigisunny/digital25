/** @format */

import { Urbanist } from "next/font/google"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/style.css"

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
})

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://adfinityclarity.com/#website",
  "url": "https://adfinityclarity.com/",
  "name": "Adfinity Clarity: SEO & Digital Marketing Agency",
  "description": "AI Era SEO & Digital Marketing Company helping businesses grow revenue with smart internet marketing",
  "publisher": {
    "@id": "https://adfinityclarity.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://adfinityclarity.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US"
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://adfinityclarity.com/#organization",
  "name": "Adfinity Clarity",
  "url": "https://adfinityclarity.com/",
  "logo": {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "inLanguage": "en-US",
    "@id": "https://adfinityclarity.com/#/schema/logo/image/",
    "url": "https://adfinityclarity.com/full-logo.png",
    "contentUrl": "https://adfinityclarity.com/full-logo.png",
    "width": 289,
    "height": 76,
    "caption": "Adfinity Clarity",
    "name": "Adfinity Clarity Logo",
    "description": "Official logo of Adfinity Clarity SEO & Digital Marketing Agency"
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
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://adfinityclarity.com/#localbusiness",
  "name": "Adfinity Clarity",
  "description": "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  "url": "https://adfinityclarity.com/",
  "image": "https://adfinityclarity.com/full-logo.webp",
  "telephone": "+1 7906159557",
  "email": "contact@adfinityclarity.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "89 Haight Street, Haight-Ashbury",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94117",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.773972,
    "longitude": -122.431297
  },
  "areaServed": [
    { "@type": "Place", "name": "United States" },
    { "@type": "Place", "name": "Canada" },
    { "@type": "Place", "name": "United Kingdom" },
    { "@type": "Place", "name": "Australia" },
    { "@type": "Place", "name": "India" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/adfinity-clarity/",
    "https://www.facebook.com/adfinityclarity/",
    "https://www.youtube.com/@AdfinityClarity",
    "https://www.instagram.com/adfinityclarity/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Offered",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Digital Marketing Agency",
        "url": "https://adfinityclarity.com/digital-marketing",
        "description": "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services."
      },
      {
        "@type": "Service",
        "name": "SEO Company",
        "url": "https://adfinityclarity.com/seo-search-engine-optimization",
        "description": "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results. Get a free consultation today!"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Orlaigh Smith" },
      "datePublished": "2025-01-15",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Adfinity Clarity transformed our online presence. Organic traffic increased by 180% in just 4 months. Their SEO strategy is data-driven and results-focused."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Pierre Tamer" },
      "datePublished": "2025-02-03",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Best digital marketing agency we have worked with. Their team understood our business goals and delivered measurable results through SEO and content marketing."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Natalie Peters" },
      "datePublished": "2025-03-10",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Highly recommend Adfinity Clarity. We went from page 3 to page 1 on Google for our main keywords within 5 months."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nicole Herbeck" },
      "datePublished": "2025-04-22",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Their performance marketing and lead generation campaigns delivered outstanding ROI. Our sales increased by 40% within the first quarter."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michael Chen" },
      "datePublished": "2025-05-18",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Adfinity Clarity helped us build a strong digital presence. Their AI-powered SEO approach is ahead of the competition."
    }
  ]
}

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://adfinityclarity.com/#/schema/logo/image/",
  "contentUrl": "https://adfinityclarity.com/full-logo.png",
  "url": "https://adfinityclarity.com/full-logo.png",
  "width": 289,
  "height": 76,
  "caption": "Adfinity Clarity",
  "name": "Adfinity Clarity Logo",
  "description": "Official logo of Adfinity Clarity SEO & Digital Marketing Agency"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
      </head>
      <body className={urban.variable}>
        {children}
      </body>
    </html>
  )
}