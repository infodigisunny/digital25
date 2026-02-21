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
          "name": "Home",
          "item": "https://adfinityclarity.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Digital Marketing Services",
          "item": "https://adfinityclarity.com/digital-marketing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services"
        }
      ]
    })
  }}
/>
<Script
  id="seo-howto-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Get Professional SEO Services",
      "description": "A complete guide to securing professional SEO services that drive traffic and revenue for your business.",
      "totalTime": "PT30M",
      "image": {
        "@type": "ImageObject",
        "url": "https://adfinityclarity.com/assets/imgs/page/homepage3/img-feature.png",
        "width": 1200,
        "height": 630
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Research",
          "text": "Analyze your business, competitors, and keywords to create an informed SEO strategy.",
          "url": "https://adfinityclarity.com/seo-search-engine-optimization#step1"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Optimization",
          "text": "Fix technical issues, improve speed, mobile responsiveness, and meta content.",
          "url": "https://adfinityclarity.com/seo-search-engine-optimization#step2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Strategy",
          "text": "Create goal-focused content that matches your audience's search intent.",
          "url": "https://adfinityclarity.com/seo-search-engine-optimization#step3"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Growth",
          "text": "Track performance, build links, and continuously improve your site's visibility.",
          "url": "https://adfinityclarity.com/seo-search-engine-optimization#step4"
        }
      ]
    })
  }}
/>      
<Script
  id="article-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#article",
      "url": "https://adfinityclarity.com/seo-search-engine-optimization",
      "isPartOf": {
        "@id": "https://adfinityclarity.com/#website"
      },
      "author": {
        "@type": "Organization",
        "name": "Adfinity Clarity",
        "url": "https://adfinityclarity.com/"
      },
      "headline": "SEO Services",
      "description": "Rank Higher with Professional SEO Services for Driving Traffic & Revenue",
      "datePublished": "2024-03-01T07:03:00+00:00",
      "dateModified": "2025-07-03T14:42:10+00:00",
      "image": {
        "@type": "ImageObject",
        "url": "https://adfinityclarity.com/assets/imgs/page/homepage3/img-feature.png",
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": {
        "@id": "https://adfinityclarity.com/seo-search-engine-optimization#article"
      },
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "wordCount": 2200,
      "inLanguage": "en-US"
    })
  }}
/>
<Script
  id="seo-service-review-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services",
      "url": "https://adfinityclarity.com/seo-search-engine-optimization",
      "description": "Professional SEO services that help your business rank higher on Google and drive organic traffic and revenue.",
      "provider": {
        "@type": "Organization",
        "name": "Adfinity Clarity",
        "url": "https://adfinityclarity.com/"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "98",
        "reviewCount": "98"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Nenad (Jack) Jovanovic" },
          "datePublished": "2025-01-15",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Their SEO services helped us rank on page 1 for competitive keywords. Organic traffic grew by 180% in 4 months."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sarah Mitchell" },
          "datePublished": "2025-02-03",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Professional SEO team that delivers real results. Our website now ranks for over 200 keywords we never ranked for before."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Lauren Simpson" },
          "datePublished": "2025-03-22",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Adfinity Clarity completely revamped our SEO strategy. We saw a 3x increase in leads within 6 months of working with them."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Orlaigh Smith" },
          "datePublished": "2025-04-10",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "The technical SEO audit alone was worth every penny. They fixed issues we did not even know existed and our rankings improved significantly."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Pierre Tamer" },
          "datePublished": "2025-05-05",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "From keyword research to link building, their SEO process is thorough and transparent. Best SEO agency we have ever hired."
        }
      ]
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