/** @format */

import CounterUp from "@/components/elements/CounterUp";
import ResizeContainer from "@/components/elements/ResizeContainer";
import Layout from "@/components/layout/Layout";
import OfficeSlider from "@/components/slider/OfficeSlider";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";
import Head from "next/head";

export default function About() {
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

      <ResizeContainer />
      <Layout headerStyle={1} footerStyle={1}>
        <div style={{ marginTop: "100px" }}>

          {/* ── Section 1: Hero ── */}
          <section className='section-box box-about-section-1'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='padding-left-auto'>
                    <Link className='btn btn-tag-black' href='#'>
                      About Us 
                    </Link>
                    <h1 className='display-2 mt-15 mb-25'>
                     Why Good Businesses Stay Invisible Online?
                    </h1>
                    <p className='text-xl mb-45'>
                      It turns out that most of them just never had the right people to help them.
                    </p>
                    <div className='box-buttons-feature-4'>
                      <Link className='btn btn-brand-4-medium mr-20' href='#'>
                        See What We Do
                        <svg
                          width={22}
                          height={8}
                          viewBox='0 0 22 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z'
                            fill='true'
                          />
                        </svg>
                      </Link>
                      <Link className='btn btn-learmore-2' href='#'>
                        <span>
                          <svg
                            width={39}
                            height={38}
                            viewBox='0 0 39 38'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <rect x='0.5' width={38} height={38} rx={19} fill='#191919' />
                            <g clipPath='url(#clip0_1_376)'>
                              <path
                                d='M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z'
                                fill='#C5FF55'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_1_376'>
                                <rect width={13} height={13} fill='white' transform='translate(13.5 13)' />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Let's Have a Conversation
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  {/* Video section removed */}
                  <div className='box-image-rect'>
                    <img src='/assets/imgs/page/about/img-about.png' alt='Adfinity Clarity' />
                  </div>
                </div>
              </div>

              {/* Strategy Row */}
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='box-image-rect box-image-rect-both'>
                    <img src='/assets/imgs/page/about/img-about2.png' alt='Adfinity Clarity' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='padding-right-auto'>
                    <div className='box-padding-left-50 box-padding-right-50'>
                      <h2 className='heading-2 mb-20'>
                        We are Adfinity Clarity. We take rankings very seriously!
                      </h2>
                      <p className='text-lg neutral-700'>
                        We built this company because we saw the problem over and over. Businesses with products were losing to competitors who were better at search. This did not seem right to us. It still does not seem right.
Adfinity Clarity is a company that helps with search and digital marketing. We have teams in the USA, UK, India, and Australia. We have worked with companies that want to get their first 1,000 visitors. We have also worked with brands that need to get back their rankings after something changed with the search algorithm. Both of these situations need work. That is what we do.
We are not here to sell you something and then disappear. We are here to help your business get found by the people at the right time on the right platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Prepared / Values ── */}
          <section className='section-box box-prepared-section'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-6 mb-30 mx-auto text-center'>
                  <h3 className='heading-3'>
                    How We Think. How We Work. We Never Compromise On.
                  </h3>
                </div>
              </div>
             <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-info">
                                            <h4>How we think?</h4>
                                            <p className="text-md neutral-600">Clarity is not our name. It is how we work. We do not use language or make reports that are hard to understand. When something is working, we tell you why. When it is not working, we tell you that too.<br></br> We bring a solution. Honest conversations help everyone.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-info">
                                            <h4>What do we try to do?</h4>
                                            <p className="text-md neutral-600">We want to make high-quality search and digital marketing available to all businesses, not just big ones with big budgets. We want to help the business in Bangalore reach buyers in Brisbane, or the agency in Manchester compete with companies. A good strategy should.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-info">
                                            <h4>What makes us different?</h4>
                                            <p className="text-md neutral-600">We do not change the people who work on your account every month. The people you meet at the start are the ones who do the work. They know your industry, they track your competitors. They care about your numbers.Where you are should not determine if you can grow online.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box-border-rounded-md">
                                        <div className="row align-items-center">
                                            <div className="col-md-7 mb-30">
                                                <h4 className="mb-20">Search is our starting point,</h4>
                                                <p className="text-md neutral-700">not something we think about later. Before we write anything or run an ad, we study how your customers search. We look at what they type, what they skip, what makes them click, and what makes them leave. This research helps us with everything from the content we build to the pages we optimize and the keywords we target. Most companies do not think about search until later. We think it is the foundation.</p>
                                            </div>
                                            <div className="col-md-5 mb-30 text-center text-md-end"><img src="/assets/imgs/page/features/save-time.png" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-border-rounded-md">
                                        <div className="row align-items-center">
                                            <div className="col-md-7 mb-30">
                                                <h4 className="mb-20">We look at your digital presence.</h4>
                                                <p className="text-md neutral-700">A ranking page that does not convert is just a waste of money. We look at the picture including search, paid media, social, and content. We make sure each channel is doing its job and helping the others. This is how you stop losing opportunities and start getting more.</p>
                                            </div>
                                            <div className="col-md-5 mb-30 text-center text-md-end"><img src="/assets/imgs/page/features/convin.png" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
          </section>
          {/* ── Section 3: Offices ── */}
          <section className='section-box box-our-offices'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-8'>
                  <h2 className='neutral-0'>Our offices. One Standard of Work</h2>
                  <p className="text-md neutral-700">We chose to build teams instead of one big team that tries to serve everyone. Here is what that looks like -</p>
                </div>
                <div className='col-lg-4'>
                  <div className='box-button-slider box-button-slider-black'>
                    <div className='swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3'>
                      <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14' stroke='true' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                    </div>
                    <div className='swiper-button-next swiper-button-next-testimonials swiper-button-next-3'>
                      <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2' stroke='true' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box-swiper mt-45'>
                <div className='swiper-container swiper-group-1'>
                  <OfficeSlider />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Team ── */}
          <section className='section-box wow animate__animated animate__fadeIn box-our-team-2'>
            <div className='box-our-team-2-inner'>
              <div className='container'>
                <div className='text-center'>
                  <Link className='btn btn-brand-4-sm' href='#'>
                    Our people
                  </Link>
                  <h2 className='mb-20 mt-20'>Meet Our Team</h2>
                  <p className='text-md neutral-500'>
                    This is our team, a lot of smiling happy people who work hard to
                    <br className='d-none d-lg-block' />
                    empower your teams.
                  </p>
                </div>
                <div className='box-swiper mt-60'>
                  <Team2Slider />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: Awards ── */}
          <section className='section-box box-awards-section'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-4 mb-30'>
                  <h2 className='mb-15'>Our Awards</h2>
                  <p className='text-md neutral-700'>
                    Holisticly actualize magnetic testing procedures for
                    high-quality initiatives. Compellingly enhance client-based
                    users whereas strategic bandwidth. Appropriately exploit
                    cost effective.
                  </p>
                </div>
                <div className='col-lg-8 mb-30'>
                  <div className='row align-items-end'>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award.png' alt='Adfinity Clarity' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award2.png' alt='Adfinity Clarity' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award3.png' alt='Adfinity Clarity' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award4.png' alt='Adfinity Clarity' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
<section className="section-box box-all-integrations">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="heading-2 mb-15 mt-15">Our All Integrations</h2>
                                <p className="text-lg neutral-500 mb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis est<br className="none d-lg-block" />id faucibus iaculis. Cras et congue tortor. Integer laoreet.</p>
                            </div>
                            <div className="row mt-60">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-integration">
                                        <div className="card-image">
                                            <div className="card-image-left"><img src="/assets/imgs/page/integration/logo.png" alt="Adfinity Clarity" /></div>
                                            <div className="card-image-info">
                                                <h5>Spotify</h5>
                                                <p className="text-md neutral-500">Company</p>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md">Aut inventore unde id aliquid sint aut laudantium explicabo qui earum fugit. Est rerum possimus hic sunt temporibus rem deserunt consequatur sit mollitia alias aut</p><Link className="btn btn-learmore-2" href="#"><span>
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_24_999)">
                                                        <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_24_999">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>View Integration</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-integration">
                                        <div className="card-image">
                                            <div className="card-image-left"><img src="/assets/imgs/page/integration/logo4.png" alt="Adfinity Clarity" /></div>
                                            <div className="card-image-info">
                                                <h5>Hublot</h5>
                                                <p className="text-md neutral-500">Company</p>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md">Aut inventore unde id aliquid sint aut laudantium explicabo qui earum fugit. Est rerum possimus hic sunt temporibus rem deserunt consequatur sit mollitia alias aut</p><Link className="btn btn-learmore-2" href="#"><span>
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_24_999)">
                                                        <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_24_999">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>View Integration</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-integration">
                                        <div className="card-image">
                                            <div className="card-image-left"><img src="/assets/imgs/page/integration/logo11.png" alt="Adfinity Clarity" /></div>
                                            <div className="card-image-info">
                                                <h5>Dumani</h5>
                                                <p className="text-md neutral-500">Company</p>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md">Aut inventore unde id aliquid sint aut laudantium explicabo qui earum fugit. Est rerum possimus hic sunt temporibus rem deserunt consequatur sit mollitia alias aut</p><Link className="btn btn-learmore-2" href="#"><span>
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_24_999)">
                                                        <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_24_999">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>View Integration</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </section>
          {/* ── Section 6: Get in Touch ── */}
          <section className='section-box box-get-touch-section'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='box-image-get-touch'>
                    <span className='setup'>
                      <img src='/assets/imgs/page/about/setup.png' alt='Adfinity Clarity' />
                    </span>
                    <span className='icon-1'>
                      <img src='/assets/imgs/page/about/icon.png' alt='Adfinity Clarity' />
                    </span>
                    <img src='/assets/imgs/page/about/img-touch.png' alt='Adfinity Clarity' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <Link className='btn btn-brand-4-sm' href='#'>
                    Contact Us
                  </Link>
                  <h2 className='mb-20 mt-20'>Get in Touch</h2>
                  <p className='text-md neutral-700'>
                    Contact us below and we will get back to you shortly.
                  </p>
                  <div className='block-form-contact mt-45'>
                    <form action='#'>
                      <div className='form-group'>
                        <label htmlFor='fullname'>Your Name *</label>
                        <input className='form-control' type='text' placeholder='Name' />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Your Email *</label>
                        <input className='form-control' type='text' placeholder='email@website.com' />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message'>Message *</label>
                        <textarea className='form-control' rows={7} placeholder='How can we help you?' />
                      </div>
                      <div className='form-group'>
                        <button className='btn btn-black btn-rounded' type='submit'>
                          Send Message
                          <svg width={22} height={8} viewBox='0 0 22 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z' fill='true' />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Stats ── */}
          <section className='section-box box-why-trusted box-why-trusted-black'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-4 mb-30'>
                  <h2 className='text-32-bold'>
                    See why we are
                    <br className='d-none d-lg-block' /> trusted the world over
                  </h2>
                </div>
                <div className='col-lg-8 mb-30'>
                  <div className='box-numbers'>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={469} />k</h3>
                      <p className='text-xl neutral-700'>Social followers</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={25} />k+</h3>
                      <p className='text-xl neutral-700'>Happy Clients</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={756} />+</h3>
                      <p className='text-xl neutral-700'>Projects Done</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={100} />+</h3>
                      <p className='text-xl neutral-700'>Global branches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: Pricing ── */}
          <section className='section-box box-pricing-2 box-pricing-4'>
            <div className='box-pricing-2-inner'>
              <div className='container'>
                <div className='text-center'>
                  <Link className='btn btn-brand-4-sm' href='#'>
                    Pricing Plan
                  </Link>
                  <h2 className='mb-20 mt-15'>
                    Your competitors are getting found. 
                    <br className='d-none d-lg-block' />You should be, too!
                  </h2>
                  <p className='text-lg neutral-500 mb-65'>
                    There is no secret to search. It is consistent, well-executed work by people who know what they are doing. We do that work every day for businesses in four countries across industries.
                  </p>
                </div>
                <div className='block-pricing'>
                  <div className='row'>
                    {[
                      { title: "Basic", monthly: "$99", yearly: "$1,188" },
                      { title: "Professional", monthly: "$199", yearly: "$2,388" },
                      { title: "Enterprise", monthly: "$399", yearly: "$4,788" },
                    ].map((plan, idx) => (
                      <div className='col-lg-4 col-md-6' key={idx}>
                        <div className='card-pricing card-pricing-style-2'>
                          <div className='card-title'>
                            <h6>{plan.title}</h6>
                          </div>
                          <div className='card-price'>
                            <div className='for-month'>
                              <h1 className='heading-1'>{plan.monthly}</h1>
                              <span className='text-20-medium color-grey'>monthly</span>
                            </div>
                            <div className='for-year'>
                              <h1 className='heading-1'>{plan.yearly}</h1>
                              <span className='text-20-medium color-grey'>yearly</span>
                            </div>
                          </div>
                          <div className='card-lists'>
                            <strong className='text-18-bold'>What's included</strong>
                            <ul className='list-feature'>
                              {["5,000 Monthly Word Limit", "50+ Languages", "Advance Editor Tool", "50 Accounts"].map((feature, i) => (
                                <li key={i}>
                                  <svg xmlns='http://www.w3.org/2000/svg' width={26} height={26} viewBox='0 0 26 26' fill='none'>
                                    <g clipPath={`url(#clip_${idx}_${i})`}>
                                      <path d='M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z' fill='#C5FF55' />
                                      <path d='M7.11719 13.8396L10.479 17.2014L18.8835 8.79688' stroke='#191919' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                                    </g>
                                    <defs>
                                      <clipPath id={`clip_${idx}_${i}`}>
                                        <rect width={26} height={26} fill='white' />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className='card-button'>
                            <Link className='btn btn-get-started' href='#'>
                              Get started
                              <svg width={23} height={8} viewBox='0 0 23 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z' fill='true' />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
}