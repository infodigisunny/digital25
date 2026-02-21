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
{/* WebPage Schema - SEO Page */}
<Script
  id="seo-webpage-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://adfinityclarity.com/seo-search-engine-optimization#webpage",
      "url": "https://adfinityclarity.com/seo-search-engine-optimization",
      "name": "SEO Services",
      "description": "Rank Higher with Professional SEO Services for Driving Traffic & Revenue",
      "isPartOf": {
        "@id": "https://adfinityclarity.com/#website"
      },
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
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