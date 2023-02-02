import './../styles/css/main.css';

function Services() {
    return(
        
        <section className='sectionServices'>
             <div className='container'>
                    <h2>NUESTROS SERVICIOS</h2>
            <div className='firstGroup'>
                <ul className='sliderOne'>
                    <li id="slide1">
                        <img className='desktopVer' src="./images/campPrint.svg" alt="anuncios en los metros"></img>
                        <img className='movilVer' src="./images/serv2.svg" alt="anuncios en los metros"></img>
                        <h3>CAMPAÑAS  PRINT</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!</p> </li>
                    <li id="slide2">
                        <img className='desktopVer' src="./images/campInte.svg" alt="imagen de hombre en una caminadora mirando un movil"></img>
                        <img className='movilVer' src="./images/serv3.svg" alt="anuncios en los metros"></img>
                        <h3>CAMPAÑAS  INTEGRALES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!</p>
                    </li>
                    <li id="slide3">
                        <img  className='desktopVer' src="./images/campDigi.svg" alt="anuncio LG"></img> 
                        <img className='movilVer' src="./images/serv1.svg" alt="anuncios en los metros"></img>
                        <h3>CAMPAÑAS DIGITALES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil ex nesciunt quaerat fuga. Possimus nisi veritatis tenetur unde recusandae voluptatibus beatae enim, corporis iste, sunt maiores dolore accusamus sint!</p>
                    </li>
                 </ul>
            </div>
            
            <nav>
                <ul className='menu'>
                    <li className='button'><a href="#slide1">_</a></li>
                    <li className='button'><a href="#slide2">_</a></li>
                    <li className='button'><a href="#slide3">_</a></li>
            </ul>
            </nav>
        </div>
            
        </section>
        
    )
}  

export default Services;