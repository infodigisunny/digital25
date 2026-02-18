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
  
      {/* ✅ GTM HEAD SCRIPT */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NDZMJK42');
          `,
        }}
      />

      {/* ✅ GTM NOSCRIPT */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDZMJK42"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />

  {/* WebSite Schema #1 */}
 <Script
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
/>

  {/*Local Business Scheam */}
  <Script
  id="local-business-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Adfinity Clarity",
      "description":
        "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
      "url": "https://adfinityclarity.com/",
      "image": "https://adfinityclarity.com/full-logo.png",
      "email": "contact@adfinityclarity.com",
      "priceRange": "$$",
      "sameAs": [
        "https://www.linkedin.com/company/adfinityclarity/",
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
            "name": "Digital Marketing",
            "url": "https://adfinityclarity.com/digital-marketing",
            "description":
              "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services."
          },
          {
            "@type": "Service",
            "name": "SEO Services",
            "url": "https://adfinityclarity.com/seo-search-engine-optimization",
            "description":
              "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results. Get a free consultation today!"
          }
        ]
      }
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
        "name": "ADFINITY CLARITY",
        "url": "https://adfinityclarity.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://adfinityclarity.com/#/schema/logo/image/",
          "url": "https://adfinityclarity.com/full-logo.png",
          "contentUrl": "https://adfinityclarity.com/full-logo.png",
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

  {/* WebSite Schema #2 (Alternate name variant) */}
  <Script
  id="website-schema-2"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/#website",
      "url": "https://adfinityclarity.com/",
      "name": "adfinityclarity.com",
      "description": "The Authority for All Things Internet Marketing",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/>

  {/* Breadcrumb Schema */}
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
            "name": "Home"
          }
        ]
      })
    }}
  />

  {/* Article Schema */}
  <Script
    id="article-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://adfinityclarity.com/#article",
        "isPartOf": {
          "@id": "https://adfinityclarity.com/"
        },
        "author": [
          {
            "@id": "https://adfinityclarity.com/#/schema/person/adfinityclarity"
          }
        ],
        "headline": "The Authority for All Things SEO & Digital Marketing",
        "datePublished": "2025-04-16T20:15:48+00:00",
        "dateModified": "2025-07-10T19:23:58+00:00",
        "mainEntityOfPage": {
          "@id": "https://adfinityclarity.com/"
        },
        "wordCount": 6,
        "publisher": {
          "@id": "https://adfinityclarity.com/#organization"
        },
        "inLanguage": "en-US"
      })
    }}
  />

  {/* FAQ Schema */}
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
              "text": "SEO improves your website’s visibility in search engines like Google, helping it appear higher in search results. This means more people can find your business when they’re searching online. It’s one of the most affordable ways to get long-term traffic and build trust."
            }
          },
          {
            "@type": "Question",
            "name": "What are digital marketing agency, and how can they help my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing agencies help you promote your business online. They include things like SEO, social media marketing, paid ads, and email campaigns. These tools work together to help you reach more people, get new leads, and increase your sales by sharing the right message with the right audience."
            }
          }
        ]
      })
    }}
  />

  {/* ImageObject Schema (Logo) */}
  <Script
    id="logo-image-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "ImageObject",
        "contentUrl": "https://adfinityclarity.com/full-logo.png",
        "height": 263,
        "width": 327,
        "url": "https://adfinityclarity.com/full-logo.png"
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
