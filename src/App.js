import './App.css';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import Slider from './components/ImgSlider/slider'
import Services from './components/whatWeDo/service'
import Footer from './components/Footer/footer'
import Incharges from './components/Persons/siteIncharge'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Slider />
        <h1>Services</h1>
        <Services />
        <p className='para'>The above are our top services and we provide even more with customizable options.</p>
        <h1>Incharges</h1>
        <Incharges />
        <Footer style={{color:`black`}} />
      </div>
  );
}

export default App;
