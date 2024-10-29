import React, { useState, useEffect } from "react";
import { image1, image2, image3, image4 } from "../assets/images";
import HeroSection from "./HeroSection";

export default function ImageSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const images = [
		{ src: image1, alt: "Austin Fireworks" },
		{ src: image2, alt: "Taj Mahal" },
		{ src: image3, alt: "Ibiza" },
		{ src: image4, alt: "Ankor Wat" },
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<div
				className="flex transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="w-full flex-shrink-0">
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>
			<div className="absolute top-4 left-0 right-0 flex flex-col justify-center mx-4 space-x-2 ">
				<HeroSection />
				<div className="flex justify-center">
					{images.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full ${
								currentSlide === index
									? "bg-white"
									: "bg-white/50"
							}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
