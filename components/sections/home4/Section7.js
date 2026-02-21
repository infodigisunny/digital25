'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section7() {
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

            <section className="section-box box-faqs-7">
                <div className="container">
                    <div className="box-faqs-inner">
                        <div className="text-center"> <div className="btn btn-brand-4-sm">Frequently Asked Questions (FAQ)</div>
                            <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                        </div>
                        <div className="box-faqs-inner-4">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">How can digital marketing help my business grow online efficiently?</button>
                                    </h3>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p><Link href="/digital-marketing">Digital marketing company</Link> brings in new customers, improves online visibility, and increases sales through targeted channels like SEO, social media, and paid advertising. It seeks to reach the right audience at the right time, offering measurable results.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">What digital marketing service should I start with if I'm new to the field?</button>
                                    </h3>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Begin with SEO and a solid website. They serve as the foundation for most strategies. As your brand grows, you can expand your reach by adding paid ads, email campaigns, and social media to keep people engaged.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How is my digital marketing working? </button>
                                    </h3>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">You can see clear signs such as more website traffic, better search rankings, more leads, and higher conversion rates. Tools like Google Analytics, Search Console, and CRM reports can help you track performance.
</div>
                                    </div>
                                </div>
                               <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How do you improve ROI with digital marketing services?</button>
                                    </h3>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Digital marketing campaigns target people more precisely than traditional media. Better targeting means less waste in budgets, resulting in better results. Additionally, the ability to utilize tracking tools means you can identify what worked and what didn't in order to make adjustments.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(5)}>
                                        <button className={isActive.key == 5 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Will digital marketing work for small and local businesses?</button>
                                    </h3>
                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes. Utilizing local SEO, optimizing your Google Business Profile and using location-based ads helps smaller businesses reach customers nearby that are searching for their services or products.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(6)}>
                                        <button className={isActive.key == 6 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How long does it take to see results from digital marketing?</button>
                                    </h3>
                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">SEO generally takes between 3 and 6 months to yield results, while paid ads or email marketing can yield results far more quickly. A good <Link href="/digital-marketing">Digital marketing agencies</Link> strategy is a balance between filling your immediate cash flow needs and your longer-term needs for growth.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(7)}>
                                        <button className={isActive.key == 7 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">What should I look for in a digital marketing agency?</button>
                                    </h3>
                                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Look for honest reporting that is easy to digest for a lay person, have a proven track record for success, proven results in the past that relate to your industry, and good communication. A successful agency will align their <Link href="/digital-marketing">Digital marketing services</Link> objectives with your goals and will keep within your budget.
</div>
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
