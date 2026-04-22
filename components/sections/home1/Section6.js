import Link from 'next/link'

export default function Section6() {
    return (
        <>
            <section className="section-box wow animate__animated animate__fadeIn box-preparing-3">
                <div className="container">
                    <div className="text-center">
                        <h2 className="neutral-0 mb-20">Preparing For Your Success,<br className="d-none d-lg-block" />We Provide
                            Truly Prominent IT Solutions</h2>
                        <p className="text-lg neutral-700">Nivia is an independent web design studio with a rich history.
                            Founded in 1999, it<br className="d-none d-lg-block" />gathered the best web designers  developers.
                        </p>
                    </div>
                    <div className="row mt-90">

                        {/* Card 1 - Content Marketing */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#">
                                    <svg width={33} height={32} viewBox="0 0 33 32" fill="none">
                                        {/* ...SVG paths... */}
                                    </svg>
                                </Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Content Marketing</h5></Link>
                                    <p className="text-md neutral-700">Strategic approach that involves creating and
                                        distributing valuable, relevant, and engaging content to attract and retain a target
                                        audience, ultimately driving brand awareness.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Business Reform */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#"><svg>...</svg></Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Business Reform</h5></Link>
                                    <p>...process of reevaluating and improving internal operations...</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - [Settings/Discount icon] */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#"><svg>...</svg></Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Business Reform</h5></Link>
                                    <p>...process of reevaluating and improving internal operations...</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Infrastructure Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#"><svg>...</svg></Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Infrastructure Plan</h5></Link>
                                    <p>...comprehensive strategy for designing, building, and maintaining...</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 - Firewall Advance */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#"><svg>...</svg></Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Firewall Advance</h5></Link>
                                    <p>...enhancement of security measures through advanced firewall technology...</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 - Data Security */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">
                                <Link className="card-image" href="#"><svg>...</svg></Link>
                                <div className="card-info">
                                    <Link href="#"><h5 className="text-22-bold">Data Security</h5></Link>
                                    <p>...safeguarding sensitive information from unauthorized access...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}