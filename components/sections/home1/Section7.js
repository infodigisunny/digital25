/** @format */

import Link from "next/link";

export default function Section7() {
  return (
    <>
      <section className='section-box wow animate__animated animate__fadeIn box-how-it-work'>
        <div className='container'>
          <Link className='btn btn-brand-4-sm' href='#'>
            How It Works
          </Link>
          <h2 className='mt-15 mb-20'>
            3 Simple Steps to Digital Marketing Success
          </h2>
          <p className='text-lg neutral-500 mb-55'>
            Let us help you grow your business with a straightforward approach
            to digital marketing.
          </p>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='box-border-rounded'>
                <div className='card-casestudy'>
                  <div className='card-title'>
                    <h6>
                      <span className='number'>1</span> Get Started with Us
                    </h6>
                  </div>
                  <div className='card-desc'>
                    <p>
                      We begin by understanding your business and your goals.
                      This way, we can create the best plan for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='box-border-rounded'>
                <div className='card-casestudy'>
                  <div className='card-title'>
                    <h6>
                      <span className='number'>2</span>Crafting Your Strategy
                    </h6>
                  </div>
                  <div className='card-desc'>
                    <p>
                      Next, we take a close look at your market, understand your
                      audience and assess your competition. With this
                      understanding, we create a strategy designed to meet your
                      goals and help your business succeed in the long run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='box-border-rounded'>
                <div className='card-casestudy'>
                  <div className='card-title'>
                    <h6>
                      <span className='number'>3</span> Delivering Results &
                      Growing Your Business
                    </h6>
                  </div>
                  <div className='card-desc'>
                    <p>
                      Once your campaigns are up and running, we keep a close
                      eye on them. Wel track their performance and run
                      mitigation strategies to get the best results. Our focus
                      is on driving more leads, increasing sales, and growing
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-25'>
          <div className='box-newsletter'>
            <div className='newsletter-left'>
              <h2>
                TRANSFORM YOUR BUSINESS WITH RESULTS-DRIVEN DIGITAL MARKETING
              </h2>
              <p className='text-md mt-5'>
                We’re a digital marketing agency that focuses on strategies that
                bring real results. Our goal is simple: drive growth, increase
                revenue, and boost profits while maintaining high quality. How
                do we do it? We take full responsibility for your success.
                Unlike other agencies, we base our fees on your goals. Your KPIs
                become our KPIs. When you succeed, we succeed. We don’t just
                market your business, we partner with you. Here’s the power of
                working with experts committed to driving results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
