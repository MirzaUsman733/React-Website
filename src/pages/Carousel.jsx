import React, { useRef, useEffect } from 'react';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollCarousel = () => {
      carousel.scrollLeft += 1; // Adjust scroll speed as needed
    };

    let interval = setInterval(scrollCarousel, 10); // Adjust scroll interval as needed

    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });

    carousel.addEventListener('mouseleave', () => {
      clearInterval(interval);
      interval = setInterval(scrollCarousel, 10);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
    className='text-center'
      ref={carouselRef}
      style={{
        width: '200px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {items.map((item, index) => (
        <div className='text-center' key={index} style={{ display: 'inline-block', width: '200px', }}>
          {/* Render your carousel item here */}
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
