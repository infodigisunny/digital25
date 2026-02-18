export default function Preloader() {
    return (
        <>

            <div id="preloader-active" as="style">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center"><img src="/assets/imgs/template/loading.gif" as="style" alt="Adfinity Clarity" /></div>
                    </div>
                </div>
            </div>

        </>
    )
}
