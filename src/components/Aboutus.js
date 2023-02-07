import './../styles/css/main.css';

function Aboutus() {
    return(
        <section>
            <div className="container">
                <h2>SOBRE NOSOTRAS</h2>
                <div className='textoimagen'>
                    <div className="textoprinp">
                        <p> Somos una agencia especializada en marketing, publicidad y desarrollo web.
                        Llevamos más de 25 años ayudando a nuestros clientes a desarrollar su marca personal.</p><p>Esta trayectora profesional nos permite anticiparnos a las últimas tendencias del mercado.
                        Ogilvy está compuesto por profesionales de amplia experiencia en todos los ámbitos.</p>
                    </div>
                    <div className="img_sobrenosotros">
                        <img src='./images/sobrenosotros.png' alt='Imagen-ogilvy'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}  

export default Aboutus;