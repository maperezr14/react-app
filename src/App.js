import './App.css';
import Banner from './components/Banner';
import Aboutus from './components/Aboutus';
import Team from './components/Team';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return(
    <div className="App">
      <Banner />
      <Aboutus />
      <Team />
      <Services />
      <Clients />
      <Contact />
    </div>
  )
}

export default App;