import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const reviews = [
  {
    id: 1,
    name: 'Fatima Sana Shaikh',
    location: 'Mumbai',
    text: 'It was my privilege to be a part of Initiators of Change. Being there in the foundation for a enriched me with lots of experience.',
    image: '../../IOC Website pictures/Reviews/fatima.jpg', // 
  },
  {
    id: 2,
    name: 'Surjit Patar',
    location: 'Ludhiana',
    text: "It was my privilege to be a part of Initiators of Change. Being there in the foundation for a enriched me with lots of experience.",
    image: '../../IOC Website pictures/Reviews/surjeet patar.jpeg', // 
  },
  {
    id: 3,
    name: 'Vishnu Kaushal',
    location: 'Delhi',
    text: "It was my privilege to be a part of Initiators of Change. Being there in the foundation for a enriched me with lots of experience.",
    image: '../../IOC Website pictures/Reviews/Vishnu-Kaushal-image.jpg', // Update the image path
  },
];

const WhatPeopleAreSaying = () => {
  return (
    <div className="overflow-hidden py-8 flex flex-col justify-center align-items-center">
      <h2 className="text-center text-2xl font-bold mb-6">WHAT PEOPLE ARE SAYING</h2>
      <div className="animate-scroll2 flex space-x-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-96 bg-white rounded-lg shadow- p-4"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
            <p className="text-gray-700">
              <i className="fas fa-quote-left mr-2 text-orange-300"></i>
              {review.text}
              <i className="fas fa-quote-right ml-2 text-orange-300"></i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleAreSaying;







