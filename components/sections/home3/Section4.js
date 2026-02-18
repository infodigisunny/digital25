
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section4() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-our-features-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40">
                            <div className="internet-icon"><span /> Our Features</div>
                            <h2 className="heading-2 mb-20">Build a Stronger SEO Business with Adfinity Clarity</h2>
                            <p className="text-lg neutral-700">With years of experience in <Link href="/seo-search-engine-optimization">SEO services</Link> and other digital marketing 
                                domains, our team is confident that it can help you rank higher, consistently, even through 
                                changing algorithms and marketing trends.</p>
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" alt="SEO Marketing" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Search Engine Marketing</h3>
                                        <p className="text-md neutral-700">We don’t just use SEO to make you rank higher. We 
                                            use it to Market you better.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" alt="SMM" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Digital Marketing</h3>
                                        <p className="text-md neutral-700">Our Marketing Strategies stand out due to innovation and efficiency, and so will you!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" alt="ppc"/></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">ROI Assured</h3>
                                         <p className="text-md neutral-700"><Link href="/seo-search-engine-optimization">SEO Services</Link> is not a marketing strategy; it is an investment on which we promise high-quality returns.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" alt="Web Design" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Technical Services</h3>
                                        <p className="text-md neutral-700">We not only provide quality marketing solutions but also balance them with technical expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-buttons-feature-4"><a className="btn btn-black" href="mailto:contact@adfinityclarity.com">Contact Us
                                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                </svg></a><Link className="btn btn-learmore-2" href="/digital-marketing"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> Digital Marketing</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="image-feature-2"><img src="/assets/imgs/page/homepage3/img-feature.png" alt="SEO COMPANY" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4><CounterUp count={17} />k+</h4>
                                    <p className="text-sm">Happy Clients</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4><CounterUp count={12} />k+</h4>
                                    <p className="text-sm">Completed Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}
