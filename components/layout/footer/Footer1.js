import Link from 'next/link'

export default function Footer3() {
    return (
        <>
            <footer className="footer footer-style-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">

                            {/* Fix 1 — Footer Logo aria-label */}
                            <Link className='d-flex' href='/' aria-label='Adfinity Clarity - Go to Homepage'>
                                <img alt="Adfinity Clarity Logo" src="/full-logo.webp" className="img1" />
                            </Link>

                            <div className="mt-20 mb-20">
                                <p className="text-lg neutral-700">
                                    <a href="mailto:contact@adfinityclarity.com" className="text-18-bold brand-1-1">contact@adfinityclarity.com</a>
                                </p>
                                <p className="text-md neutral-600">Hours: 8:00 - 17:00, Mon - Sat</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-5 col-xs-6">
                            <div className="row mt-105">
                                <div className="col-lg-4">
                                    <ul className="menu-footer">
                                        <li><a href="/digital-marketing">Digital Marketing</a></li>
                                        <li><a href="/seo-search-engine-optimization">Search Engine Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 text-start text-md-end">
                            <div className="text-start d-inline-block mt-70">
                                <p className="text-lg title-follow neutral-0">Follow us</p>
                                <div className="box-socials-footer" />

                                {/* Fix 2 — Footer Social Links aria-label */}
                                <a className="icon-socials icon-facebook" href="https://www.facebook.com/adfinityclarity/" aria-label="Follow Adfinity Clarity on Facebook">
                                    <img alt="Facebook" src="/assets/imgs/template/icons/fb.svg" />
                                </a>
                                <a className="icon-socials icon-linedin" href="https://www.linkedin.com/company/adfinity-clarity/" aria-label="Follow Adfinity Clarity on LinkedIn">
                                    <img alt="Linkedin" src="/assets/imgs/template/icons/linkedin.svg" />
                                </a>
                                <a className="icon-socials icon-youtube" href="https://www.youtube.com/@AdfinityClarity" aria-label="Subscribe to Adfinity Clarity on YouTube">
                                    <img alt="Youtube" src="/assets/imgs/template/icons/youtube.svg" />
                                </a>
                                <a className="icon-socials icon-instagram" href="https://www.instagram.com/adfinityclarity/" aria-label="Follow Adfinity Clarity on Instagram">
                                    <img alt="Instagram" src="/assets/imgs/template/icons/instagram.svg" />
                                </a>
                                <a className="icon-socials icon-x" href="https://x.com/adfinityclarity" aria-label="Follow Adfinity Clarity on X Twitter">
                                    <img alt="X" src="/assets/imgs/template/icons/x.svg" />
                                </a>
                                <p />
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom mt-50">
                        <div className="row">
                            <div className="col-md-6 text-md-start text-center">
                                <p className="text-sm neutral-600">Copyright © 2025 <Link href="/">Adfinity Clarity</Link>. All rights reserved.</p>
                            </div>
                            <div className="col-md-6 text-md-end text-center">
                                <ul className="menu-bottom-footer">
                                    <li><a href="/sitemap_index.xml">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}