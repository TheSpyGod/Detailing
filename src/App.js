  import React, {useState, useEffect, useRef} from 'react';
  import { Parallax, ParallaxLayer } from '@react-spring/parallax';
  import video2 from './smoke2.mp4';
  import './App.css';
  import Card from './Card';
  import { processRecords } from './FileReader';
  import whatsapp from './whatsapp.png';
  import DOMPurify from 'dompurify';
  import { useTranslation } from 'react-i18next';
  import './i18n';
  import image1 from './slideshow/exterior1.jpg';
  import image2 from './slideshow/exterior2.jpg';
  import image3 from './slideshow/exterior3.jpg';
  import image4 from './slideshow/exterior4.jpg';
  import image6 from './slideshow/interior1.jpg';
  import image7 from './slideshow/interior2.jpg';
  import { useSlideshow } from './Slideshow';

  function App() {
    const { t, i18n } = useTranslation();
    const [cards, setData] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
      const records = t('records', { returnObjects: true });
      const processedRecords = processRecords(records);
      setData(processedRecords);
    }, [t]);

      const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const currentImage = useSlideshow([image1, image2, image3, image4, image6, image7]);

    const scrollToPage = (page) => {
      if (ref.current) {
        ref.current.scrollTo(page);
      }
    };

    const handleSlideshowClick = () => {
      window.location.href = 'https://www.facebook.com/search/top?q=autodetailing.expert';
    };

    return (
      <div className="App">
        <Parallax pages={4.6} ref={ref}>
          <ParallaxLayer offset={0} speed={0} factor={2.6}>
            <div className="background-layer">
            <video src={video2} autoPlay loop muted></video>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={0} speed={0.5}>
              <div className="title-card">
                <div className="lang_btn">
                  <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('pl')}>PL</button>
                  <button onClick={() => changeLanguage('es')}>ES</button>
                </div>
                <h1>{t('title')}</h1>
                <button onClick={() => ref.current.scrollTo(2)}>{t('book_button')}</button>
              </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="title-card">
              <h1>{t('page')}</h1>
              <img id="slideshow" src={currentImage} alt="Slideshow" onClick={handleSlideshowClick}/>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={2} speed={0.5}>
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
                  scrollToPage={scrollToPage}
                />
              ))}
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.76} speed={0.5} factor={0.5}>
            <div className="contact">
              <h1>{t('contact')}</h1>
              <p>
                <img src={whatsapp} alt="WhatsApp Logo"/> +34 631 01 91 08
              </p>
              <h3>
                <b>E-mail</b>: marcinjarzebiak59@gmail.com
              </h3>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
  export default App;
