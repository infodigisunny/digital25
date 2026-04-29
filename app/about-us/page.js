import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import Head from 'next/head'

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us | Adfinity Clarity – Transparent & Smart Ad Management</title>
                <meta
                    name="description"
                    content="Learn about Adfinity Clarity – our mission is to bring complete transparency, smart automation, and data-driven insights to digital advertising management. Meet the team behind the platform."
                />
                <meta property="og:title" content="About Us | Adfinity Clarity" />
                <meta
                    property="og:description"
                    content="Discover how Adfinity Clarity is redefining digital ad management with transparency, clarity, and intelligent automation."
                />
                <meta property="og:type" content="website" />
            </Head>

            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-1 header-style-1">

                {/* Hero Section */}
                <section className="section-box wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h6 className="text-brand-4 mb-15">About Us</h6>
                                <h1 className="heading-1 mb-20">We Bring Clarity to Digital Advertising</h1>
                                <p className="text-lg neutral-500 mb-35">
                                    Adfinity Clarity is built for modern advertisers who demand transparency, precision, and results. We combine smart automation with deep analytics to give you complete control over your ad spend.
                                </p>
                                <Link className="btn btn-brand-4" href="/contact">
                                    Get in Touch
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                        <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <img src="/assets/imgs/page/about/about-hero.png" alt="About Adfinity Clarity" className="w-100" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="section-box wow animate__animated animate__fadeIn bg-neutral-50">
                    <div className="container">
                        <div className="text-center mb-60">
                            <h6 className="text-brand-4 mb-15">Our Mission</h6>
                            <h2 className="heading-2 mb-20">Why We Built Adfinity Clarity</h2>
                            <p className="text-lg neutral-500 col-lg-8 mx-auto">
                                Too many businesses waste ad budget on opaque platforms that obscure performance data. We built Adfinity Clarity to change that – giving every advertiser a clear, honest view of what's working and what's not.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="box-feature hover-up">
                                    <div className="icon-feature mb-20">
                                        <img src="/assets/imgs/page/about/icon-transparency.svg" alt="Transparency" />
                                    </div>
                                    <h5 className="heading-5 mb-10">Full Transparency</h5>
                                    <p className="text-md neutral-500">No black boxes. Every metric, every decision, every dollar – visible and accountable.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="box-feature hover-up">
                                    <div className="icon-feature mb-20">
                                        <img src="/assets/imgs/page/about/icon-automation.svg" alt="Smart Automation" />
                                    </div>
                                    <h5 className="heading-5 mb-10">Smart Automation</h5>
                                    <p className="text-md neutral-500">AI-powered campaign management that optimizes your ads in real time without lifting a finger.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="box-feature hover-up">
                                    <div className="icon-feature mb-20">
                                        <img src="/assets/imgs/page/about/icon-insights.svg" alt="Data Insights" />
                                    </div>
                                    <h5 className="heading-5 mb-10">Actionable Insights</h5>
                                    <p className="text-md neutral-500">Turn raw data into decisions with dashboards designed for clarity, not complexity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section-box wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <h2 className="heading-1 text-brand-4">500+</h2>
                                <p className="text-lg neutral-500">Clients Worldwide</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <h2 className="heading-1 text-brand-4">$2B+</h2>
                                <p className="text-lg neutral-500">Ad Spend Managed</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <h2 className="heading-1 text-brand-4">98%</h2>
                                <p className="text-lg neutral-500">Client Retention Rate</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <h2 className="heading-1 text-brand-4">40+</h2>
                                <p className="text-lg neutral-500">Countries Reached</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-box wow animate__animated animate__fadeIn bg-neutral-50">
                    <div className="container">
                        <div className="text-center mb-60">
                            <h6 className="text-brand-4 mb-15">Our Team</h6>
                            <h2 className="heading-2 mb-20">Meet the People Behind Adfinity Clarity</h2>
                            <p className="text-lg neutral-500 col-lg-8 mx-auto">
                                A passionate team of ad tech veterans, engineers, and data scientists united by a common goal: making digital advertising honest and effective.
                            </p>
                        </div>

                        <div className="row">
                            {[
                                { name: "Alex Morgan", role: "CEO & Co-Founder", img: "team-1.png" },
                                { name: "Sarah Chen", role: "CTO & Co-Founder", img: "team-2.png" },
                                { name: "James Patel", role: "Head of Product", img: "team-3.png" },
                                { name: "Lena Rivera", role: "Head of Growth", img: "team-4.png" },
                            ].map((member, idx) => (
                                <div className="col-lg-3 col-md-6 mb-30" key={idx}>
                                    <div className="box-team hover-up text-center">
                                        <img
                                            src={`/assets/imgs/page/about/${member.img}`}
                                            alt={member.name}
                                            className="rounded-circle mb-15"
                                            style={{ width: 120, height: 120, objectFit: "cover" }}
                                        />
                                        <h5 className="heading-5 mb-5">{member.name}</h5>
                                        <p className="text-md text-brand-4">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-box wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">Ready to See Your Ads with Clarity?</h2>
                            <p className="text-lg neutral-500 mb-35 col-lg-7 mx-auto">
                                Join hundreds of businesses that have transformed their ad performance with Adfinity Clarity. Start your free trial today – no credit card required.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Link className="btn btn-brand-4" href="/register">
                                    Start Free Trial
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                        <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                                    </svg>
                                </Link>
                                <Link className="btn btn-outline" href="/contact">
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}