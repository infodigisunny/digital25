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
          content="AdFinity Clarity helps businesses get found online through search and digital marketing. Teams in USA, UK, India, and Australia. 500+ campaigns. 94% retention rate."
        />
        <meta property="og:title" content="About Us | Adfinity Clarity" />
        <meta
          property="og:description"
          content="We started with a question: Why do good businesses stay invisible online? AdFinity Clarity takes rankings seriously — transparent, consistent, results-driven digital marketing."
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
                    <h2 className='display-2 mt-15 mb-25'>
                      We started with a question: Why do good businesses stay invisible online?
                    </h2>
                    <p className='text-xl mb-45'>
                      It turns out that most of them just never had the right people to help them.
                    </p>
                    <div className='box-buttons-feature-4'>
                      <Link className='btn btn-brand-4-medium mr-20' href='#'>
                        See What We Do
                        <svg width={22} height={8} viewBox='0 0 22 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z' fill='true' />
                        </svg>
                      </Link>
                      <Link className='btn btn-learmore-2' href='#'>
                        <span>
                          <svg width={39} height={38} viewBox='0 0 39 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='0.5' width={38} height={38} rx={19} fill='#191919' />
                            <g clipPath='url(#clip0_1_376)'>
                              <path d='M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z' fill='#C5FF55' />
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
                    <div className='box-border-left-author'>
                      <p className='text-22-bold'>
                        We facilitate the creation of strategy, design, and implementation
                      </p>
                      <div className='box-joined'>
                        <div className='box-authors'>
                          <span className='item-author'>
                            <img src='/assets/imgs/page/homepage1/author.png' alt='Adfinity Clarity' />
                          </span>
                          <span className='item-author'>
                            <img src='/assets/imgs/page/homepage1/author2.png' alt='Adfinity Clarity' />
                          </span>
                          <span className='item-author'>
                            <img src='/assets/imgs/page/homepage1/author3.png' alt='Adfinity Clarity' />
                          </span>
                          <span className='item-author'>
                            <span className='text-num-author text-md-bold color-brand-2'>+2k</span>
                          </span>
                        </div>
                        <span className='text-lg d-inline-block'>
                          Join thousands of users in using
                          <br className='d-none d-md-block' />
                          the Adfinity Clarity platform!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='box-image-rect'>
                    <img src='/assets/imgs/page/about/img-about.png' alt='Adfinity Clarity' />
                  </div>
                </div>
              </div>

              {/* ── Who We Are Row ── */}
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='box-image-rect box-image-rect-both'>
                    <img src='/assets/imgs/page/about/img-about2.png' alt='Adfinity Clarity' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='padding-right-auto'>
                    <div className='box-padding-left-50 box-padding-right-50'>
                      <div className='strate-icon'>
                        <span /> We take rankings very seriously
                      </div>
                      <h2 className='heading-2 mb-20'>
                        We are AdFinity Clarity.
                      </h2>
                      <p className='text-lg neutral-700 mb-20'>
                        We built this company because we saw the problem over and over. Businesses with great products were losing to competitors who were simply better at search. This did not seem right to us. It still does not.
                      </p>
                      <p className='text-lg neutral-700 mb-20'>
                        AdFinity Clarity helps with search and digital marketing. We have teams in the USA, UK, India, and Australia. We have worked with companies chasing their first 1,000 visitors and with brands fighting to recover rankings after algorithm changes. Both situations need serious work. That is what we do.
                      </p>
                      <p className='text-lg neutral-700'>
                        We are not here to sell you something and then disappear. We are here to help your business get found — by the right people, at the right time, on the right platform.
                      </p>
                      <div className='row mt-50'>
                        <div className='col-xl-6 col-lg-12 col-sm-6'>
                          <div className='card-feature-2'>
                            <div className='card-image'>
                              <img src='/assets/imgs/page/homepage3/discover.svg' alt='Search First' />
                            </div>
                            <div className='card-info'>
                              <Link href='#'>
                                <h3 className='text-22-bold'>Search-First Strategy</h3>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-12 col-sm-6'>
                          <div className='card-feature-2'>
                            <div className='card-image'>
                              <img src='/assets/imgs/page/homepage3/keep.svg' alt='Full-Picture Approach' />
                            </div>
                            <div className='card-info'>
                              <Link href='#'>
                                <h3 className='text-22-bold'>Full-Picture Digital Approach</h3>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Two Things We Never Compromise On ── */}
          <section className='section-box box-prepared-section'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-6 mb-30'>
                  <h2 className='heading-2'>
                    Two Things We Never Compromise On
                  </h2>
                </div>
                <div className='col-lg-6 mb-30'>
                  <h6 className='neutral-500'>
                    Since 2010 we've been working with amazing organisations to
                    create meaningful impact and compelling digital experiences across the globe.
                  </h6>
                </div>
              </div>
              <div className='row mt-45'>
                <div className='col-lg-6'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/marketing.svg' alt='Search First' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>Search is our starting point</h3>
                        <p className='text-lg neutral-500'>
                          Before we write anything or run an ad, we study how your customers search — what they type, what they skip, what makes them click. This research drives everything: content, page optimisation, and keyword targeting. Most companies think about search later. We treat it as the foundation.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/digital.svg' alt='Full Picture' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>We look at the full picture</h3>
                        <p className='text-lg neutral-500'>
                          A ranking page that does not convert is just a waste of money. We look at search, paid media, social, and content together — making sure each channel does its job and supports the others. This is how you stop losing opportunities and start winning them.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: How We Work (3 pillars) ── */}
          <section className='section-box box-prepared-section' style={{ paddingTop: 0 }}>
            <div className='container'>
              <div className='row align-items-end mb-45'>
                <div className='col-lg-6'>
                  <h2 className='heading-2'>
                    Three Things You Must Know About How We Work
                  </h2>
                </div>
                <div className='col-lg-6'>
                  <h6 className='neutral-500'>
                    Clarity is not just our name — it is how we operate every single day.
                  </h6>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/marketing.svg' alt='How we think' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>How we think</h3>
                        <p className='text-lg neutral-500'>
                          Clarity is not our name. It is how we work. We do not use language or make reports that are hard to understand. When something is working, we tell you why. When it is not, we tell you that too — and we bring a solution.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/digital.svg' alt='What we try to do' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>What we try to do</h3>
                        <p className='text-lg neutral-500'>
                          We want to make high-quality search and digital marketing available to all businesses — not just the ones with big budgets. Where you are should not determine whether you can grow online. A good strategy should.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/product.svg' alt='What makes us different' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>What makes us different</h3>
                        <p className='text-lg neutral-500'>
                          We do not rotate the people who work on your account every month. The people you meet at the start are the ones who do the work. They know your industry, track your competitors, and care about your numbers.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Four Countries ── */}
          <section className='section-box box-our-offices'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-8'>
                  <h2 className='neutral-0'>Four Countries. One Standard of Work.</h2>
                  <p className='text-lg neutral-500 mt-15'>
                    We chose to build regional teams instead of one central team trying to serve everyone. Each team knows its market deeply.
                  </p>
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

              {/* Country Cards */}
              <div className='row mt-45'>
                {[
                  {
                    flag: "🇺🇸",
                    country: "United States",
                    desc: "We work with businesses across eCommerce, B2B, healthcare, and professional services. Our US team understands search behaviour, competitor landscapes, and buyer intent patterns.",
                  },
                  {
                    flag: "🇬🇧",
                    country: "United Kingdom",
                    desc: "Our team navigates the UK search market and its quirks — content, Google UK dynamics, and industry-specific search trends that require a local perspective.",
                  },
                  {
                    flag: "🇮🇳",
                    country: "India",
                    desc: "Our India team supports local businesses that want to scale and international companies that want to establish a strong digital presence in the region.",
                  },
                  {
                    flag: "🇦🇺",
                    country: "Australia",
                    desc: "Our Australia team builds campaigns that reflect how Australian audiences search, trust, and buy — driving results that feel native, not imported.",
                  },
                ].map((item, idx) => (
                  <div className='col-lg-3 col-md-6 mb-30' key={idx}>
                    <div className='card-feature-2 card-feature-list' style={{ height: "100%" }}>
                      <div className='card-image' style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                        {item.flag}
                      </div>
                      <div className='card-info'>
                        <h3 className='text-22-bold mb-10'>{item.country}</h3>
                        <p className='text-lg neutral-500'>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='box-swiper mt-45'>
                <div className='swiper-container swiper-group-1'>
                  <OfficeSlider />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: Team ── */}
          <section className='section-box wow animate__animated animate__fadeIn box-our-team-2'>
            <div className='box-our-team-2-inner'>
              <div className='container'>
                <div className='text-center'>
                  <Link className='btn btn-brand-4-sm' href='#'>
                    Our People
                  </Link>
                  <h2 className='mb-20 mt-20'>The Team You Will Work With</h2>
                  <p className='text-md neutral-500'>
                    No hand-offs to someone you have never spoken to. Our strategists, search specialists,
                    <br className='d-none d-lg-block' />
                    content leads, and paid media managers are people you get to know.
                  </p>
                </div>
                <div className='box-swiper mt-60'>
                  <Team2Slider />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Awards ── */}
          <section className='section-box box-awards-section'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-4 mb-30'>
                  <h2 className='mb-15'>Our Awards</h2>
                  <p className='text-md neutral-700'>
                    Recognised globally for our commitment to transparent digital marketing and data-driven campaign excellence — a reflection of our team's dedication to client success.
                  </p>
                </div>
                <div className='col-lg-8 mb-30'>
                  <div className='row align-items-end'>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award.png' alt='Adfinity Clarity Award' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award2.png' alt='Adfinity Clarity Award' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award3.png' alt='Adfinity Clarity Award' />
                    </div>
                    <div className='col-sm-3 col-6 mb-30'>
                      <img src='/assets/imgs/page/about/award4.png' alt='Adfinity Clarity Award' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Get in Touch ── */}
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
                  <h2 className='mb-20 mt-20'>We Are Easy to Find and Even Easier to Talk To</h2>
                  <p className='text-md neutral-700'>
                    Whether you want to discuss a project, ask a question, or get an opinion on your search — we are happy to talk. No pitch decks, no pressure. Just a straight conversation.
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

          {/* ── Section 8: Stats ── */}
          <section className='section-box box-why-trusted box-why-trusted-black'>
            <div className='container'>
              <div className='row align-items-end'>
                <div className='col-lg-4 mb-30'>
                  <h2 className='text-32-bold'>
                    Numbers We Are
                    <br className='d-none d-lg-block' /> Proud Of
                  </h2>
                </div>
                <div className='col-lg-8 mb-30'>
                  <div className='box-numbers'>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={500} />+</h3>
                      <p className='text-xl neutral-700'>Campaigns Delivered</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={94} />%</h3>
                      <p className='text-xl neutral-700'>Client Retention Rate</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={12} />+</h3>
                      <p className='text-xl neutral-700'>Industries Served</p>
                    </div>
                    <div className='item-number'>
                      <h3 className='heading-2'><CounterUp count={4} /></h3>
                      <p className='text-xl neutral-700'>Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Why Clients Stay ── */}
          <section className='section-box box-prepared-section'>
            <div className='container'>
              <div className='row align-items-end mb-45'>
                <div className='col-lg-6'>
                  <h2 className='heading-2'>
                    Why Clients Stay With Us — and Why That Matters
                  </h2>
                </div>
                <div className='col-lg-6'>
                  <h6 className='neutral-500'>
                    Most companies are easy to sign with. The real test is what happens six months later.
                  </h6>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/marketing.svg' alt='Results' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>The work is good</h3>
                        <p className='text-lg neutral-500'>
                          Our retention rate is high because rankings move, traffic builds, and leads come in. When clients see that, they do not leave.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/digital.svg' alt='Data' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>Data that makes sense</h3>
                        <p className='text-lg neutral-500'>
                          We analyse reports, explain what they mean, and tell you what we are doing next. You are never left wondering if your investment is working.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card-feature-2 card-feature-list'>
                    <div className='card-image'>
                      <img src='/assets/imgs/page/homepage3/product.svg' alt='Transparent' />
                    </div>
                    <div className='card-info'>
                      <Link href='#'>
                        <h3 className='text-22-bold'>Radical transparency</h3>
                        <p className='text-lg neutral-500'>
                          We believe in being transparent. When Google changes something, we reach out first. No surprises, no excuses — just honest communication.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 10: Social / Stay Connected ── */}
          <section className='section-box box-awards-section'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-5 mb-30'>
                  <h2 className='mb-15'>Stay Connected. We Share What We Know.</h2>
                  <p className='text-md neutral-700'>
                    Real talk on SEO, algorithm updates, and digital strategy — the kind of content you can actually use, not just scroll past.
                  </p>
                </div>
                <div className='col-lg-7 mb-30'>
                  <div className='row'>
                    {[
                      {
                        platform: "LinkedIn",
                        handle: "AdFinity Clarity on LinkedIn",
                        desc: "Real talk on SEO, algorithm updates, and digital strategy — the kind of content you can actually use.",
                        href: "#",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ),
                      },
                      {
                        platform: "Instagram",
                        handle: "@AdfinityClarity",
                        desc: "Campaign results, team culture, quick marketing breakdowns, and honest posts about what doesn't always work.",
                        href: "#",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                      },
                      {
                        platform: "Facebook",
                        handle: "AdFinity Clarity",
                        desc: "Client stories, industry news, and a community for businesses figuring out their digital growth — wherever they're starting from.",
                        href: "#",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        ),
                      },
                    ].map((social, idx) => (
                      <div className='col-lg-4 col-md-4 col-sm-12 mb-30' key={idx}>
                        <div className='card-feature-2 card-feature-list' style={{ height: "100%" }}>
                          <div className='card-image' style={{ color: "#191919" }}>
                            {social.icon}
                          </div>
                          <div className='card-info'>
                            <h3 className='text-22-bold mb-5'>{social.platform}</h3>
                            <p className='text-md neutral-500 mb-10' style={{ fontSize: "0.85rem" }}>{social.handle}</p>
                            <p className='text-lg neutral-500'>{social.desc}</p>
                            <Link href={social.href} className='btn btn-tag-black mt-15' style={{ fontSize: "0.8rem" }}>
                              Follow Us
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

          {/* ── Section 11: Stats (brand numbers) ── */}
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

          {/* ── Section 12: CTA – Free Audit ── */}
          <section className='section-box box-pricing-2 box-pricing-4'>
            <div className='box-pricing-2-inner'>
              <div className='container'>
                <div className='text-center'>
                  <Link className='btn btn-brand-4-sm' href='#'>
                    Your Competitors Are Getting Found
                  </Link>
                  <h2 className='mb-20 mt-15'>
                    You Should Be, Too.
                    <br className='d-none d-lg-block' /> Let's Find Out Why You Aren't.
                  </h2>
                  <p className='text-lg neutral-500 mb-45'>
                    There is no secret to search. It is consistent, well-executed work by people who know what they are doing.
                    <br className='d-none d-lg-block' />
                    If your website is not bringing in the leads it should, let us find out why.
                  </p>
                  <Link className='btn btn-brand-4-medium' href='#'>
                    Get a Free Search Audit — No Strings Attached
                    <svg width={22} height={8} viewBox='0 0 22 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z' fill='true' />
                    </svg>
                  </Link>
                </div>

                {/* Pricing Plans */}
                <div className='block-pricing mt-65'>
                  <div className='text-center mb-40'>
                    <Link className='btn btn-brand-4-sm' href='#'>
                      Pricing Plan
                    </Link>
                    <h2 className='mb-20 mt-15'>
                      Ready to Get Started? Don't Worry,
                      <br className='d-none d-lg-block' /> We'll Keep You Under Budget
                    </h2>
                    <p className='text-lg neutral-500 mb-65'>
                      Get started with a 5-day trial, 25% off for Yearly Plan, Cancel anytime.
                    </p>
                  </div>
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