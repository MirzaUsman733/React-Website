import React from 'react'
import Carousel from './Carousel';

export default function CaroselRunner() {
  const items = [
    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 1" />,
    <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 2" />,
    <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 3" />,
  ];

  return (
    <div className='text-center'>
      <h1>Carousel Example</h1>
      <Carousel items={items} />
    </div>
  );
};
