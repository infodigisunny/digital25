export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://adfinityclarity.com/#organization",
    name: "Adfinity Clarity",
    url: "https://adfinityclarity.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://adfinityclarity.com/full-logo.webp",
      width: 600,
      height: 200,
    },
    sameAs: [
      "https://www.facebook.com/adfinityclarity",
      "https://www.instagram.com/adfinityclarity",
      "https://www.linkedin.com/company/adfinityclarity",
      "https://twitter.com/adfinityclarity"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
