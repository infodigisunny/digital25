'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
                <Marquee
                    // style={{ width: "auto" }}
                    pauseOnHover={true}
                    direction="left" className="carouselTicker__list list-logos">
                    <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/ahrefs.svg" alt="Ahrefs" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/backlinko.svg" alt="Backlinko" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/googleanalytics.svg" alt="Google Analytics" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/googlelookerstudio.svg" alt="Google Looker Studio" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/googlesearchconsole.svg" alt="Google Search Console" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/hotjar.svg" alt="Hotjar" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/hubSpot.svg" alt="HubSpot" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/moz.svg" alt="Moz" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/searchenginejournal.svg" alt="Search Engine Journal" /></div>
                </li>
                <li className="carouselTicker__item">
                    <div className="item-logo"><img src="/assets/imgs/page/homepage3/ubersuggest.svg" alt="UberSuggest" /></div>
                </li>
                </Marquee>
        </>
    )
}
