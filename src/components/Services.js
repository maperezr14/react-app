import './../styles/css/main.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false
}

const kiaServices = [ 
    {   
        subtitle: 'CAMPAÑAS PRINT',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!',
        img: '../images/campPrint.svg',
        movilImg: '../images/serv2.svg',

    },
    {
        subtitle: 'CAMPAÑAS INTEGRALES',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!',
        img: '../images/campInte.svg',
        movilImg: '../images/serv3.svg',
    
    },
    {
        subtitle: 'CAMPAÑAS DIGITALES',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!',
        img: '../images/campDigi.svg',
        movilImg: '../images/serv1.svg',
        
    }
]

function Services() {
    return( 
        <section id='Servicios' className='section sectionServices'>
            <div className='container'>
                <h2>NUESTROS SERVICIOS</h2>
                <Slider {...sliderSettings} className='sliderServices'>
                    {kiaServices.map((kiaServices, index) => (
                        <div key={index} className='itemSlider'>               
                            <picture>
                                <source alt={kiaServices.subtitle} srcSet={kiaServices.movilImg} media="(max-width:767px)"/>
                                <img alt={kiaServices.subtitle} src={kiaServices.img} width="200px"/>                            
                            </picture>
                            <div className='caption'>
                                <h3>{kiaServices.subtitle}</h3>
                                <p>{kiaServices.content}</p>
                            </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
} 


export default Services;