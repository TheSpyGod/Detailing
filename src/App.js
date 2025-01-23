import React, {useState, useEffect} from 'react';
import video from './smoke.mp4';
import './App.css';
import Card from './Card';
import { processRecords } from './FileReader';
import logo from './logo.svg';
import whatsapp from './whatsapp.png';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [cards, setData] = useState([]);

  useEffect(() => {
    const records = t('records', { returnObjects: true });
    const processedRecords = processRecords(records);
    setData(processedRecords);
  }, [t]);

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="mainheader">
        <div className="title-card">
          <video src={video} autoPlay loop muted></video>
          <div className="lang_btn">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('pl')}>PL</button>
          </div>
          <h1>{t('title')}</h1>
          <button>{t('book_button')}</button>
        </div>
      </header>
      <div className="banner">
        <h1>{t('offers')}</h1>
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
      <div className="contact">
        <h1>{t('contact')}</h1>
        <p><img src={whatsapp} alt="WhatsApp Logo"/> +34 631 01 91 08</p>
        <h3><b>E-mail</b>: marcinjarzebiak59@gmail.com</h3>
      </div>
      <footer>
          <img src={logo} alt="logo" className="logo"/>
          <p>© 2025 DETAILING</p>
      </footer>
    </div>
  );
}

export default App;
