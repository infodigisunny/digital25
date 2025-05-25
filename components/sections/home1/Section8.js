/** @format */

"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
};

export default function Section8() {
  return (
    <>
      <section className='section-box wow animate__animated animate__fadeIn box-discover'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 mb-30'>
              <div className='box-image-neutral-1000'>
                <img
                  src='/assets/imgs/page/homepage1/img-discover.png'
                  alt='Nivia'
                />
              </div>
            </div>
            <div className='col-lg-6 mb-30'>
              <h2>Our Expertise in Different Industries</h2>
              <p className='text-lg neutral-500'>
                At Adfinity Clarity, we have worked with businesses in many
                industries. We focus on finding solutions that work for you.
                Here’s how:
              </p>
              {/* <div className='box-buttons-feature-4'>
                <Link className='btn btn-brand-4-medium mr-20' href='#'>
                  Subscribe
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
                      <rect
                        x='0.5'
                        width={38}
                        height={38}
                        rx={19}
                        fill='#191919'
                      />
                      <g clipPath='url(#clip0_1_376)'>
                        <path
                          d='M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z'
                          fill='#C5FF55'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_1_376'>
                          <rect
                            width={13}
                            height={13}
                            fill='white'
                            transform='translate(13.5 13)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Learn More
                </Link>
              </div> */}
              <div className='box-reviews-home5'>
                <div className='box-swiper'>
                  <div className='swiper-container swiper-group-1'>
                    <Swiper {...swiperOptions}>
                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>B2B Marketing</h5>
                          <p className='text-lg'>
                            We help businesses build strong relationships. Our
                            goal is to make your brand stand out and be
                            remembered by your clients.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Education</h5>
                          <p className='text-lg'>
                            We help schools and universities connect with
                            students and families. We highlight what makes your
                            institution special so people find you
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Automotive</h5>
                          <p className='text-lg'>
                            The automotive market is tough. We help car brands
                            reach more customers and turn interest into trust.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Healthcare</h5>
                          <p className='text-lg'>
                            Trust is everything in healthcare. We help clinics
                            and providers get noticed and make sure patients
                            feel confident in their care.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Hospitality</h5>
                          <p className='text-lg'>
                            Guests want more than a place to stay. They want an
                            experience. We help you create great experiences
                            that keep visitors coming back.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Real Estate</h5>
                          <p className='text-lg'>
                            We help you show properties in a way that connects
                            with buyers. We tell the story of each home to help
                            people picture themselves living there.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>E-Commerce</h5>
                          <p className='text-lg'>
                            Shopping online is always changing. We help
                            e-commerce businesses make their websites easy to
                            use and increase sales.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Dental</h5>
                          <p className='text-lg'>
                            For dental practices, trust is key. We help you
                            bring in new patients and build a reputation people
                            rely on.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Law</h5>
                          <p className='text-lg'>
                            In law, your reputation counts. We help law firms
                            stand out, attract clients, and show their
                            expertise.
                          </p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='item-review-discover'>
                          <h5>Schools</h5>
                          <p className='text-lg'>
                            We help schools connect with students, parents, and
                            staff. We make sure everyone knows why your school
                            is the right choice.
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
