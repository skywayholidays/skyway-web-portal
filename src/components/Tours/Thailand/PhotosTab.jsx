// PhotosTab.jsx
import React, { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import t1 from '../../../assets/images/t-1.jpg';
import t2 from '../../../assets/images/t-2.jpg';
import t3 from '../../../assets/images/t-3.jpg';
import t4 from '../../../assets/images/t-4.jpg';
import t5 from '../../../assets/images/t-5.jpg';

const images = [t1, t2, t3, t4, t5];

const PhotosTab = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => setCurrentIndex(index);
    const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    return (
        <div>
            <Carousel
                selectedItem={currentIndex}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={2000}
                onChange={setCurrentIndex}
                className="w-full max-w-3xl"
            >
                {images.map((URL, index) => (
                    <div key={index} className="w-full h-72 md:h-96 lg:h-[28rem] flex justify-center items-center">
                        <img alt={`Thailand Image ${index + 1}`} src={URL} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                ))}
            </Carousel>
            
            <div className="flex items-center mt-4 space-x-4 relative">
                <button onClick={handlePrev} className="bg-green_1 text-white p-2 hover:bg-blue-700">←</button>
                
                <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
                    {images.map((URL, index) => (
                        <img
                            key={index}
                            src={URL}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                            className={`w-16 h-16 object-cover rounded cursor-pointer ${index === currentIndex ? "border-2 border-blue-500" : "border-2 border-transparent"}`}
                        />
                    ))}
                </div>
                
                <button onClick={handleNext} className="bg-green_1 text-white p-2 hover:bg-blue-700">→</button>
            </div>
        </div>
    );
};

export default PhotosTab;
