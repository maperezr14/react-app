import './../styles/css/main.css'; 

const teamGroup =[
{
  imgProfile: './images/Ellipse 9.jpg',
  name:'SILVIA PINO',
  profile: 'FULLSTACK DEVELOPER'
},
{
  imgProfile:'./images/18221255.jpg',
  name:'MARI ANGELES',
  profile:'FULLSTACK DEVELOPER'
},
{
  imgProfile:'./images/Rectangle 38.png',
  name:'VALERY  SUAREZ',
  profile:'FULLSTACK DEVELOPER'
},
{
  imgProfile:'./images/Ellipse 6.jpg',
  name:'MILA GALIANO',
  profile:'FULLSTACK DEVELOPER'
},
{
  imgProfile:'./images/kiara.jpg',
  name:'KIARA MALASQUEZ',
  profile:'FULLSTACK DEVELOPER'
},
{
  imgProfile:'./images/fati.jpg',
  name:'FÁTIMA GARCIA FERNANDEZ',
  profile:'FULLSTACK DEVELOPER'
}
]
function Team() {
    return(
      <section id='nuestro-equipo' className='section sectionTeam team'>
          <div className="container">
            <h2>Nuestro Equipo</h2>
            <div className='fotos-equipo'>
              {
                teamGroup.map(team => (
                <div className="fotos">
                  <img className="imagen-redonda" src={team.imgProfile} alt={team.name}></img>
                  <p>{team.name}</p>
                  <p>{team.profile}</p>
                </div>
              ))
              }       
            </div>     
          </div>
      </section>
    )
}  

export default Team;