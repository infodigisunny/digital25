// app/seo-search-engine-optimization/layout.js
export const metadata = {
  title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
  description: "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
  alternates: {
    canonical: "https://adfinityclarity.com/seo-search-engine-optimization",
  },
  openGraph: {
    title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
    description: "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
    url: "https://adfinityclarity.com/seo-search-engine-optimization",
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
    title: "SEO Services For Ranking & Revenue: #1 Rated SEO Agency",
    description: "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results & Get a free consultation today!",
    site: "@adfinityclarity",
    images: ["https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png"],
  },
};

export default function SEOLayout({ children }) {
  return <>{children}</>;
}