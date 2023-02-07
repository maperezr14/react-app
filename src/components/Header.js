import './../styles/css/main.css';

function Header() {
    return(
        <header>
            <div className='container'>
                {/* <nav className='navbar' id="navbar">
                    <a className='brand' href="/">
                        <img src="./images/logo.png" alt="Ogilvy"/>
                    </a>
                    <ul className='list-options'>
                        <li><a className='option' href="#nosotros">Nosotros</a></li>
                        <li><a className='option' href="#nuestro-equipo">Nuestro Equipo</a></li>
                        <li><a className='option' href="#servicios">Servicios</a></li>
                        <li><a className='option' href="#clientes">Clientes</a></li>
                        <li><a className='option' href="#contacto">Contacto</a></li>
                    </ul>
                    <a href="/" className='toggleMenu'>
                        List
                    </a>
                </nav> */}
                <nav className='navbar' id="navbar">
                    <a className='logo' href="/">
                        <img src="./images/logo.png" alt="Ogilvy"/>
                    </a>       
                    <ul class="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>      
                        <div class="menu">    
                            <li><a className='option' href="#nosotros">Nosotros</a></li>
                            <li><a className='option' href="#nuestro-equipo">Nuestro Equipo</a></li>
                            <li><a className='option' href="#servicios">Servicios</a></li>
                            <li><a className='option' href="#clientes">Clientes</a></li>
                            <li><a className='option' href="#contacto">Contacto</a></li>   
                        </div>    
                    </ul>    
                </nav>
            </div>
        </header>
    )
}  

export default Header;