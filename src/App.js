import logo from './logo.svg';
import car from './car.jpg';
import video from './smoke.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="mainheader">
        <div class="title-card">
          <video src={video} autoPlay loop muted></video>
          <h1>DETAILING</h1>
          <button> BUY NOW</button>
        </div>
        <p>   
          Edit <code>src/App.js</code>.
        </p>
      </header>
      <div className="maincontent">
          <img src={car} alt="car" />
          <h2>Car</h2>
          <p>Car is a vehicle that is used to transport people from one place to another.</p>
          <button>BUY NOW</button>
      </div>
    </div>
  );
}

export default App;
