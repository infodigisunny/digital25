import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/style.css";
import "./assets/css/fix-backgrounds.css";
import "animate.css";
import Script from "next/script";
import BackToTop from "../components/BackToTop";

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

// export const metadata = {
//   metadataBase: new URL("https://adfinityclarity.com"),
//   title: {
//     default: "Adfinity Clarity – Digital Marketing Agency",
//     template: "%s | Adfinity Clarity",
//   },
//   description:
//     "Adfinity Clarity is a results-driven digital marketing agency offering SEO, PPC, social media marketing, and growth solutions.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export const metadata = {
  title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
  description:
    "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  alternates: {
    canonical: "https://adfinityclarity.com/",
    icons: {
   icon: "/favicon.ico",
   },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urban.className}>
        {children}
        <BackToTop />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
