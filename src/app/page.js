import Head from "next/head";
import HomeClient from "./HomeClient";

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

// Fetch metadata during SSR (getServerSideProps)
export async function getServerSideProps() {
  return {
    props: {
      metadata,
    },
  };
}

export default function Home({ metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      </Head>

      <HomeClient />
    </>
  );
}
