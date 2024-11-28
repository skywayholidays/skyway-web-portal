'use client'

import React, { useState, useEffect } from "react";
import { image1, image2, image3, image4 } from "../assets/images";
import HeroSection from "./HeroSection";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: image1, alt: "Austin Fireworks" },
    { src: image2, alt: "Taj Mahal" },
    { src: image3, alt: "Ibiza" },
    { src: image4, alt: "Ankor Wat" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setIsTransitioning(false);
      }, 4000); // Half of the transition duration
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                isTransitioning ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-4 left-0 right-0 flex flex-col justify-center mx-4 space-x-2">
        <HeroSection />
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-6"
                  : "bg-white/50"
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

