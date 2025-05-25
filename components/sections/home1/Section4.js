/** @format */

export default function Section4() {
  return (
    <>
      <section className='section-box wow animate__animated animate__fadeIn box-preparing-2'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='mb-15'>
              Why choose us as your Digital Marketing Partner?
            </h2>
            <p className='text-lg neutral-700'>
              At Adfinity Clarity, we make digital marketing easy. Our team
              creates simple, effective strategies to help your business grow.
              We focus on what matters most, which are results. We offer
              services like SEO, social media marketing, and paid advertising.
              Our goal is to help you get more website visitors, more leads,
              more traffic and hence, more sales. We make sure everything we do
              works in the direction of your marketing goals. Our commitment is
              clear communication. We provide simple analytics reports so that
              you can always be up to date with the progress. We also stay on
              top of the latest trends to keep your business ahead of the
              competition. Choose us as your partner. Together, we can help your
              business succeed online
            </p>
          </div>
          <div className='row mt-90'>
            <div className='col-lg-4 col-md-6'>
              <div className='card-preparing'>
                <div className='card-image'>
                  <img
                    className='wow fadeInUp'
                    src='/assets/imgs/page/homepage1/img-prepare.png'
                    alt='Nivia'
                  />
                </div>
                <div className='card-info'>
                  <h5>SEO Services</h5>
                  <p className='text-lg neutral-700 w-85 mx-auto'>
                    We can help you reach top rankings on major search engines
                  </p>
                  {/* <ul className='text-lg neutral-700 w-85 mx-auto list'>
                    <li className='my-2'> SEO Audits</li>
                    <li className='my-2'>Keyword Research</li>
                    <li className='my-2'>Content Creation</li>
                    <li className='my-2'>On-page SEO</li>
                    <li className='my-2'>Technical Seo</li>
                    <li className='my-2'>Off-Page SEO</li>
                    <li className='my-2'>Link Building</li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card-preparing'>
                <div className='card-image'>
                  <img
                    className='wow fadeInUp'
                    src='/assets/imgs/page/homepage1/img-prepare2.png'
                    alt='Nivia'
                  />
                </div>
                <div className='card-info'>
                  <h5>Paid Advertisement Services</h5>
                  <p className='text-lg neutral-700 w-85 mx-auto'>
                    This is all you need to drive instant results with Social
                    Media Ads
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card-preparing'>
                <div className='card-image'>
                  <img
                    className='wow fadeInUp'
                    src='/assets/imgs/page/homepage1/img-prepare3.png'
                    alt='Nivia'
                  />
                </div>
                <div className='card-info'>
                  <h5>Web Design Services</h5>
                  <p className='text-lg neutral-700 w-85 mx-auto'>
                    We create custom websites, landing pages, and UI/UX designs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
