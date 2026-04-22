import Link from 'next/link'

export default function Section6() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-preparing-3">
                <div className="container">
                    <div className="text-center">
                        <h2 className="neutral-0 mb-20">
                            Preparing For Your Success,
                            <br className="d-none d-lg-block" />
                            We Provide Truly Prominent IT Solutions
                        </h2>

                        <p className="text-lg neutral-700">
                            Nivia is an independent web design studio with a rich history.
                            Founded in 1999, it
                            <br className="d-none d-lg-block" />
                            gathered the best web designers developers.
                        </p>
                    </div>

                    <div className="row mt-90">

                        {/* Card 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">

                                <Link className="card-image" href="#">
                                    <svg width={33} height={32}>
                                        {/* SVG ICON CONTENT */}
                                    </svg>
                                </Link>

                                <div className="card-info">
                                    <Link href="#">
                                        <h5 className="text-22-bold">
                                            Content Marketing
                                        </h5>
                                    </Link>

                                    <p className="text-md neutral-700">
                                        Strategic approach that involves creating and
                                        distributing valuable, relevant, and engaging
                                        content to attract and retain a target audience.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* Card 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">

                                <Link className="card-image" href="#">
                                    <svg width={33} height={32}>
                                        {/* SVG ICON CONTENT */}
                                    </svg>
                                </Link>

                                <div className="card-info">

                                    <Link href="#">
                                        <h5 className="text-22-bold">
                                            Business Reform
                                        </h5>
                                    </Link>

                                    <p className="text-md neutral-700">
                                        Refers to reevaluating and improving internal
                                        operations, structure, and strategies to
                                        achieve better efficiency.
                                    </p>

                                </div>

                            </div>
                        </div>


                        {/* Card 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2">

                                <Link className="card-image" href="#">
                                    <svg width={33} height={32}>
                                        {/* SVG ICON CONTENT */}
                                    </svg>
                                </Link>

                                <div className="card-info">

                                    <Link href="#">
                                        <h5 className="text-22-bold">
                                            IT Management
                                        </h5>
                                    </Link>

                                    <p className="text-md neutral-700">
                                        Oversees technology resources including
                                        hardware, software, and networks to ensure
                                        smooth IT operations.
                                    </p>

                                </div>

                            </div>
                        </div>


                        {/* Additional cards bhi isi pattern follow karte hain */}
                        {/* Total multiple service cards defined with SVG icons */}

                    </div>
                </div>
            </section>

        </>
    )
}