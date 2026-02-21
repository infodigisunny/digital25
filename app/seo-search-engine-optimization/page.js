import Script from "next/script";
import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home3/Section1"
import Section10 from "@/components/sections/home3/Section10"
//import Section11 from "@/components/sections/home3/Section11"
import Section12 from "@/components/sections/home3/Section12"
import Section2 from "@/components/sections/home3/Section2"
import Section3 from "@/components/sections/home3/Section3"
import Section4 from "@/components/sections/home3/Section4"
import Section5 from "@/components/sections/home3/Section5"
import Section6 from "@/components/sections/home3/Section6"
//import Section7 from "@/components/sections/home3/Section7"
import Section8 from "@/components/sections/home3/Section8"
import Section9 from "@/components/sections/home3/Section9"
export const metadata = {
  title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
  description: "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
  alternates: {
    canonical: "https://adfinityclarity.com/seo-search-engine-optimization", // 🔁 Replace with your page's actual canonical URL
     languages: {
      "en": "https://adfinityclarity.com/seo-search-engine-optimization",
      "x-default": "https://adfinityclarity.com/seo-search-engine-optimization",
  },
  },
  openGraph: {
    title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
    description:
      "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
    url: "https://adfinityclarity.com/seo-search-engine-optimization",
    siteName: "Adfinityclarity.com/seo-search-engine-optimization",
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
    title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
    description:
      "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
    site: "@adfinityclarity",
    images: ["https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png"],
  },
  
};
export default function Home3() {

    return (
        <>
        <Script
  id="seo-breadcrumb-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "SEO Company",
          "item": "https://adfinityclarity.com/seo-search-engine-optimization"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO Services",
          "item": "https://adfinityclarity.com/seo-search-engine-optimization"
        }
      ]
    })
  }}
/>

<Script
  id="seo-website-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#website",
      "url": "https://adfinityclarity.com/seo-search-engine-optimization",
      "name": "SEO Services",
      "description": "Rank Higher with Professional SEO Services for Driving Traffic & Revenue",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://adfinityclarity.com/seo-search-engine-optimization"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    })
  }}
/>

<Script
  id="seo-howto-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "HowTo",
      "name": "Get Professional SEO Services",
      "description": "A Complete Guide to Securing Professional SEO Services",
      "image": "https://adfinityclarity.com/assets/imgs/page/homepage3/img-feature.png",
      "step": [
        {
          "@type": "HowToStep",
          "text": "Research: Analyze your business, competitors, and keywords to create an informed SEO strategy."
        },
        {
          "@type": "HowToStep",
          "text": "Optimization: Fix technical issues, improve speed, mobile responsiveness, and meta content."
        },
        {
          "@type": "HowToStep",
          "text": "Strategy: Create goal-focused content that matches your audience's search intent."
        },
        {
          "@type": "HowToStep",
          "text": "Growth: Track performance, build links, and continuously improve your site's visibility."
        }
      ]
    })
  }}
/>
<Script
  id="digital-definedterm-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#definedterm-search-engine-optimization",
      "name": "Professional SEO Agency for Traffic &amp; Revenue Generation. Get expert SEO services that boost website ranking and results &amp; Get a free consultation today!",
      "inDefinedTermSet": "SEO SERVICES"
    })
  }}
/>
<Script
  id="seo-person-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#/schema/",
      "name": "SEO SERVICES",
      "image": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://adfinityclarity.com/full-logo.webp",
        "url": "https://adfinityclarity.com/full-logo.webp",
        "contentUrl": "https://adfinityclarity.com/full-logo.webp",
        "caption": "SEO SERVICES"
      },
      "description": "If you have a website that is not ranking as highly as it could on search engines, we can help. Our SEO agency is here to improve your visibility and performance.",
      "sameAs": [
        "https://adfinityclarity.com/seo-search-engine-optimization"
      ],
      "knowsAbout": ["SEO", "Digital Marketing"],
      "jobTitle": "Lead SEO Agency",
      "worksFor": "Adfinity Clarity"
    })
  }}
/>

        
            {/* <Layout headerStyle={1} footerStyle={3} headerCls="header-style-2" topBar> */}
                 <Layout headerStyle={1} footerStyle={1} logoWhite>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                {/* <Section7 />*/}
                <Section8 />
               {/* <Section9 />*/}
                {/*<Section10 />
                <Section11 />*/}
                <Section12 />
            </Layout>
        </>
    )
}