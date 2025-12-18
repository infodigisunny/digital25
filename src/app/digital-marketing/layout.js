// app/digital-marketing/layout.js
export const metadata = {
  title: "Digital Marketing Services - Web Marketing & Branding Agency",
  description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
  alternates: {
    canonical: "https://adfinityclarity.com/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services - Web Marketing & Branding Agency",
    description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
    url: "https://adfinityclarity.com/digital-marketing",
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
    title: "Digital Marketing Services - Web Marketing & Branding Agency",
    description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
    site: "@adfinityclarity",
    images: [
      "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
    ],
  },
};

export default function DigitalMarketingLayout({ children }) {
  return <>{children}</>;
}