import React, { useState } from 'react';
import ArrowRight from '../assets/carrouselright.png'
import ArrowLeft from '../assets/carrouselleft.png' 
import '../sass/modules/carrousel.scss'


function Carrousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // modification de la slide en fonction de l'index de l'image
  const changeSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(imageSlider.length - 1); 
    } else if (index >= imageSlider.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  // Affichage de l'image suivante 
  const nextSlide = () => {
    changeSlide(currentIndex + 1);
  };

  //Affichage de l'image précédente 
  const prevSlide = () => {
    changeSlide(currentIndex - 1);
  };

  return (
    <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carrousel'>
      {imageSlider.length > 1 && (
        <>
          <img
            className='carrousel_arrow carrousel_arrow_right'
            src={ArrowRight}
            alt='Show next slider'
            onClick={nextSlide}
          />
          <img
            className='carrousel_arrow carrousel_arrow_left'
            src={ArrowLeft}
            alt='Show previous slider'
            onClick={prevSlide}
          />
          <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
        </>
      )}
    </section>
  );
}

export default Carrousel;