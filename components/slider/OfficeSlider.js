
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    }
}

export default function OfficeSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/united-states.svg" alt="USA" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">United States</h5>
                                    <p className="mb-12 text-md neutral-300">In the United States, we work with businesses across eCommerce, B2B, healthcare, and professional services. Our US team understands search behavior, competitor landscapes, and buyer intent patterns.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/united-kingdom.svg" alt="UK" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">United Kingdom</h5>
                                    <p className="mb-12 text-md neutral-300">In the United Kingdom, our team navigates the search market and its quirks. They understand content, Google UK dynamics, and industry-specific search trends.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/india.svg" alt="INDIA" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">India</h5>
                                    <p className="mb-12 text-md neutral-300">In India, our team supports businesses that want to scale and international companies that want to establish a strong presence.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/australia.svg" alt="Australia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">Australia</h5>
                                    <p className="mb-12 text-md neutral-300">In Australia, our team builds campaigns that reflect how Australian audiences search, trust, and buy.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/uae.svg" alt="UAE" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">UAE</h5>
                                    <p className="mb-12 text-md neutral-300">We assist aspirational companies in intensely competitive and rapidly evolving marketplaces
in the United Arab Emirates. To assist firms in establishing credibility, attracting high-quality
leads, and expanding with confidence, our UAE staff is informed by multicultural audiences,
premium consumer demands, and regional search trends.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/canada.svg" alt="canada" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">Canada</h5>
                                    <p className="mb-12 text-md neutral-300">In Canada, we work with brands across retail, healthcare, and service industries to improve
how they reach local audiences online. Our Canadian team focuses on practical SEO
strategies that help businesses build visibility, connect with the right customers, and grow
steadily.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/new-zealand.svg" alt="New Zealand" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">New Zealand</h5>
                                    <p className="mb-12 text-md neutral-300">In New Zealand, we work with growing businesses that value authenticity and connection to
the community. Our team understands local search habits, regional competition, and
customer intent to develop meaningful digital visibility that drives steady, sustainable growth.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/singapore.svg" alt="Singapore" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">Singapore</h5>
                                    <p className="mb-12 text-md neutral-300">Singapore’s digitally mature landscape requires more than a cookie-cutter strategy. We
work with innovation-led businesses in finance, technology, and professional services, with
our team combining savvy market insight and strategic SEO expertise to help brands stand
out in a highly competitive space</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/switzerland.svg" alt="Switzerland" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">Switzerland</h5>
                                    <p className="mb-12 text-md neutral-300">Switzerland digitally mature landscape requires more than a cookie-cutter strategy. We
work with innovation-led businesses in finance, technology, and professional services, with
our team combining savvy market insight and strategic SEO expertise to help brands stand
out in a highly competitive space</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/malaysia.svg" alt="Malaysia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12">Malaysia</h5>
                                    <p className="mb-12 text-md neutral-300">Finance, technology, and professional services firms in Malaysia are competing in one of
the most digitally mature markets in the world. The SEO strategies that work here aren't built
on guesswork, they're grounded in local market behaviour, real customer intent, and a clear
view of what sustainable visibility actually looks like for your business.</p>
                                    <p className="text-md neutral-300 mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    <Link className="btn btn-link-white" href="mailto:official@adfinityclarity.com">
                                        <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={38} height={38} rx={19} fill="true" />
                                            <g clipPath="url(#clip0_5_2504)">
                                                <path d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z" fill="#191919" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_2504">
                                                    <rect width={13} height={13} fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
