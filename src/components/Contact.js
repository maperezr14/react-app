import './../styles/css/main.css';

import Form from './Form';
import Mapa from './Mapa';

import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaMapPin } from 'react-icons/fa'

function Contact() {
    return(
        <section className='section section-contact' id='contacto'>
            <div className="container">
                <h2>Contacto</h2>
                <div className="d-flex content-rs-form">
                    <div className='rrss-map'>
                        <p>Síguenos en nuestras redes sociales:</p>
                        <ul>
                            <li><a href='/' target={"_blank"}><FaLinkedin/> Ogilvy Marketing Digital</a></li>
                            <li><a href='/' target={"_blank"}><FaInstagram/> @Ogilvy</a></li>
                            <li><a href='/' target={"_blank"}><FaFacebook/> Ogilvy</a></li>
                        </ul>
                        <p><FaMapPin/> Estamos ubicados en C. Mariano 34, 28054, Madrid.</p>
                        <div className="ubication">
                            <Mapa/> 
                        </div>                                               
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    )
}  

export default Contact;