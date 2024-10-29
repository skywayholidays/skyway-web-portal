import React, { useState, useEffect } from 'react'
import { image1, image2, image3, image4 } from "../assets/images";


export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    { src: image1, alt: 'Austin Fireworks' },
    { src: image2, alt: 'Taj Mahal' },
    { src: image3, alt: 'Ibiza' },
    { src: image4, alt: 'Ankor Wat' },
    { src: image1, alt: 'Austin Fireworks' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg aspect-video">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}