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

            <section className="section-box box-faqs-4">
                <div className="container">
                    <div className="box-faqs-inner">
                        <div className="text-center"> <Link className="btn btn-brand-4-sm" href="#">Frequently Asked Questions</Link>
                            <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                        </div>
                        <div className="box-faqs-inner-4">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What are some most effective digital marketing services?</button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p>For example, effective digital marketing services include Website Design to help build your online presence and Content Marketing to engage customers. Similarly, SEO helps you appear in search results, while Email Marketing keeps your audience informed. <br></br><br></br>
Marketing Automation saves time, and Social Media Marketing connects you with your community. Lastly, pay-per-click advertising brings fast traffic. As a result, these services help your business grow.
</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">How do digital marketing services contribute to business growth?</button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Digital marketing services play a critical role in business expansion because they help brands connect with more people online. <br></br><br></br>
Services like SEO, social media marketing and email campaigns help brands increase visibility while drawing in new customers and keeping existing ones engaged. <br></br><br></br>
Moreover, targeted ads ensure businesses reach the right target audiences at just the right time. In the same way, content marketing builds trust and credibility, while website optimisation ensures an excellent user experience. <br></br><br></br>
Ultimately, digital marketing helps boost sales, strengthen brand presence, and connect businesses with the people who can help grow them in an increasingly digital environment.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Which businesses can benefit from digital marketing services?</button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">In reality, digital marketing services can benefit any business of any size and scale. From local shops and startups to major corporations, having an online presence is crucial.<br></br><br></br>
Specifically, digital marketing allows companies to reach new customers while increasing brand recognition and driving sales growth, notably, especially for small companies competing against bigger brands or strengthening market positions. <br></br><br></br>
From e-commerce stores to service providers, digital marketing connects businesses with people online, making it easier to grow and thrive in today’s digital world. <br></br><br></br>
Therefore, if you want to succeed and stay competitive, digital marketing is a must.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Which keywords should I use for my Google Ads
                                            campaigns?</button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Discover what sets this apart as the market's easiest
                                            and most powerful video interviewing platform, and why hiring managers
                                            consistently choose us over the competition. Discover what sets this apart as
                                            the market's easiest and most powerful video interviewing platform, and why
                                            hiring managers consistently choose us over the competition</div>
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
