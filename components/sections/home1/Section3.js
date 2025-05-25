/** @format */

import Link from "next/link";

export default function Section3() {
  return (
    <>
      <section className='section-box wow animate__animated animate__fadeIn box-our-track'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 text-center mb-40'>
              <img
                src='/assets/imgs/page/homepage1/img-track.png'
                alt='Nivia'
              />
            </div>
            <div className='col-lg-6 mb-40'>
              <div className='box-padding-left-50'>
                <div className='strate-icon'>
                  <span /> Strategies that work
                </div>
                <h2 className='heading-2 mb-20'>
                  A Leading Digital Marketing & SEO Company
                </h2>
                <p className='text-lg neutral-700'>
                  We help businesses grow by offering custom plans in Digital
                  Marketing and Search Engine Optimization. We bring in more
                  visitors and help you get noticed. Let us help pave your way
                  to success.
                </p>
                <div className='row mt-50'>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='card-feature-2'>
                      <div className='card-image'>
                        <img src='/assets/imgs/page/homepage3/marketing.svg' />
                      </div>
                      <div className='card-info'>
                        <Link href='#'>
                          <h3 className='text-22-bold'>
                            SEO - Search Engine Optimization
                          </h3>
                        </Link>
                        <p className='text-md neutral-700'>
                          Get more traffic and leads from search engine rankings
                          with award winning SEO services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='card-feature-2'>
                      <div className='card-image'>
                        <img src='/assets/imgs/page/homepage3/digital.svg' />
                      </div>
                      <div className='card-info'>
                        <Link href='#'>
                          <h3 className='text-22-bold'>
                            Social Media Marketing
                          </h3>
                        </Link>
                        <p className='text-md neutral-700'>
                          Our social media team experts who can manage your
                          social media campaigns 24/7, so you don’t need a
                          dedicated in-house staff to run your campaigns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='card-feature-2'>
                      <div className='card-image'>
                        <img src='/assets/imgs/page/homepage3/product.svg' />
                      </div>
                      <div className='card-info'>
                        <Link href='#'>
                          <h3 className='text-22-bold'>PPC - Pay Per Click</h3>
                        </Link>
                        <p className='text-md neutral-700'>
                          PPC campaign ensures that your money is put to the
                          best possible use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='card-feature-2'>
                      <div className='card-image'>
                        <img src='/assets/imgs/page/homepage3/social.svg' />
                      </div>
                      <div className='card-info'>
                        <Link href='#'>
                          <h3 className='text-22-bold'>
                            Web Design & Web Development{" "}
                          </h3>
                        </Link>
                        <p className='text-md neutral-700'>
                          We can bring your web design vision and ideas to life
                          through innovative custom design for your business.
                        </p>
                      </div>
                    </div>
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
