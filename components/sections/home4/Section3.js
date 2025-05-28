
import Link from 'next/link'

export default function Section3() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-our-track box-our-track-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center mb-40"><img src="/assets/imgs/page/homepage4/img-track.png" alt="Nivia" /></div>
                        <div className="col-lg-6 mb-40">
                            <div className="box-padding-left-50">
                                <div className="strate-icon"><span /> Strategies that work</div>
                                <h2 className="heading-2 mb-20">Why Choose Us for Your Digital Marketing Needs?</h2>
                                
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" alt="Nivia" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Customised Strategies</h3>
                                            </Link>
                                                <p className="text-md neutral-700">We understand that every business is unique. Our strategies are made to benefit your needs and goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Team Expertise</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Above all, we pride ourselves on having an expert team dedicated to providing results.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Proven Results</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Indeed, our track record speaks for itself when it comes to helping businesses expand their online presence and meet their goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Data-Driven Approach</h3>
                                            </Link>
                                                <p className="text-md neutral-700">We utilise analytics as part of our strategy development in order to continually refine and optimise for optimal results.</p>
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
