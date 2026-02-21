'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section11() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <section className="section-box box-faqs-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="box-faq-left"><div className="btn btn-brand-4-sm">Frequently Asked Questions</div>
                                <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                                <p className="text-lg neutral-700">Below you’ll find answers to the most common questions you may have on Adfinity Clarity
Platform Online Advertising. If you still can’t find the answer you’re looking for, just <a href="mailto:contact@adfinityclarity.com" className="text-18-bold brand-1-1">Contact Us
</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What does an internet marketing agency do?</button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p>An <Link href="/">internet marketing agency</Link> helps businesses grow online. It offers services like SEO,
online ads, content creation, email marketing, and digital PR. These services work together
to attract more visitors, generate leads, and increase sales.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Why is SEO important for my business?</button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">SEO improves your website’s visibility in search engines like Google, helping it appear higher
in search results. This means more people can find your business when they’re searching
online. It’s one of the most affordable ways to get long-term traffic and build trust.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Is email marketing still effective?</button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes, email marketing consistently delivers, and well-timed emails outperform many newer channels by building lasting customer relationships, driving repeat business, and delivering some of the highest ROI in digital marketing.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">What are digital marketing agency, and how can they help my business?</button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body"><Link href="/digital-marketing">Digital marketing agencies</Link> help you promote your business online. They include things like
SEO, social media marketing, paid ads, and email campaigns. These tools work together to
help you reach more people, get new leads, and increase your sales by sharing the right
message with the right audience.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
