import './../styles/css/main.css';

function Banner() {
    return(
        <section className='section sectionBanner'>
            <div className="banner-inicio">
                <picture>
	                <source media="(max-width: 633px)" srcset="./images/img-bannermovil.png"/>
	                <img src="./images/img-banner.png"alt="banner"/>
                </picture>
            </div>
        </section>
    )
}  

export default Banner;