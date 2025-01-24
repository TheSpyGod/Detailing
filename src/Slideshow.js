import { useState, useEffect } from 'react';

export function useSlideshow(images, interval = 5000) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, interval);

    return () => clearInterval(imageInterval); // Cleanup interval on unmount
  }, [images, interval]);

  return currentImage;
}