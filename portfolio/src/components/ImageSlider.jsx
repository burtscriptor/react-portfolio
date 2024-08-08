import React, { useEffect, useState } from 'react';
import image1 from '../assets/minesweeper/recussion.png';
import image2 from '../assets/minesweeper/makeField.png';
import image3 from '../assets/minesweeper/initField.png';
import image4 from '../assets/minesweeper/currentTile.png';
import image5 from '../assets/minesweeper/won.png';
import '../styles/ImageSlider.css'

const images = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="images">
      <img src={images[index]} alt={`Slide ${index}`} />
      <p>Image {index + 1} of {images.length}</p>
    </div>
  );
};

export default ImageSlider;
