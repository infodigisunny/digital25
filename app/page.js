/**  @format */
import Script from "next/script";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home1/Section1";
//import Section10 from "@/components/sections/home1/Section10";
import Section11 from "@/components/sections/home1/Section11";
//import Section12 from "@/components/sections/home1/Section12";
//import Section13 from "@/components/sections/home1/Section13";
import Section2 from "@/components/sections/home1/Section2";
import Section3 from "@/components/sections/home1/Section3";
import Section4 from "@/components/sections/home1/Section4";
import Section5 from "@/components/sections/home1/Section5";
import Section6 from "@/components/sections/home1/Section6";
//import Section7 from "@/components/sections/home1/Section7";
import Section8 from "@/components/sections/home1/Section8";
//import Section9 from "@/components/sections/home1/Section9";
export const metadata = {
  title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
  description: "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  alternates: {
    canonical: "https://adfinityclarity.com/", // 🔁 Replace with your page's actual canonical URL
    languages: {
      "en": "https://adfinityclarity.com/",
      "x-default": "https://adfinityclarity.com/",
  },
  },
  openGraph: {
    title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
    description:
      "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
    url: "https://adfinityclarity.com/",
    siteName: "Adfinityclarity.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
        width: 1600,
        height: 720,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
    description:
      "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
    site: "@adfinityclarity",
    images: ["https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png"],
  },
  
};

export default function Home() {
  return (
    <>
       <> 
       {/* ✅ Favicon Link */}
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  

  {/* WebSite Schema */}
<Script
  id="website-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
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
    })
  }}
/>

{/* Organization Schema */}
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

{/* Local Business Schema */}
<Script
  id="local-business-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
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
      }
    })
  }}
/>

{/* ImageObject Schema */}
<Script
  id="image-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": "https://adfinityclarity.com/full-logo.webp",
      "url": "https://adfinityclarity.com/full-logo.webp",
      "width": 289,
      "height": 76
    })
  }}
/>

{/* BreadcrumbList Schema */}
<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://adfinityclarity.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://adfinityclarity.com/"
        }
      ]
    })
  }}
/>

{/* WebPage Schema */}
<Script
  id="webpage-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://adfinityclarity.com/#webpage",
      "url": "https://adfinityclarity.com/",
      "isPartOf": {
        "@id": "https://adfinityclarity.com/#website"
      },
      "author": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "headline": "AI Era SEO & Digital Marketing Company helping businesses grow revenue with smart internet marketing",
      "datePublished": "2025-04-16T20:15:48+00:00",
      "dateModified": "2025-07-10T19:23:58+00:00",
      "mainEntityOfPage": {
        "@id": "https://adfinityclarity.com/#webpage"
      },
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/>
  
</>


      <Layout headerStyle={1} footerStyle={1} logoWhite>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
       {/* <Section7 /> */}
        <Section8 />
        {/* <Section9 /> */}
        {/* <Section10 /> */}
        <Section11 />
        {/* <Section12 /> */}
        {/* <Section13 /> */}
      </Layout>
    </>
  );
}
