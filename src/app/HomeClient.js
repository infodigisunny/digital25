
/*"use client";
import Script from "next/script";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import axios from "axios";
import Header1 from "../../components/layout/header/Header1";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import "animate.css";
import AnimatedElement from "../components/AnimatedElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Footer3 from "../../components/layout/footer/Footer3";
import MobileMenu from "../../components/layout/MobileMenu";
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="marquee-placeholder">Loading...</div>,
});



export default function HomeClient() {
  const [isActive, setIsActive] = useState({ key: 1 });
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClick = (key) => {
    setIsActive({ key });
  };

  const handleMobileMenu = () => {
    const newState = !isMobileMenu;
    setIsMobileMenu(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  useEffect(() => {
    // Only run on client
    setIsClient(true);
    return () => {
      document.body.style.overflow = 'auto';
      setIsClient(false);
    };
  }, []);

  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (key) => {
    setFaqActive(faqActive === key ? null : key);
  };

  /* ===================== FORM COMPONENT ===================== */
  // Using ContactForm component

  