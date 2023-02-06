import "./../styles/css/main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'linear',
    dots: false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const valClients = [
    {
        image: '../images/seat.png',
    },
    {
        image: '../images/ibera.png',
    },
    {
        image: '../images/asturiana.png',
    },
    {
        image: '../images/cocacola.png',
    },
    {
        image: '../images/wolkswagen.png',
    },
    {
        image: '../images/nestle.png'
    },
    {
        image: '../images/seat.png',
    },
    {
        image: '../images/ibera.png',
    },
    {
        image: '../images/asturiana.png',
    },
    {
        image: '../images/cocacola.png',
    },
    {
        image: '../images/wolkswagen.png',
    },
    {
        image: '../images/nestle.png'
    }
];

function Clients() {
    return (
    <section id="clientes" className="section sectionClients">
        <div className="container">
            <h2>NUESTROS CLIENTES</h2>
            <p>Nuestros clientes nos avalan. Pensamos que la mejor carta depresentación de una empresa son sus clientes. En todo momento ofrecemos un servicio personalizado y de calidad. Los clientes satisfechos siguen día a día confiando en nuestra profesionalidad. Desde el primer momento trabajamos en unión con ellos aportando nuestra experiencia en todo el proceso.</p>
            <div className="containerClients">
                <Slider {...sliderSettings} className="sliderClients">
                {valClients.map((valClients, index) => (
                    <div key={index}>
                        <img alt="m" className="imgSlider" src={valClients.image} />
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </section>
  );
}
export default Clients;
