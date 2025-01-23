import React, {useState, useEffect} from 'react';
import video from './smoke.mp4';
import './App.css';
import Card from './Card';
import { processRecords } from './FileReader';
import logo from './logo.svg';
import DOMPurify from 'dompurify';

function App() {
  const [cards, setData] = useState([]);


  const records = [
    ["Tuning", "Cena: 67.45", "2days", ["Detailed Feature 1.", "Feature 2.", "Feature 3."]],
    ["Cleaning", "Cena: 67.45", "2days", ["Detailed Feature 1.", "Feature 2.", "Feature 3."]],
    ["Lorey", "Cena: 67.45", "2days", ["Detailed Feature 1.", "Feature 2.", "Feature 3."]],
    ["Lorey", "Cena: 67.45", "2days", ["Detailed Feature 1.", "Feature 2.", "Feature 3."]],
    ["Lorey", "Cena: 67.45", "2days", ["Detailed Feature 1.", "Feature 2.", "Feature 3."]]
  ];

  useEffect(() => {
    const processedRecords = processRecords(records);
    setData(processedRecords);
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
        detailedDescription={<span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(card[3]) }} />}
        
        />
        ))  
        }
      </div>
      <footer>
          <img src={logo} alt="logo" className="logo"/>
          <p>© 2025 DETAILING</p>
      </footer>
    </div>
  );
}

export default App;
