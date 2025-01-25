import React, { useState, useEffect} from 'react';
import { Parallax } from 'react-parallax';
import video2 from './smoke2.mp4';
import './App.css';
import Card from './Card';
import { processRecords } from './FileReader';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import './i18n';
import whatsapp from './whatsapp.png';
import image1 from './slideshow/exterior1.jpg';
import image2 from './slideshow/exterior2.jpg';
import image3 from './slideshow/exterior3.jpg';
import image4 from './slideshow/exterior4.jpg';
import image6 from './slideshow/interior1.jpg';
import image7 from './slideshow/interior2.jpg';
import bgImage1 from './car.jpg';
import bgImage2 from './slideshow/interior2.jpg';
import email from './email.png';
import { useSlideshow } from './Slideshow';

function App() {
  const { t, i18n } = useTranslation();
  const [cards, setData] = useState([]);
  const [bgImage, setBgImage] = useState(bgImage1);

  useEffect(() => {
    const records = t('records', { returnObjects: true });
    const processedRecords = processRecords(records);
    setData(processedRecords);
  }, [t]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentImage = useSlideshow([image1, image2, image3, image4, image6, image7]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'});
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight / 2) {
        setBgImage(bgImage2); 
      } else {
        setBgImage(bgImage1); 
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSlideshowClick = () => {
    window.location.href = 'https://www.facebook.com/search/top?q=autodetailing.expert';
  };

  return (
    <div className="App">
       <Parallax strength={300} style={{ width: '100%', minHeight: '100vh' }}>
        <div className="background-layer" style={{
            backgroundImage: `url(${bgImage})`
          }}>
          <video src={video2} autoPlay loop muted style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </div>
        <div className="title-card">
          <div className="lang_btn">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('pl')}>PL</button>
            <button onClick={() => changeLanguage('es')}>ES</button>
          </div>
          <h1>{t('title')}</h1>
          <button onClick={scrollToBottom}>{t('book_button')}</button>
        </div>
      </Parallax>

      <Parallax strength={300} style={{ width: '100%', minHeight: '100vh' }}>
        <div className="title-card">
          <h1>{t('page')}</h1>
          <img id="slideshow" src={currentImage} alt="Slideshow" onClick={handleSlideshowClick} />
        </div>
      </Parallax>

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
            scrollToPage={scrollToBottom}
          />
        ))}
      </div>
      <div className="contact">
              <h1>{t('contact')}</h1>
              <p>
                <img src={whatsapp} alt="WhatsApp Logo"/><br/> +34 631 01 91 08
              </p>
              <h3>
                <img src={email} alt="Email Logo"/> <br/>
                marcinjarzebiak59@gmail.com
              </h3>
            </div>
    </div>
  );
}

export default App;