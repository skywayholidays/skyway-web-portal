import React from 'react';
import person1 from '../assets/images/hotel1.png';


const cardData = [
  {
    id: 1,
    imageSrc: person1,
    name: "Will Peters",
    role: "President",
    quote: "Even the all-powerful Pointing has no control about the blind texts.",
  },
  {
    id: 2,
    imageSrc: person1,
    name: "Jane Williams",
    role: "Business Manager",
    quote: "One day a small line of blind text by the name of Lorem Ipsum decided to leave.",
  },
  {
    id: 3,
    imageSrc: person1,
    name: "Jeffrey Neddery",
    role: "Marketing Director",
    quote: "Even the all-powerful Pointing has no control about the blind texts.",
  },
];

const FlipCard = ({ imageSrc, name, role, quote }) => (
    <div className="w-72 h-96 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center p-4" style={{ backfaceVisibility: 'hidden' }}>
          <div
            className="w-full h-48 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
          <div className="text-center p-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-100 shadow-lg rounded-lg transform rotate-y-180 backface-hidden flex flex-col items-center justify-center p-6" style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-center italic text-gray-700">"{quote}"</p>
          <div className="mt-4 text-center">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const FlipCardGrid = () => {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cardData.map(card => (
            <FlipCard
              key={card.id}
              imageSrc={card.imageSrc}
              name={card.name}
              role={card.role}
              quote={card.quote}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FlipCardGrid;
