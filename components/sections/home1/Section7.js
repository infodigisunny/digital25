/** @format */

import Link from "next/link";

export default function Section7() {
  return (
    <>
      <section className='section-box wow animate__animated animate__fadeIn box-how-it-work'>
        <div className='container'>
          <div className='btn btn-brand-4-sm' href='#'>
            How It Works
          </div>
          <h2 className='mt-15 mb-20'>
            3 Simple Steps to Digital Marketing Success
          </h2>
          <p className='text-lg neutral-500 mb-55'>
            Let us help you grow your business with a straight forward approach to <Link href="/digital-marketing">Digital Marketing</Link>.
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
                      We begin by understanding your business and your goals. This way, we can create the best
plan for your needs. Drive more leads, boost sales, and grow your revenue with digital
marketing from Adfinity Clarity. 
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
                      We get to know your market, your audience, and what sets you apart. Then we build a
smart, focused plan that connects the right message with the right people—so your
business doesn’t just grow, it thrives.
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
                      Once your campaigns are up and running, we keep a close eye on them. We&#39;ll track their
performance and run mitigation strategies to get the best results. Our focus is on driving
more leads, increasing sales, and growing your business.
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
               We’re a <Link href="/digital-marketing">Digital Marketing Agency</Link> that focuses on strategies that bring real results. Our goal
is simple: drive growth, increase revenue, and boost profits while maintaining high quality.
How do we do it? We take full responsibility for your success. Unlike other agencies, we
base our fees on your goals. Your KPIs become our KPIs. When you succeed, we succeed.
We don’t just market your business, we partner with you. Here’s the power of working with
experts committed to driving results.
              </p><br></br><br></br>
              <h2>
                ACHIEVE YOUR GOALS FASTER
              </h2>
              <p className='text-md mt-5'>
               We help our clients succeed by being true partners, not just service providers. By handling
your entire digital marketing strategy, we make things easier. You can hit your goals faster
with top marketing experts from around the world, using proven tools, not shortcuts. Here’s
how we do it.
 </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
