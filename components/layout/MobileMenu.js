'use client'
import Link from 'next/link'
import { useState } from "react"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className={`burger-icon burger-icon-white ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <Link className="active" href="/" aria-label="Home">Home</Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <Link href="/digital-marketing" aria-label="Digital Marketing">Digital Marketing</Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                        <Link href="/seo-search-engine-optimization" aria-label="SEO">SEO</Link>
                                        </li>
                                    </ul>
                                </nav><br></br>
                            </div>
                            <div className="mobile-social-icon mb-50">
                                <div className="mb-25">Follow Us</div><Link className="icon-socials icon-facebook" href="https://www.facebook.com/adfinityclarity/" aria-label="Facebook"><img alt="Facebook icon" src="/assets/imgs/template/icons/fb.svg" /></Link><Link className="icon-socials icon-linkedin" href="https://www.linkedin.com/company/adfinity-clarity/" aria-label="LinkedIn"><img alt="Linkedin" src="/assets/imgs/template/icons/linkedin.svg" /></Link><Link className="icon-socials icon-youtube" href="https://www.youtube.com/@AdfinityClarity" aria-label="YouTube"><img alt="Youtube" src="/assets/imgs/template/icons/youtube.svg" /></Link><Link className="icon-socials icon-instagram" href="https://www.instagram.com/adfinityclarity/" aria-label="Instagram"><img alt="Instagram" src="/assets/imgs/template/icons/instagram.svg" /></Link><Link className="icon-socials icon-x" href="https://x.com/adfinityclarity" aria-label="X (Twitter)"><img alt="X" src="/assets/imgs/template/icons/x.svg" /></Link>
                            </div>
                            <div className="site-copyright">Copyright 2025 © Adfinity Clarity.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
