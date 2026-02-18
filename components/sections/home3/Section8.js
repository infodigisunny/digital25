'use client'
import Link from 'next/link'
import { useState } from "react"
export default function Section8() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="section-box box-preparing">
                <div className="box-preparing-inner">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">From Local to Global,<br className="d-none d-lg-block" /> The SEO TYPES That Help Your Business</h2>
                            <p className="text-lg"><Link href="/seo-search-engine-optimization">SEO services</Link> comes in a variety of types and is suited to different requirements. The two most widespread are:</p>
                            <div className="box-button-preparing">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">International SEO</a></li>
                                    <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Ecommerce SEO</a></li>
                                    <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">AI SEO</a></li>
                                    <li onClick={() => handleOnClick(4)}><a className={activeIndex === 4 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Local SEO</a></li>
                                    <li onClick={() => handleOnClick(5)}><a className={activeIndex === 5 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Enterprise SEO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-group-preparing">
                            <div className="tab-content">
                                <div  className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-1">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">International SEO</h2>
                                            <p className="text-lg neutral-700">Our international SEO services expand companies on a worldwide scale. We optimize the website in multiple languages and cultures to produce maximum visibility in the targeted markets. We engage in hreflang tags, geo-targeting, and specifically local search engines to increase international traffic and generate conversions. By building international SEO strategies based on specific business requirements, we will improve your online presence in foreign markets.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Multilingual SEO</li>
                                                    <li>Multiregional SEO</li>
                                                    <li>Hreflang SEO</li>
                                                    <li>Geo-Targeted SEO</li>
                                                    <li>Global Technical SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-2">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-2" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Ecommerce SEO</h2>
                                            <p className="text-lg neutral-700">Ecommerce SEO is an integral part of an online store because the competition is fierce. Our ecommerce <Link href="/seo-search-engine-optimization">SEO services</Link> will help you rank in the search engines by optimizing product pages, product categories, and money pages (website content). Our ecommerce SEO services improve website structure, user experience, and conversion with the outcome being a higher rank in the search engines. Finally, our ecommerce SEO techniques are supported by data through product schema markup and faceted navigation to give the company the highest visibility. Our ecommerce professionals can increase your website traffic with targeted prospects, convert visitors to sales, and improve brand credibility using ecommerce SEO strategies.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>WordPress SEO</li>
                                                    <li>Shopify SEO</li>
                                                    <li>WooCommerce SEO</li>
                                                    <li>Magento SEO</li>
                                                    <li>BigCommerce SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-3">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-3" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">AI SEO</h2>
                                            <p className="text-lg neutral-700">AI SEO drives search engine Optimization. With the advancement of machine learning algorithms and programs that collect user behaviour and trends, we can help you create and optimize content quickly and easily through our Artificial Intelligence platforms. In addition, we can automate many of your manual and tedious processes and allocate those resources back to the planning phase. Our AI SEO marketing tools make it easy to deliver efficient and effective results for content optimization, keywords, and link building using machine learning algorithms to find patterns and predict trends. Since the digital world is constantly evolving, utilizing our AI platforms will keep you ahead of the competition.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Algorithmic Optimization</li>
                                                    <li>AI-Powered SEO</li>
                                                    <li>E.E.A.T Content SEO</li>
                                                    <li>Automation SEO</li>
                                                    <li>Programmatic SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-4">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-4" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Local SEO</h2>
                                            <p className="text-lg neutral-700">Local SEO helps companies and businesses grow and expand in a specific area. We can optimize Google My Business listings, build relevant and high quality local citations, and create and publish content for a specific location. Ultimately, the goal is to get into the top local search results to drive foot traffic and conversions. Our team understands the local search algorithms of search engines and the importance of local intent, so we make sure that businesses are well represented in local searches and are in front of local customers.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Google Business Profile SEO</li>
                                                    <li>Local Citation Building</li>
                                                    <li>Local On-Page Optimization</li>
                                                    <li>Review & Reputation SEO</li>
                                                    <li>Map Pack Optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-5">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-5" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Enterprise SEO</h2>
                                            <p className="text-lg neutral-700">Enterprise SEO is a big-time scalable strategy. In enterprise SEO, we help large companies scale through strategic planning. With enterprise SEO, you are responsible for a large, complex website and thousands of pieces of content -- no problem! For us, we can work together to create a scalable SEO strategy when we understand where and how best to be effective with technical SEO. We also understand that we are here to help stakeholders drive the business and increase brand visibility and conversions as well. We approach this through data-driven SEO activities.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Large-Scale SEO</li>
                                                    <li>Enterprise-Level SEO</li>
                                                    <li>Multi-Site SEO</li>
                                                    <li>Global Business SEO</li>
                                                    <li>High-Traffic SEO</li>
                                                </ul>
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
    )
}
