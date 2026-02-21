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
{/* FAQPage Schema */}
<Script
  id="faq-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does an internet marketing agency do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An internet marketing agency helps businesses grow online. It offers services like SEO, online ads, content creation, email marketing, and digital PR. These services work together to attract more visitors, generate leads, and increase sales."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO important for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO improves your website's visibility in search engines like Google, helping it appear higher in search results. This means more people can find your business when searching online. It is one of the most affordable ways to get long-term traffic and build trust."
          }
        },
        {
          "@type": "Question",
          "name": "Is email marketing still effective?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, email marketing consistently delivers results. Well-timed emails outperform many newer channels by building lasting customer relationships, driving repeat business, and delivering some of the highest ROI in digital marketing."
          }
        },
        {
          "@type": "Question",
          "name": "What are digital marketing agencies and how can they help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing agencies help you promote your business online using SEO, social media marketing, paid ads, and email campaigns. These tools work together to help you reach more people, get new leads, and increase sales by sharing the right message with the right audience."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3 to 6 months, depending on competition, website age, and content quality. Consistent effort leads to sustainable rankings and traffic growth."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing costs vary based on your goals, industry, and services needed. At Adfinity Clarity, we offer flexible pricing plans tailored to businesses of all sizes from startups to enterprises. Contact us for a free consultation and custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Adfinity Clarity different from other digital marketing agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adfinity Clarity combines AI-powered strategies with proven digital marketing techniques to deliver measurable results. We focus on revenue growth, not just traffic — using data-driven SEO, performance marketing, and content strategies built for the AI era of search."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need SEO if I am already running paid ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paid ads stop the moment you stop paying. SEO builds long-term organic visibility that compounds over time. The best strategy combines both — paid ads for immediate results and SEO for sustainable, cost-effective growth."
          }
        }
      ]
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
