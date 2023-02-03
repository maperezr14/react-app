import './../styles/css/main.css';
function Team() {
    return(
      <section className="team">
        <div className="container">
            <h2>Nuestro Equipo</h2>
         <div className='fotos-equipo'>
            <div className="fotos">
            <img className="imagen-redonda" src="./images/Ellipse 9.jpg" alt=""></img>
            <p>SILVIA PINO </p>
            <p> FULLSTACK DEVELOPER</p>

          </div>  
          <div className="fotos">
            <img className="imagen-redonda" src="./images/18221255.jpg" alt=""></img>
            <p> MARI ANGELES</p>
           <p>FULLSTACK DEVELOPER</p>


          </div>  
          <div className="fotos">
            <img  className="imagen-redonda" src="./images/Rectangle 38.png" alt=""></img>
            <p>VALERY  SUAREZ</p>
            <p>FULLSTACK DEVELOPER</p>


          </div>  
          <div className="fotos">
            <img className="imagen-redonda" src="./images/Ellipse 6.jpg" alt=""></img>
             <p> MILA GALIANO</p>
             <p>FULLSTACK DEVELOPER</p>

          </div>  
          <div className="fotos">
            <img className="imagen-redonda" id="kiara" src="./images/kiara.jpg" alt=""></img>
            <p>KIARA MALASQUEZ</p>
            <p>FULLSTACK DEVELOPER</p>
          </div>  
          <div className="fotos">
            <img className="imagen-redonda" src="./images/fati.jpg" alt=""></img>
            <p>FÁTIMA GARCIA FERNANDEZ</p>
            <p>FULLSTACK DEVELOPER</p> 
          </div>  

          </div>     
        </div>
      </section>
    )
}  

export default Team;