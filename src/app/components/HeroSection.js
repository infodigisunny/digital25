"use client";
import { useState, useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Header1 from "../../../components/layout/header/Header1";
import MobileMenu from "../../../components/layout/MobileMenu";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    const newState = !isMobileMenu;
    setIsMobileMenu(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  useEffect(() => {
    setIsClient(true);
    return () => {
      document.body.style.overflow = 'auto';
      setIsClient(false);
    };
  }, []);

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <Header1 
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <MobileMenu 
        isMobileMenu={isMobileMenu} 
        handleMobileMenu={handleMobileMenu} 
      />

      {/* ===================== HERO + FORM SECTION ===================== */}
      <section className="section-box">
        <div className="banner-hero hero-4">
          <div className="banner-inner">
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {/* LEFT CONTENT */}
              <div style={{ flex: 1, minWidth: 320, maxWidth: 700 }}>
                <h1 className="display-2 mb-25">
                  Unlock Your Business{" "}
                  <span className="text-bg-brand-4">Revenue</span> With Internet
                  Marketing Agency
                </h1>

                <p className="text-lg mb-25">
                  Use data-driven digital marketing strategies to attract more
                  leads, convert customers, and scale your business with
                  confidence.
                </p>
              </div>

              {/* RIGHT FORM */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
