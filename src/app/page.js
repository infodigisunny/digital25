import HomeClient from "./HomeClient";


/* ===================== PAGE-SPECIFIC METADATA ===================== */
export const metadata = {
  title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
  description:
    "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  alternates: {
    canonical: "https://adfinityclarity.com/",
  },
  openGraph: {
    title: "Best SEO &amp; Digital Marketing Agency - Adfinity Clarity",
    description: "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
    url: "https://adfinityclarity.com/",
    siteName: "Adfinityclarity.com",
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
    title: "Best SEO &amp; Digital Marketing Agency - Adfinity Clarity",
    description: "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
    site: "@adfinityclarity",
    images: [
      "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
    ],
  },
};



export default function Home() {
  return (
    <>
  
      {/*<h1 style={{display: 'none'}}>Best SEO & Digital Marketing Agency - Adfinity Clarity</h1>
      
       Server-rendered SEO content - hidden from UI 
      <div style={{display: 'none'}}>
        <h2>Expert Digital Marketing Services</h2>
        <p>Adfinity Clarity is a top-rated digital marketing agency specializing in SEO, performance marketing, lead generation, content marketing, and web design. Our data-driven approach helps businesses achieve remarkable online growth and maximize ROI through targeted digital strategies.</p>
        
        <h3>Professional SEO Services</h3>
        <p>Our search engine optimization services improve website visibility on major search engines. We conduct comprehensive keyword research, implement on-page and off-page optimization strategies, and ensure technical SEO requirements are met for sustainable rankings and organic traffic growth.</p>
        
        <h3>Performance Marketing Solutions</h3>
        <p>Maximize your marketing ROI with our expert performance marketing services. We manage PPC campaigns across Google Ads, Facebook Ads, and LinkedIn Ads, ensuring your budget delivers optimal results through continuous optimization and data-driven decision making.</p>
        
        <h3>Content Marketing Strategy</h3>
        <p>Quality content drives digital marketing success. Our team creates compelling blog posts, articles, infographics, and videos that resonate with your target audience, establish brand authority, and drive organic traffic to your website.</p>
        
        <h3>Web Design and Development</h3>
        <p>Your website is your digital storefront. We create responsive, user-friendly websites that convert visitors into customers using the latest web design trends and best practices to ensure your business stands out in the competitive digital landscape.</p>
        
        <h3>Data-Driven Lead Generation</h3>
        <p>Generating quality leads is essential for business growth. Our lead generation strategies combine SEO, content marketing, email marketing, and paid advertising to attract qualified prospects and nurture them through advanced lead management systems.</p>
        
        <h3>Customized Digital Marketing Solutions</h3>
        <p>At Adfinity Clarity, we understand that one size doesn&apos;t fit all. We develop customized marketing strategies based on thorough market research, competitor analysis, and audience insights to ensure your campaigns achieve maximum impact and deliver measurable results.</p>
        
        <h3>Transparent Analytics and Reporting</h3>
        <p>We believe in complete transparency for all marketing campaigns. Our comprehensive reporting provides detailed insights into campaign performance, ROI, and key metrics, helping you make informed decisions and continuously optimize your marketing strategy.</p>
        
        <h3>Why Choose Adfinity Clarity</h3>
        <p>With years of experience in digital marketing, our team combines cutting-edge technology with proven methodologies to deliver exceptional results. We stay ahead of industry trends and algorithm updates to ensure your marketing efforts remain effective and competitive.</p>
        
        <h3>Comprehensive Digital Marketing Approach</h3>
        <p>Our integrated approach ensures all aspects of your digital marketing work together seamlessly. From brand awareness to conversion optimization, we create cohesive strategies that build strong online presence and drive sustainable business growth.</p>
        
        <h3>Industry-Leading Expertise</h3>
        <p>Adfinity Clarity brings together certified digital marketing experts across various disciplines. Our collective experience spans multiple industries, allowing us to understand unique challenges and deliver tailored solutions that exceed expectations.</p>
      </div>
*/}
    
    ✅ GTM HEAD SCRIPT
      {/* <Script
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
      /> */}

      {/* ✅ GTM NOSCRIPT
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDZMJK42"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      /> */}
      <HomeClient />
    </>
  );
}
