import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/style.css";
import "./assets/css/fix-backgrounds.css";
import "animate.css";
/*import Script from "next/script";*/
import BackToTop from "../components/BackToTop";


const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urban.className}>
        {children}
        <BackToTop />

        {/* Bootstrap JS */}
       {/*} <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />*/}
      </body>
    </html>
  );
}
