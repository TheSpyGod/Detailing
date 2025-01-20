import React, {useState, useEffect} from 'react';
import video from './smoke.mp4';
import './App.css';
import Card from './Card';
import { readFile } from './FileReader';
import logo from './logo.svg';

function App() {
  const [cards, setData] = useState([]);

  useEffect(() => {
    const fileName = 'cards.txt';
    readFile(fileName).then(result => {
      setData(result)
    });
  }, []);

  return (
    <div className="App">
      <header className="mainheader">
        <div className="title-card">
          <video src={video} autoPlay loop muted></video>
          <h1>DETAILING</h1>
          <button>ZAREZERWUJ TERMIN</button>
        </div>
      </header>
      <div className="banner">
        <h1>Nasze Oferty</h1>
      </div>
      <div className="maincontent">
        {cards.map((card, index) => (
        <Card 
        key={index}
        className="card"
        title={card[0]}
        description={card[2]}
        price={card[1]} 
        detailedDescription={card[3]}
        
        />
        ))  
        }
      </div>
    </div>
  );
}

export default App;
