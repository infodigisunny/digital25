/** @format */

import Script from "next/script";
import HomeClient from "./HomeClient";



/* ===================== PAGE-SPECIFIC METADATA ===================== */
export const metadata = {
  title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
  description:
    "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  alternates: {
    canonical: "https://adfinityclarity.com/",
  },
};

export default function Home() {
  return (
    <>
      {/* Page-level schemas or scripts if needed */}
    
      <HomeClient />
    </>
  );
}
